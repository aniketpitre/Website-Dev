<!-- source: https://docs.workato.com/en/data-tables/connector/delete-record-action | lastmod: 2026-05-25 -->
> The delete record action deletes a record you specify from a data table using its ID.

# Delete record action

The **Delete record** action deletes a record you specify from a data table using its ID.

## Input

| Input fields | Description |
| --- | --- |
| Data table | Select the data table you plan to delete a record from. Click the link in this field's description to view the selected data table in the [Data tables interface](/en/data-tables/data-table-interface). |
| Record ID | Provide the unique identifier of the record you plan to delete. You can input a Record ID datapill or enter a static value from the data table's **Record ID** column, which is hidden by default. |

## Output

| Output fields | Description |
| --- | --- |
| Success | A boolean (`true` or `false`) value indicating whether the record was deleted successfully. |

---
