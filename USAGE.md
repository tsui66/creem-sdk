<!-- Start SDK Example Usage [usage] -->
```typescript
import { Creem } from "creem";

const creem = new Creem();

async function run() {
  const result = await creem.getProduct({
    productId: "<id>",
    xApiKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->