<!-- source: https://docs.workato.com/en/data-tables/connector/update-record-action | lastmod: 2026-06-17 -->
> The update record action updates a record you specify in a data table.

# Update record action

The **Update record** action updates a record you specify in a data table. Use the [remove values from a record](/en/data-tables/connector/remove-values-from-record-action) action instead if you plan to remove a value from a column.

## Input

| Input fields | Description |
| --- | --- |
| Data table | Select the data table in which you plan to update a record. Click the link in this field's description to view the selected data table in the [Data tables interface](/en/data-tables/data-table-interface). |
| Record ID | Provide the ID of the record that you plan to update. You can input a Record ID datapill or enter a static value from the data table's **Record ID** column, which is hidden by default. |
| Choose the desired output format | Optional. Specify how to map the updated record data to the table fields. Refer to the [Output formats](/en/data-tables/data-table-connector#output-formats) section for more information. |

> **ADDITIONAL INPUT FIELDS**
> 
> The **Update record fields with new inputs** section contains an input field for each column of the selected data table. Use these input fields to specify the values to update the record with. If you leave a field empty, Workato does not update the corresponding column.
> 
> These input fields are subject the same restrictions as their corresponding columns, for example:
> 
> - If a column is required, its corresponding field is also required.
> - The value you provide must match the corresponding column's data type. For instance, text columns only accept alphanumeric characters. Refer to [Column types](/en/data-tables/user-interface/column-types) for detailed information on the accepted values for each data type.

## Output

| Output fields | Description |
| --- | --- |
| Record | Contains information about the modified record, such as its `Record ID`, `Created at` date, `Updated at` timestamp, and data from any of the data table's custom columns. |

---
