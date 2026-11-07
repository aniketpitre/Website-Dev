<!-- source: https://docs.workato.com/en/connectors/bamboo-hr/update-table-record | lastmod: 2026-06-17 -->
> The Update table record of employee action updates a row in a selected BambooHR employee table.

# BambooHR – Update table record of employee action

The **Update table record of employee** action updates a row in an employee's table in BambooHR. You must specify the employee's internal ID, the table name, and the row ID.

You can use the [Get table records of employee](/en/connectors/bamboo-hr/get-table-records-of-employee-action) action to retrieve available row IDs from a specific table.

## Input

| Input field | Description |
| --- | --- |
| Employee ID | Enter the internal BambooHR ID of the employee. |
| Table | Choose the table that contains the record you plan to update. |
| Row ID | Enter the internal BambooHR ID of the row to update. |

Additional input fields may appear based on the selected **Table**.

## Output

| Output field | Description |
| --- | --- |
| Success | Indicates the result of the table record update. |

---
