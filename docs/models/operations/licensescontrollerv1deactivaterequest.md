# LicensesControllerV1DeactivateRequest

## Example Usage

```typescript
import { LicensesControllerV1DeactivateRequest } from "creem/models/operations";

let value: LicensesControllerV1DeactivateRequest = {
  xApiKey: "<value>",
  deactivateLicenseRequestEntity: {
    key: "<key>",
    instanceId: "<id>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `xApiKey`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `deactivateLicenseRequestEntity`                                                                       | [components.DeactivateLicenseRequestEntity](../../models/components/deactivatelicenserequestentity.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |