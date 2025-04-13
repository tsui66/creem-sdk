# SubscriptionsControllerV1UpgradeRequest

## Example Usage

```typescript
import { SubscriptionsControllerV1UpgradeRequest } from "creem/models/operations";

let value: SubscriptionsControllerV1UpgradeRequest = {
  id: "<id>",
  xApiKey: "<value>",
  upgradeSubscriptionRequestEntity: {
    productId: "prod_123",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `xApiKey`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `upgradeSubscriptionRequestEntity`                                                                         | [components.UpgradeSubscriptionRequestEntity](../../models/components/upgradesubscriptionrequestentity.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |