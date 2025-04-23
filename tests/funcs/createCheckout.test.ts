import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";

// Global test variables
const TEST_PRODUCT_ID = "prod_1IdKAUM3UpTXdNEsDGH04C";
const TEST_API_KEY = "creem_4ls1t0PXf7YBAkwIx5Qj5n";

// Create an actual instance of Creem for testing
const creem = new Creem({
  serverIdx: 2,
});

describe("createCheckout", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with test API key
      await creem.createCheckout({
        xApiKey: "fail",
        createCheckoutRequestEntity: {
          productId: TEST_PRODUCT_ID,
        },
      });
      // If it succeeds, fail the test (we expect it to throw)
      fail("Expected an API error but none was thrown");
    } catch (error) {
      // We expect this to fail with a 403 error due to invalid API key
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should create a new checkout session successfully", async () => {
    // When using the SDK instance directly, it returns CheckoutEntity
    const result = await creem.createCheckout({
      xApiKey: TEST_API_KEY,
      createCheckoutRequestEntity: {
        productId: TEST_PRODUCT_ID,
      },
    });

    // Test direct SDK method (unwraps Result)
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("checkoutUrl");
    expect(result).toHaveProperty("status");
  });

  it("should handle validation errors", async () => {
    try {
      // Use invalid input to trigger validation error
      await creem.createCheckout({
        xApiKey: "",
        createCheckoutRequestEntity: {
          productId: TEST_PRODUCT_ID,
        },
      });
      fail("Expected validation error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle request errors with invalid product ID", async () => {
    try {
      await creem.createCheckout({
        xApiKey: TEST_API_KEY,
        createCheckoutRequestEntity: {
          productId: "non-existent-product-id",
        },
      });
      fail("Expected error with invalid product ID but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should create checkout with advanced options successfully", async () => {
    const result = await creem.createCheckout({
      xApiKey: TEST_API_KEY,
      createCheckoutRequestEntity: {
        requestId: "test_request_id",
        productId: TEST_PRODUCT_ID,
        customer: {
          email: "test@example.com",
        },
        customField: [
          {
            type: "text",
            key: "thing",
            label: "Thing",
            optional: true,
            text: {
              maxLength: 100,
              minLength: 0,
            },
          },
        ],
        successUrl: "https://google.com",
        metadata: [
          {
            userId: "myUserId",
          },
        ],
      },
    });

    // Verify the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("object", "checkout");
    expect(result).toHaveProperty("product", TEST_PRODUCT_ID);
    expect(result).toHaveProperty("units", 1);
    expect(result).toHaveProperty("status", "pending");
    expect(result).toHaveProperty("checkoutUrl");
    expect(result.checkoutUrl).toContain(
      `https://creem.io/test/checkout/${TEST_PRODUCT_ID}/`
    );
    expect(result).toHaveProperty("successUrl", "https://google.com");
    expect(result).toHaveProperty("metadata");
    expect(result.metadata).toEqual([{ userId: "myUserId" }]);
    expect(result).toHaveProperty("mode", "test");
  });
});
