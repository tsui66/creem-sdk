# LicensesControllerV1ActivateRequest

## Example Usage

```typescript
import { LicensesControllerV1ActivateRequest } from "creem/models/operations";

let value: LicensesControllerV1ActivateRequest = {
  xApiKey: "<value>",
  activateLicenseRequestEntity: {
    key: "<key>",
    instanceName: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `xApiKey`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `activateLicenseRequestEntity`                                                                     | [components.ActivateLicenseRequestEntity](../../models/components/activatelicenserequestentity.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |