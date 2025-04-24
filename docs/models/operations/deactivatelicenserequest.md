# DeactivateLicenseRequest

## Example Usage

```typescript
import { DeactivateLicenseRequest } from "creem/models/operations";

let value: DeactivateLicenseRequest = {
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