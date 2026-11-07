<!-- source: https://docs.workato.com/en/connectors/databricks/new-row-trigger | lastmod: 2026-06-29 -->
> The New rows (batch) trigger in the Databricks connector picks up rows inserted in a selected table or view, processed as a batch each poll interval.

# Databricks - New rows (batch) trigger

This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This trigger checks for new rows once every poll interval.

![New rows (batch) trigger](/assets/databricks-new-batch-rows.zH8uAgPv.png)_New rows (batch) trigger_

* * *

## Input

To use this trigger, configure the following input fields.

- Table name
  
- Select a table from which to process rows. Workato only displays the first 1,000 table names. Enter in the name if the table you plan to use is not displayed.
  
- Trigger poll interval
  
- _Optional_. How frequently to check for new events. If left blank, defaults to five (5) minutes. Minimum value: five (5) minutes. [Learn more about polling intervals](/en/recipes/polling-intervals).

---
