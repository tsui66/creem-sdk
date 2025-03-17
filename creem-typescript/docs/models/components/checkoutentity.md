# CheckoutEntity

## Example Usage

```typescript
import { CheckoutEntity } from "creem/models/components";

let value: CheckoutEntity = {
  id: "<id>",
  mode: "sandbox",
  object: "<value>",
  status: "<value>",
  product: {},
  order: {
    id: "<id>",
    mode: "live",
    object: "<value>",
    product: {},
    amount: 2000,
    currency: "EUR",
    fxAmount: 15,
    fxCurrency: "EUR",
    fxRate: 1.2,
    status: "pending",
    type: "subscription",
    createdAt: new Date("2023-09-13T00:00:00Z"),
    updatedAt: new Date("2023-09-13T00:00:00Z"),
  },
  checkoutUrl: "https://valuable-behest.com",
  successUrl: "https://example.com/return",
  feature: [
    {
      license: {
        id: "<id>",
        mode: "test",
        object: "<value>",
        status: "active",
        key: "ABC123-XYZ456-XYZ456-XYZ456",
        activation: 5,
        activationLimit: {},
        expiresAt: {},
        createdAt: new Date("2023-09-13T00:00:00Z"),
        instance: [
          {
            id: "<id>",
            mode: "sandbox",
            object: "license-instance",
            name: "My Customer License Instance",
            status: "active",
            createdAt: new Date("2023-09-13T00:00:00Z"),
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | Unique identifier for the object.                                                           |                                                                                             |
| `mode`                                                                                      | [components.CheckoutEntityMode](../../models/components/checkoutentitymode.md)              | :heavy_check_mark:                                                                          | String representing the environment.                                                        |                                                                                             |
| `object`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | String representing the object’s type. Objects of the same type share the same value.       |                                                                                             |
| `status`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | Status of the checkout.                                                                     |                                                                                             |
| `requestId`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | Identify and track each checkout request.                                                   |                                                                                             |
| `product`                                                                                   | [components.CheckoutEntityProduct](../../models/components/checkoutentityproduct.md)        | :heavy_check_mark:                                                                          | The product associated with the checkout session.                                           |                                                                                             |
| `units`                                                                                     | *number*                                                                                    | :heavy_minus_sign:                                                                          | The number of units for the of the product.                                                 |                                                                                             |
| `order`                                                                                     | [components.OrderEntity](../../models/components/orderentity.md)                            | :heavy_minus_sign:                                                                          | The order associated with the checkout session.                                             |                                                                                             |
| `subscription`                                                                              | [components.Subscription](../../models/components/subscription.md)                          | :heavy_minus_sign:                                                                          | The subscription associated with the checkout session.                                      |                                                                                             |
| `customer`                                                                                  | [components.CheckoutEntityCustomer](../../models/components/checkoutentitycustomer.md)      | :heavy_minus_sign:                                                                          | The customer associated with the checkout session.                                          |                                                                                             |
| `customFields`                                                                              | [components.CustomField](../../models/components/customfield.md)[]                          | :heavy_minus_sign:                                                                          | Additional information collected from your customer during the checkout process.            |                                                                                             |
| `checkoutUrl`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | The URL to which the customer will be redirected to complete the payment.                   |                                                                                             |
| `successUrl`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | The URL to which the user will be redirected after the checkout process is completed.       | https://example.com/return                                                                  |
| `feature`                                                                                   | [components.ProductFeatureEntity](../../models/components/productfeatureentity.md)[]        | :heavy_minus_sign:                                                                          | Features issued for the order.                                                              |                                                                                             |
| `metadata`                                                                                  | [components.MetadataEntity](../../models/components/metadataentity.md)[]                    | :heavy_minus_sign:                                                                          | A key-value pair where the key is a string, and the value can be a string, number, or null. |                                                                                             |