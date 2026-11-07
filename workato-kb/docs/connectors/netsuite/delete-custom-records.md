<!-- source: https://docs.workato.com/en/connectors/netsuite/delete-custom-records | lastmod: 2026-05-22 -->
> The Delete custom records batch action allows you to delete custom records in batches using their NetSuite internal IDs.

# NetSuite SOAP - Delete custom records action (batch)

The **Delete custom records** batch action allows you to delete custom records in batches using their NetSuite internal IDs.

## Input

| Input field | Description |
| --- | --- |
| Custom record | Select the NetSuite record type to delete. |
| Records | Expand this section to specify the custom records to delete from NetSuite. |
| Records source list (records) | Input a list datapill that contains the records to delete. [Learn more about list input](/en/features/list-management#list-batch-action). |
| Record ID (records) | Provide the NetSuite internal ID of the record to delete. |

## Output

| Output field | Description |
| --- | --- |
| Successful deletions | A list of internal IDs of successfully deleted records. |
| Internal ID (successful deletions) | The internal ID of the deleted record. |
| Failed deletions | A list of internal IDs of records that couldn't be deleted. |
| Internal ID (failed deletions) | The internal ID of the record that couldn't be deleted. |
| Error message (failed deletions) | An error message that explains why the record deletion failed. |

---
