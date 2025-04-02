# ProductsControllerV1CreateRequest

## Example Usage

```typescript
import { ProductsControllerV1CreateRequest } from "creem/models/operations";

let value: ProductsControllerV1CreateRequest = {
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
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `xApiKey`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createProductRequestEntity`                                                                   | [components.CreateProductRequestEntity](../../models/components/createproductrequestentity.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |