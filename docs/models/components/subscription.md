# Subscription

The subscription associated with the checkout session.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `components.SubscriptionEntity`

```typescript
const value: components.SubscriptionEntity = {
  id: "<id>",
  mode: "test",
  object: "subscription",
  product: "Elegant Metal Chips",
  customer: "<value>",
  collectionMethod: "charge_automatically",
  status: "active",
  lastTransactionId: "tran_3e6Z6TzvHKdsjEgXnGDEp0",
  lastTransaction: {
    id: "<id>",
    mode: "test",
    object: "transaction",
    amount: 2000,
    amountPaid: 2000,
    discountAmount: 2000,
    currency: "EUR",
    type: "<value>",
    taxCountry: "US",
    taxAmount: 2000,
    status: "<value>",
    refundedAmount: 2000,
    createdAt: 9820.18,
  },
  lastTransactionDate: new Date("2024-09-12T12:34:56Z"),
  nextTransactionDate: new Date("2024-09-12T12:34:56Z"),
  currentPeriodStartDate: new Date("2024-09-12T12:34:56Z"),
  currentPeriodEndDate: new Date("2024-09-12T12:34:56Z"),
  canceledAt: new Date("2024-09-12T12:34:56Z"),
  createdAt: new Date("2024-01-01T00:00:00Z"),
  updatedAt: new Date("2024-09-12T12:34:56Z"),
};
```

