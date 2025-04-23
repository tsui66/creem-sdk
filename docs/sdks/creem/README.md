# Creem SDK

## Overview

Creem API: Creem is an all-in-one platform for managing subscriptions and recurring revenue, tailored specifically for today's SaaS companies. It enables you to boost revenue, enhance customer retention, and scale your operations seamlessly.'

### Available Operations

* [productsControllerV1Retrieve](#productscontrollerv1retrieve) - Retrieve a product
* [productsControllerV1Create](#productscontrollerv1create) - Creates a new product.
* [productsControllerV1Search](#productscontrollerv1search) - List all products
* [customersControllerV1Retrieve](#customerscontrollerv1retrieve) - Retrieve a customer
* [customersBillingControllerV1Generate](#customersbillingcontrollerv1generate) - Generate Customer Links
* [subscriptionsControllerV1Retrieve](#subscriptionscontrollerv1retrieve) - Retrieve a subscription
* [subscriptionsControllerV1Cancel](#subscriptionscontrollerv1cancel) - Cancel a subscription.
* [subscriptionsControllerV1Update](#subscriptionscontrollerv1update) - Update a subscription.
* [subscriptionsControllerV1Upgrade](#subscriptionscontrollerv1upgrade) - Upgrade a subscription to a different product
* [checkoutsControllerV1Retrieve](#checkoutscontrollerv1retrieve) - Retrieve a new checkout session.
* [createCheckout](#createcheckout) - Creates a new checkout session.
* [licensesControllerV1Activate](#licensescontrollerv1activate) - Activates a license key.
* [licensesControllerV1Deactivate](#licensescontrollerv1deactivate) - Deactivate a license key instance.
* [licensesControllerV1Validate](#licensescontrollerv1validate) - Validates a license key or instance.
* [discountsControllerV1Retrieve](#discountscontrollerv1retrieve) - Retrieve discount
* [discountsControllerV1Create](#discountscontrollerv1create) - Create a discount.
* [discountsControllerV1Delete](#discountscontrollerv1delete) - Delete a discount.
* [transactionsControllerV1Search](#transactionscontrollerv1search) - List all transactions

## productsControllerV1Retrieve

Retrieve a product

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.productsControllerV1Retrieve({
    productId: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { productsControllerV1Retrieve } from "creem/funcs/productsControllerV1Retrieve.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await productsControllerV1Retrieve(creem, {
    productId: "<id>",
    xApiKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ProductsControllerV1RetrieveRequest](../../models/operations/productscontrollerv1retrieverequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ProductEntity](../../models/components/productentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## productsControllerV1Create

Creates a new product.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.productsControllerV1Create({
    xApiKey: "<value>",
    createProductRequestEntity: {
      name: "<value>",
      imageUrl: "https://picsum.photos/200/300",
      price: 400,
      currency: "EUR",
      billingType: "recurring",
      billingPeriod: "every-month",
      features: [
        {
          id: "<id>",
          type: "<value>",
          description: "Get access to discord server.",
        },
        {
          id: "<id>",
          type: "<value>",
          description: "Get access to discord server.",
        },
        {
          id: "<id>",
          type: "<value>",
          description: "Get access to discord server.",
        },
      ],
      taxMode: "inclusive",
      taxCategory: "saas",
      defaultSuccessUrl: "https://example.com/?status=successful",
      customField: [
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { productsControllerV1Create } from "creem/funcs/productsControllerV1Create.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await productsControllerV1Create(creem, {
    xApiKey: "<value>",
    createProductRequestEntity: {
      name: "<value>",
      imageUrl: "https://picsum.photos/200/300",
      price: 400,
      currency: "EUR",
      billingType: "recurring",
      billingPeriod: "every-month",
      features: [
        {
          id: "<id>",
          type: "<value>",
          description: "Get access to discord server.",
        },
        {
          id: "<id>",
          type: "<value>",
          description: "Get access to discord server.",
        },
        {
          id: "<id>",
          type: "<value>",
          description: "Get access to discord server.",
        },
      ],
      taxMode: "inclusive",
      taxCategory: "saas",
      defaultSuccessUrl: "https://example.com/?status=successful",
      customField: [
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ProductsControllerV1CreateRequest](../../models/operations/productscontrollerv1createrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ProductEntity](../../models/components/productentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## productsControllerV1Search

List all products

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.productsControllerV1Search({
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { productsControllerV1Search } from "creem/funcs/productsControllerV1Search.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await productsControllerV1Search(creem, {
    xApiKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ProductsControllerV1SearchRequest](../../models/operations/productscontrollerv1searchrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ProductListEntity](../../models/components/productlistentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## customersControllerV1Retrieve

Retrieve a customer

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.customersControllerV1Retrieve({
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { customersControllerV1Retrieve } from "creem/funcs/customersControllerV1Retrieve.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await customersControllerV1Retrieve(creem, {
    xApiKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersControllerV1RetrieveRequest](../../models/operations/customerscontrollerv1retrieverequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerEntity](../../models/components/customerentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## customersBillingControllerV1Generate

Generate Customer Links

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.customersBillingControllerV1Generate({
    xApiKey: "<value>",
    createCustomerPortalLinkRequestEntity: {
      customerId: "<id>",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { customersBillingControllerV1Generate } from "creem/funcs/customersBillingControllerV1Generate.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await customersBillingControllerV1Generate(creem, {
    xApiKey: "<value>",
    createCustomerPortalLinkRequestEntity: {
      customerId: "<id>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomersBillingControllerV1GenerateRequest](../../models/operations/customersbillingcontrollerv1generaterequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerLinksEntity](../../models/components/customerlinksentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## subscriptionsControllerV1Retrieve

Retrieve a subscription

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.subscriptionsControllerV1Retrieve({
    subscriptionId: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { subscriptionsControllerV1Retrieve } from "creem/funcs/subscriptionsControllerV1Retrieve.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await subscriptionsControllerV1Retrieve(creem, {
    subscriptionId: "<id>",
    xApiKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SubscriptionsControllerV1RetrieveRequest](../../models/operations/subscriptionscontrollerv1retrieverequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SubscriptionEntity](../../models/components/subscriptionentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## subscriptionsControllerV1Cancel

Cancel a subscription.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.subscriptionsControllerV1Cancel({
    id: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { subscriptionsControllerV1Cancel } from "creem/funcs/subscriptionsControllerV1Cancel.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await subscriptionsControllerV1Cancel(creem, {
    id: "<id>",
    xApiKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SubscriptionsControllerV1CancelRequest](../../models/operations/subscriptionscontrollerv1cancelrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SubscriptionEntity](../../models/components/subscriptionentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## subscriptionsControllerV1Update

Update a subscription.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.subscriptionsControllerV1Update({
    id: "<id>",
    xApiKey: "<value>",
    updateSubscriptionRequestEntity: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { subscriptionsControllerV1Update } from "creem/funcs/subscriptionsControllerV1Update.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await subscriptionsControllerV1Update(creem, {
    id: "<id>",
    xApiKey: "<value>",
    updateSubscriptionRequestEntity: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SubscriptionsControllerV1UpdateRequest](../../models/operations/subscriptionscontrollerv1updaterequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SubscriptionEntity](../../models/components/subscriptionentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## subscriptionsControllerV1Upgrade

Upgrade a subscription to a different product

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.subscriptionsControllerV1Upgrade({
    id: "<id>",
    xApiKey: "<value>",
    upgradeSubscriptionRequestEntity: {
      productId: "prod_123",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { subscriptionsControllerV1Upgrade } from "creem/funcs/subscriptionsControllerV1Upgrade.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await subscriptionsControllerV1Upgrade(creem, {
    id: "<id>",
    xApiKey: "<value>",
    upgradeSubscriptionRequestEntity: {
      productId: "prod_123",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SubscriptionsControllerV1UpgradeRequest](../../models/operations/subscriptionscontrollerv1upgraderequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SubscriptionEntity](../../models/components/subscriptionentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## checkoutsControllerV1Retrieve

Retrieve a new checkout session.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.checkoutsControllerV1Retrieve({
    checkoutId: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { checkoutsControllerV1Retrieve } from "creem/funcs/checkoutsControllerV1Retrieve.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await checkoutsControllerV1Retrieve(creem, {
    checkoutId: "<id>",
    xApiKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CheckoutsControllerV1RetrieveRequest](../../models/operations/checkoutscontrollerv1retrieverequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CheckoutEntity](../../models/components/checkoutentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCheckout

Creates a new checkout session.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.createCheckout({
    xApiKey: "<value>",
    createCheckoutRequestEntity: {
      productId: "<id>",
      customer: {
        id: "cust_1234567890",
        email: "user@example.com",
      },
      customField: [
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { createCheckout } from "creem/funcs/createCheckout.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await createCheckout(creem, {
    xApiKey: "<value>",
    createCheckoutRequestEntity: {
      productId: "<id>",
      customer: {
        id: "cust_1234567890",
        email: "user@example.com",
      },
      customField: [
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
        {
          type: "text",
          key: "<key>",
          label: "<value>",
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCheckoutRequest](../../models/operations/createcheckoutrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CheckoutEntity](../../models/components/checkoutentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## licensesControllerV1Activate

Activates a license key.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.licensesControllerV1Activate({
    xApiKey: "<value>",
    activateLicenseRequestEntity: {
      key: "<key>",
      instanceName: "<value>",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { licensesControllerV1Activate } from "creem/funcs/licensesControllerV1Activate.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await licensesControllerV1Activate(creem, {
    xApiKey: "<value>",
    activateLicenseRequestEntity: {
      key: "<key>",
      instanceName: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LicensesControllerV1ActivateRequest](../../models/operations/licensescontrollerv1activaterequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LicenseEntity](../../models/components/licenseentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## licensesControllerV1Deactivate

Deactivate a license key instance.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.licensesControllerV1Deactivate({
    xApiKey: "<value>",
    deactivateLicenseRequestEntity: {
      key: "<key>",
      instanceId: "<id>",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { licensesControllerV1Deactivate } from "creem/funcs/licensesControllerV1Deactivate.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await licensesControllerV1Deactivate(creem, {
    xApiKey: "<value>",
    deactivateLicenseRequestEntity: {
      key: "<key>",
      instanceId: "<id>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LicensesControllerV1DeactivateRequest](../../models/operations/licensescontrollerv1deactivaterequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LicenseEntity](../../models/components/licenseentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## licensesControllerV1Validate

Validates a license key or instance.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.licensesControllerV1Validate({
    xApiKey: "<value>",
    validateLicenseRequestEntity: {
      key: "<key>",
      instanceId: "<id>",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { licensesControllerV1Validate } from "creem/funcs/licensesControllerV1Validate.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await licensesControllerV1Validate(creem, {
    xApiKey: "<value>",
    validateLicenseRequestEntity: {
      key: "<key>",
      instanceId: "<id>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LicensesControllerV1ValidateRequest](../../models/operations/licensescontrollerv1validaterequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LicenseEntity](../../models/components/licenseentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## discountsControllerV1Retrieve

Retrieve discount

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.discountsControllerV1Retrieve({
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { discountsControllerV1Retrieve } from "creem/funcs/discountsControllerV1Retrieve.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await discountsControllerV1Retrieve(creem, {
    xApiKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DiscountsControllerV1RetrieveRequest](../../models/operations/discountscontrollerv1retrieverequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DiscountEntity](../../models/components/discountentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## discountsControllerV1Create

Create a discount.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.discountsControllerV1Create({
    xApiKey: "<value>",
    createDiscountRequestEntity: {
      name: "Holiday Sale",
      code: "HOLIDAY2024",
      type: "fixed",
      amount: 20,
      currency: "USD",
      percentage: 15,
      expiryDate: new Date("2024-12-31T23:59:59Z"),
      maxRedemptions: 100,
      duration: "repeating",
      durationInMonths: 6,
      appliesToProducts: [
        "prod_123",
        "prod_456",
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { discountsControllerV1Create } from "creem/funcs/discountsControllerV1Create.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await discountsControllerV1Create(creem, {
    xApiKey: "<value>",
    createDiscountRequestEntity: {
      name: "Holiday Sale",
      code: "HOLIDAY2024",
      type: "fixed",
      amount: 20,
      currency: "USD",
      percentage: 15,
      expiryDate: new Date("2024-12-31T23:59:59Z"),
      maxRedemptions: 100,
      duration: "repeating",
      durationInMonths: 6,
      appliesToProducts: [
        "prod_123",
        "prod_456",
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DiscountsControllerV1CreateRequest](../../models/operations/discountscontrollerv1createrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DiscountEntity](../../models/components/discountentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## discountsControllerV1Delete

Delete a discount.

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.discountsControllerV1Delete({
    id: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { discountsControllerV1Delete } from "creem/funcs/discountsControllerV1Delete.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await discountsControllerV1Delete(creem, {
    id: "<id>",
    xApiKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DiscountsControllerV1DeleteRequest](../../models/operations/discountscontrollerv1deleterequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DiscountEntity](../../models/components/discountentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## transactionsControllerV1Search

List all transactions

### Example Usage

```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.transactionsControllerV1Search({
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CreemCore } from "creem/core.js";
import { transactionsControllerV1Search } from "creem/funcs/transactionsControllerV1Search.js";

// Use `CreemCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const creem = new CreemCore();

async function run() {
  const res = await transactionsControllerV1Search(creem, {
    xApiKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TransactionsControllerV1SearchRequest](../../models/operations/transactionscontrollerv1searchrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TransactionListEntity](../../models/components/transactionlistentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |