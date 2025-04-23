# CreateCheckoutRequestEntity

## Example Usage

```typescript
import { CreateCheckoutRequestEntity } from "creem/models/components";

let value: CreateCheckoutRequestEntity = {
  productId: "prod_1234567890",
  units: 1,
  discountCode: "SUMMER2024",
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
  ],
  metadata: {
    "userId": "user_123",
    "visitCount": 42,
    "lastVisit": "2023-04-01",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Identify and track each checkout request.                                                            |                                                                                                      |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the product associated with the checkout session.                                          | prod_1234567890                                                                                      |
| `units`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The number of units for the order.                                                                   | 1                                                                                                    |
| `discountCode`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Prefill the checkout session with a discount code.                                                   | SUMMER2024                                                                                           |
| `customer`                                                                                           | [components.CustomerRequestEntity](../../models/components/customerrequestentity.md)                 | :heavy_minus_sign:                                                                                   | Customer data for checkout session. This will prefill the customer info on the checkout page         |                                                                                                      |
| `customField`                                                                                        | [components.CustomFieldRequestEntity](../../models/components/customfieldrequestentity.md)[]         | :heavy_minus_sign:                                                                                   | Collect additional information from your customer using custom fields. Up to 3 fields are supported. |                                                                                                      |
| `successUrl`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The URL to which the user will be redirected after the checkout process is completed.                |                                                                                                      |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | Metadata for the checkout in the form of key-value pairs                                             | {<br/>"userId": "user_123",<br/>"visitCount": 42,<br/>"lastVisit": "2023-04-01"<br/>}                |