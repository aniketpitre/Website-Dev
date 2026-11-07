<!-- source: https://docs.workato.com/en/connectors/odoo-json2/run-wizard-action | lastmod: 2026-08-11 -->
> Complete a guided process in Odoo, such as registering a payment or creating a credit note.

# Odoo (JSON-2) - Run wizard action

The **Run wizard** action completes a guided process (an Odoo wizard) in Odoo (JSON-2), such as registering a payment or creating a credit note.

## Input

| Input field | Description |
| --- | --- |
| Wizard | Select the wizard you plan to run. Select **Use custom value** to enter any transient wizard model name, for example `sale.advance.payment.inv`. |

## Output

For most wizards, the action returns the following action-window fields:

| Output field | Description |
| --- | --- |
| Wizard ID | The ID of the wizard that was run. |
| Result ID | The ID of the result the wizard generates. |

---
