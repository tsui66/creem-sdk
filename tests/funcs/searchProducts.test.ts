import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";

// Global test variables
const TEST_API_KEY = "creem_4ls1t0PXf7YBAkwIx5Qj5n";

// Create an actual instance of Creem for testing
const creem = new Creem({
  serverIdx: 2,
});

describe("searchProducts", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with invalid API key
      await creem.searchProducts({
        xApiKey: "fail",
      });
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should search products successfully", async () => {
    // When using the SDK instance directly, it returns ProductListEntity
    const result = await creem.searchProducts({
      xApiKey: TEST_API_KEY,
    });

    // Test direct SDK method
    expect(result).toHaveProperty("items");
    expect(Array.isArray(result.items)).toBe(true);
    expect(result).toHaveProperty("pagination");

    // Test pagination object structure
    expect(result.pagination).toHaveProperty("totalRecords");
    expect(result.pagination).toHaveProperty("totalPages");
    expect(result.pagination).toHaveProperty("currentPage");
    expect(result.pagination).toHaveProperty("nextPage");
    expect(result.pagination).toHaveProperty("prevPage");

    // Test product items structure (if any items exist)
    if (result.items.length > 0) {
      const firstProduct = result.items[0];
      expect(firstProduct).toHaveProperty("id");
      expect(firstProduct).toHaveProperty("name");
      expect(firstProduct).toHaveProperty("description");
      expect(firstProduct).toHaveProperty("price");
      expect(firstProduct).toHaveProperty("currency");
      expect(firstProduct).toHaveProperty("billingType");
      expect(firstProduct).toHaveProperty("billingPeriod");
      expect(firstProduct).toHaveProperty("status");
      expect(firstProduct).toHaveProperty("taxMode");
      expect(firstProduct).toHaveProperty("taxCategory");
      expect(firstProduct).toHaveProperty("productUrl");
      expect(firstProduct).toHaveProperty("mode");
    }
  });

  it("should handle pagination parameters correctly", async () => {
    const pageSize = 2;
    const result = await creem.searchProducts({
      xApiKey: TEST_API_KEY,
      pageSize: pageSize,
      pageNumber: 1,
    });

    expect(result.items.length).toBeLessThanOrEqual(pageSize);
    expect(result.pagination.currentPage).toBe(1);
    expect(result.pagination.totalPages).toBeGreaterThanOrEqual(1);
    expect(result.pagination.totalRecords).toBeGreaterThanOrEqual(
      result.items.length
    );
  });

  it("should handle validation errors", async () => {
    try {
      // Use invalid input to trigger validation error
      await creem.searchProducts({
        xApiKey: "",
      });
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle invalid pagination parameters", async () => {
    try {
      await creem.searchProducts({
        xApiKey: TEST_API_KEY,
        pageNumber: -1, // Invalid page number
      });
      fail("Expected error with invalid page number but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
