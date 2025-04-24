# CreateProductRequest

## Example Usage

```typescript
import { CreateProductRequest } from "creem/models/operations";

let value: CreateProductRequest = {
  xApiKey: "<value>",
  createProductRequestEntity: {
    name: "<value>",
    imageUrl: "https://picsum.photos/200/300",
    price: 400,
    currency: "EUR",
    billingType: "recurring",
    billingPeriod: "every-month",
    taxMode: "inclusive",
    taxCategory: "saas",
    defaultSuccessUrl: "https://example.com/?status=successful",
    customField: [
      {
        type: "text",
        key: "<key>",
        label: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `xApiKey`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createProductRequestEntity`                                                                   | [components.CreateProductRequestEntity](../../models/components/createproductrequestentity.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |