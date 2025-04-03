# ProductListEntity

## Example Usage

```typescript
import { ProductListEntity } from "creem/models/components";

let value: ProductListEntity = {
  items: [
    {
      id: "<id>",
      mode: "live",
      name: "<value>",
      description: "This is a sample product description.",
      imageUrl: {},
      features: [
        {
          id: "<id>",
          type: "<value>",
          description: "Get access to discord server.",
        },
      ],
      price: 400,
      currency: "EUR",
      billingType: "recurring",
      billingPeriod: "every-month",
      status: "<value>",
      taxMode: "inclusive",
      taxCategory: "saas",
      productUrl: "https://creem.io/product/prod_123123123123",
      defaultSuccessUrl: "https://example.com/?status=successful",
      createdAt: new Date("2023-01-01T00:00:00Z"),
      updatedAt: new Date("2023-01-01T00:00:00Z"),
    },
  ],
  pagination: {
    totalRecords: 0,
    totalPages: 0,
    currentPage: 1,
    nextPage: {},
    prevPage: null,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.ProductEntity](../../models/components/productentity.md)[]     | :heavy_check_mark:                                                         | List of product items                                                      |
| `pagination`                                                               | [components.PaginationEntity](../../models/components/paginationentity.md) | :heavy_check_mark:                                                         | Pagination details for the list                                            |