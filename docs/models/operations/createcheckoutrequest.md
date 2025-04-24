# CreateCheckoutRequest

## Example Usage

```typescript
import { CreateCheckoutRequest } from "creem/models/operations";

let value: CreateCheckoutRequest = {
  xApiKey: "<value>",
  createCheckoutRequest: {
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
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `xApiKey`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createCheckoutRequest`                                                              | [components.CreateCheckoutRequest](../../models/components/createcheckoutrequest.md) | :heavy_check_mark:                                                                   | Create checkout request payload                                                      |