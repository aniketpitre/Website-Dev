<!-- source: https://docs.workato.com/en/connectors/snowflake/export-query-result | lastmod: 2026-09-08 -->
> The Export query result action in the Snowflake connector runs a SQL query and exports the results as a CSV file you can stream.

# Snowflake - Export query result action

The **Export query result** bulk long action executes a SQL query and exports the results as a CSV file. You can stream the exported CSV content through the File content datapill. The maximum timeout for this action is **120 minutes**.

![Export query result action](/assets/export-query-result.C48DDtNT.png)_Export query result action_

## Input

| Input field | Description |
| --- | --- |
| SQL | Enter a valid SQL query. For example, `SELECT * FROM PUBLIC.ACCOUNTS`. |
| Column delimiter | Choose a delimiter character. CSV files typically use **comma**. |
| Timeout limit | Specify an upper limit for the action. If any asynchronous jobs exceed this limit, the recipe proceeds to the next step. The maximum timeout is 120 minutes. |

## Output

The output of this action contains metadata about the export action.

| Output field | Description |
| --- | --- |
| Number of rows exported | The number of rows exported. |
| Column names | Column headers in the CSV file. |
| File content | CSV stream of the contents of the file. |

> **REFRESH SCHEMA TO DISPLAY FILE CONTENTS DATAPILL**
> 
> If the File content datapill doesn't appear in the output datatree of this action, click **Refresh** to regenerate the output fields.
> 
> ![Click Refresh to regenerate the output fields](/assets/refresh-schema.D2esM1Kg.gif)_Click **Refresh** to regenerate the output fields_

---
