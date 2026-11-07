<!-- source: https://docs.workato.com/en/connectors/databricks/select-rows | lastmod: 2026-09-08 -->
> The Select rows action in the Databricks connector lets you return rows from a table that match a WHERE condition, with ordering and quotas.

# Databricks - Select rows action

This action enables you to select rows based on certain criteria defined by a `WHERE` condition. Rows from the selected table that match the `WHERE` condition are returned as the output of this action.

![Select rows action](/assets/databricks-select-rows-action.CWUwhE8R.png)_Select rows action_

* * *

## Input

To use this action, configure the following input fields.

- Table name
  
- Select a table from which to select rows. Workato only displays the first 1,000 table names. Enter in the table name if the table you plan to use is not displayed.
  
- WHERE condition
  
- Provide a `WHERE` condition to filter rows. This condition can be as simple as filtering a single record by its `ID`.
  
  ```sql
  ID = 123
  ```
  
  Alternatively, it can be used to select multiple rows based on values in one or more columns.
  
  ```sql
  STATUS = 'closed' and PRIORITY = 1
  ```
  
  Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/en/connectors/snowflake#where-condition) guide for more information.
  
- Parameters
  
- Used in conjunction with your `WHERE` condition to prevent SQL injection. After declaring named bind variables in your `WHERE` input, assign values to these variables using this input field. [Learn more](/en/connectors/snowflake#using-parameters)
  
- Order By
  
- Rows returned from this action can be ordered based on the **Order by** input field. This field is used to change the default ordering of rows from your Databricks database. You can also define the direction of order for each column you wish to order by. The following **Order by** statement orders rows by `priority` in ascending order followed by `created_date` in descending order (latest first).
  
  ```sql
  PRIORITY ASC, CREATED_DATE DESC
  ```
  
- Quota
  
- This input field determines the maximum number of rows to return. The default quota is 100 and capped at a maximum of 50000 rows for a single **Select rows** action.
  
- Offset
  
- This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input `100` to this field. The default is `0`.
  

* * *

## Output

This action generates the following output.

- rows
  
- JSON Array of objects, each object describes one row of the selected data. Workato displays only the first 10 objects.
  
- rows\_count
  
- The number of rows returned.

---
