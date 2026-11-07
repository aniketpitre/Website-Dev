<!-- source: https://docs.workato.com/en/connectors/gumroad/refund-sale-action | lastmod: 2026-11-02 -->
> Issue a full or partial refund for a sale in Gumroad. Requires a sufficient seller balance.

# Gumroad - Refund sale action

The **Refund sale** action issues a full or partial refund for a sale in Gumroad. The refund requires a sufficient seller balance.

## Input

| Input field | Description |
| --- | --- |
| Sale ID | Select the sale to refund. Alternatively, enter the sale ID. |
| Amount (cents) | Optional. Enter the amount to refund, in cents, for a partial refund. Leave blank to issue a full refund. |

## Output

The following are a representative set of output fields. Refer to the Gumroad [API](https://app.gumroad.com/api) documentation for more information on available output fields.

| Output field | Description |
| --- | --- |
| Success | A boolean value (`true` or `false`) that indicates whether the action refunded the sale. |
| Message | A message from Gumroad about the result, such as why the action didn't refund the sale. |
| Sale | The refunded sale. This field is blank when the action doesn't refund the sale. |
| ID (Sale) | The unique ID of the sale. |
| Email (Sale) | The buyer's email address. |
| Product name (Sale) | The name of the product. |
| Price (Sale) | The price of the sale. |
| Refunded (Sale) | A boolean value (`true` or `false`) that indicates whether the sale was refunded. |
| Partially refunded (Sale) | A boolean value (`true` or `false`) that indicates whether the sale was partially refunded. |
| Amount refundable in currency (Sale) | The amount that can still be refunded. |

---
