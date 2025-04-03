# CreateDiscountRequest

## Example Usage

```typescript
import { CreateDiscountRequest } from "creem/models/operations";

let value: CreateDiscountRequest = {
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `xApiKey`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createDiscountRequestEntity`                                                                    | [components.CreateDiscountRequestEntity](../../models/components/creatediscountrequestentity.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |