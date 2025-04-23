# CreateCheckoutRequest

## Example Usage

```typescript
import { CreateCheckoutRequest } from "creem/models/operations";

let value: CreateCheckoutRequest = {
  xApiKey: "<value>",
  createCheckoutRequestEntity: {
    productId: "<id>",
    customer: {
      id: "<id>",
      email: "user@example.com",
    },
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `xApiKey`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createCheckoutRequestEntity`                                                                    | [components.CreateCheckoutRequestEntity](../../models/components/createcheckoutrequestentity.md) | :heavy_check_mark:                                                                               | Create checkout request payload                                                                  |