# ValidateLicenseRequest

## Example Usage

```typescript
import { ValidateLicenseRequest } from "creem/models/operations";

let value: ValidateLicenseRequest = {
  xApiKey: "<value>",
  validateLicenseRequestEntity: {
    key: "<key>",
    instanceId: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `xApiKey`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `validateLicenseRequestEntity`                                                                     | [components.ValidateLicenseRequestEntity](../../models/components/validatelicenserequestentity.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |