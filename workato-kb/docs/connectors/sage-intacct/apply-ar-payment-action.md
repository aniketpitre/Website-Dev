<!-- source: https://docs.workato.com/en/connectors/sage-intacct/apply-ar-payment-action | lastmod: 2025-06-20 -->
> The Apply AR payment action applies the AR payment in Sage Intacct.

# Sage Intacct (Custom) - Apply AR payment action

The **Apply AR payment** action applies the AR payment in Sage Intacct.

## Input

| Input field | Description |
| --- | --- |
| AR payment key | Provide the AR payment key. |
| Payment date | Provide payment date in year, month and day fields. |
| Memo | Provide the memo for AR payment. |
| Overpayment location ID | Provide the overpayment location ID. |
| Overpayment department ID | Provide the overpayment department ID. |
| AR payment items | Provide the AR payment item list here in the Amount and Invoice key fields. |

## Output

| Output fields | Description |
| --- | --- |
| Status | Returns the status of apply action. |
| Function | The action performed in the API call. |
| Control ID | A unique string to track the transaction. |
| Record key | A unique internal identifier assigned by Intacct to the newly created AR payment application record. |

---
