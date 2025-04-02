# FeatureEntity

## Example Usage

```typescript
import { FeatureEntity } from "creem/models/components";

let value: FeatureEntity = {
  id: "<id>",
  type: "<value>",
  description: "Get access to discord server.",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *string*                           | :heavy_check_mark:                 | Unique identifier for the feature. |                                    |
| `type`                             | *string*                           | :heavy_check_mark:                 | The feature type.                  |                                    |
| `description`                      | *string*                           | :heavy_check_mark:                 | A brief description of the feature | Get access to discord server.      |