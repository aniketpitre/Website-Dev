<!-- source: https://docs.workato.com/en/connectors/salesforce/actions/get-report | lastmod: 2026-09-01 -->
> This action retrieves report details from Salesforce.

# Salesforce - Get report by ID action

This action retrieves columns and rows from a Salesforce report.

## Input

| Input fields | Description |
| --- | --- |
| Report | Select a report to retrieve. Alternatively, use the drop-down menu to toggle this field to **Enter the report ID** and enter a report ID from the output of another action, such as [Search records](/en/connectors/salesforce/actions/search-records). |
| On-behalf-of user email | Optional. Enter the email of a Salesforce user to impersonate. Contact your Workato Customer Success Manager to enable this field. This field only supports JWT connections. |

## Output

| Output fields | Description |
| --- | --- |
| Attributes | An object containing the report's attributes. For example: the `Report name`, `Report ID`, and `Type`. |
| Columns | An object containing information about the report's columns. For example: `Label`, `Name`, and `Type`. |
| Rows | An object containing information about the report's rows. For example: a `Columns` object, `List index`, and `List size`. |

---
