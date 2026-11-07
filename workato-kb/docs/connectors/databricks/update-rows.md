<!-- source: https://docs.workato.com/en/connectors/databricks/update-rows | lastmod: 2026-06-17 -->
> The Update rows in table action modifies one or more rows in a selected Databricks table.

# Databricks – Update rows in table action

The **Update rows in table** action modifies one or more rows in a selected Databricks table. Select the target table, define a `WHERE` condition to filter rows, and enter new values for the columns you plan to update.

## Input

| Input field | Description |
| --- | --- |
| Table | Select the Databricks table where you plan to update rows. Only the first 1,000 tables are displayed. Enter the table name if it doesn't appear in the drop-down menu. |
| WHERE condition | Enter a SQL `WHERE` clause to filter the rows you plan to update. For example: `currency = 'USD'`. Enclose string values in single quotes. |
| Columns | Enter values for the columns you plan to update. Workato displays column fields based on the selected table’s schema. |

Additional input fields may appear based on the **Table** you select.

## Output

| Output field | Description |
| --- | --- |
| Number of rows updated | The number of rows that matched the `WHERE` condition and were successfully updated. |

---
