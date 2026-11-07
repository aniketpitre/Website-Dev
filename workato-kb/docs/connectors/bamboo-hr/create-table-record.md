<!-- source: https://docs.workato.com/en/connectors/bamboo-hr/create-table-record | lastmod: 2026-06-17 -->
> The Create table record of employee action adds a new row to a selected BambooHR employee table.

# BambooHR – Create table record of employee action

The **Create table record of employee** action adds a new row to an employee's table in BambooHR. You must specify the employee's internal ID and select the target table. This action supports standard and custom tables.

You can use the [Get table records of employee](/en/connectors/bamboo-hr/get-table-records-of-employee-action) action to retrieve available row IDs from a specific table.

## Input

| Input field | Description |
| --- | --- |
| Employee ID | Enter the internal BambooHR ID of the employee. |
| Table | Choose the target table where you plan to create the record. For example, select **commission** to insert a commission record. |

Additional input fields may appear based on the selected **Table**.

## Output

| Output field | Description |
| --- | --- |
| Success | Indicates the result of the table record creation. |

---
