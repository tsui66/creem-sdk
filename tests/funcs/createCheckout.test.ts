import { Creem } from "../../src/index.js";
import * as operations from "../../src/models/operations/index.js";
import { CreemCore } from "../../src/core.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";
import { Result } from "../../src/types/fp.js";
import { CheckoutEntity } from "../../src/models/components/index.js";
import { createCheckout } from "../../src/funcs/createCheckout.js";

// Create an actual instance of Creem for testing
const creem = new Creem({
  serverIdx: 1,
});

describe("checkoutsControllerV1CreateCheckout", () => {
  it("should handle API authentication errors", async () => {
    try {
      // Attempt to call SDK method with test API key
      await creem.createCheckout({
        xApiKey: "fail",
        createCheckoutRequestEntity: {
          productId: "prod_4C0r0omcPTrDv4bWo3fW9n",
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
      xApiKey: "creem_test_1j6vDMlhZTyavu0vACOZqD",
      createCheckoutRequestEntity: {
        productId: "prod_4C0r0omcPTrDv4bWo3fW9n",
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
          productId: "prod_4C0r0omcPTrDv4bWo3fW9n",
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
        xApiKey: "creem_test_1j6vDMlhZTyavu0vACOZqD",
        createCheckoutRequestEntity: {
          productId: "non-existent-product-id",
        },
      });
      fail("Expected error with invalid product ID but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
