import { Creem } from "../../src/index.js";
import { describe, it, expect } from "@jest/globals";
import { APIError } from "../../src/models/errors/index.js";
import { fail } from "../../src/lib/matchers.js";

// Global test variables
const TEST_API_KEY = "creem_4ls1t0PXf7YBAkwIx5Qj5n";
const TEST_LICENSE_KEY = "D78E9-J4OF4-FCA70-WX4GJ-OBUE0";
const TEST_INSTANCE_NAME = "Test Instance";

// Create an actual instance of Creem for testing
const creem = new Creem({
  serverIdx: 2,
});

describe("License Key Operations", () => {
  let instanceId: string | undefined;

  it("should handle API authentication errors", async () => {
    try {
      await creem.validateLicense({
        xApiKey: "fail",
        validateLicenseRequestEntity: {
          key: TEST_LICENSE_KEY,
          instanceId: "",
        },
      });
      fail("Expected an API error but none was thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(APIError);
      expect((error as APIError).statusCode).toBe(403);
    }
  });

  it("should validate a license key successfully", async () => {
    const result = await creem.validateLicense({
      xApiKey: TEST_API_KEY,
      validateLicenseRequestEntity: {
        key: TEST_LICENSE_KEY,
        instanceId: "",
      },
    });

    // Test the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("mode");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("key", TEST_LICENSE_KEY);
    expect(result).toHaveProperty("activation");
    expect(result).toHaveProperty("createdAt");
  });

  it("should activate a license key successfully", async () => {
    const result = await creem.activateLicense({
      xApiKey: TEST_API_KEY,
      activateLicenseRequestEntity: {
        key: TEST_LICENSE_KEY,
        instanceName: TEST_INSTANCE_NAME,
      },
    });

    // Test the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("mode");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status", "active");
    expect(result).toHaveProperty("key", TEST_LICENSE_KEY);
    expect(result).toHaveProperty("activation");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("instance");
    expect(result.instance).toHaveProperty("id");
    expect(result.instance).toHaveProperty("name", TEST_INSTANCE_NAME);
    expect(result.instance).toHaveProperty("status", "active");

    // Store the instanceId for deactivation
    instanceId = result.instance?.id;
  });

  it("should deactivate a license key instance successfully", async () => {
    // Ensure we have an instanceId from the activation step
    expect(instanceId).toBeDefined();

    const result = await creem.deactivateLicense({
      xApiKey: TEST_API_KEY,
      deactivateLicenseRequestEntity: {
        key: TEST_LICENSE_KEY,
        instanceId: instanceId ?? "",
      },
    });

    // Test the response structure and content
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("mode");
    expect(result).toHaveProperty("object");
    expect(result).toHaveProperty("status", "active"); // License remains active
    expect(result).toHaveProperty("key", TEST_LICENSE_KEY);
    expect(result).toHaveProperty("activation");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("instance");
    expect(result.instance).toHaveProperty("id");
    expect(result.instance).toHaveProperty("name", TEST_INSTANCE_NAME);
    expect(result.instance).toHaveProperty("status", "deactivated"); // Instance is deactivated
    expect(result.instance).toHaveProperty("createdAt");
  });

  it("should handle request errors with invalid license key", async () => {
    try {
      await creem.validateLicense({
        xApiKey: TEST_API_KEY,
        validateLicenseRequestEntity: {
          key: "invalid-license-key",
          instanceId: "",
        },
      });
      fail("Expected error with invalid license key but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should handle network errors gracefully", async () => {
    // Create a new instance with an invalid server URL to simulate network error
    const creemWithInvalidServer = new Creem({
      serverIdx: 2,
      serverURL: "http://invalid-url",
    });

    try {
      await creemWithInvalidServer.validateLicense({
        xApiKey: TEST_API_KEY,
        validateLicenseRequestEntity: {
          key: TEST_LICENSE_KEY,
          instanceId: "",
        },
      });
      fail("Expected network error but none was thrown");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
