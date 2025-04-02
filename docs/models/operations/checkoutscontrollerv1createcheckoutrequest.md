# CheckoutsControllerV1CreateCheckoutRequest

## Example Usage

```typescript
import { CheckoutsControllerV1CreateCheckoutRequest } from "creem/models/operations";

let value: CheckoutsControllerV1CreateCheckoutRequest = {
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
| `createCheckoutRequestEntity`                                                                    | [components.CreateCheckoutRequestEntity](../../models/components/createcheckoutrequestentity.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |