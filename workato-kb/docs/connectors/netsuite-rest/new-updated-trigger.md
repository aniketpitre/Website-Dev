<!-- source: https://docs.workato.com/en/connectors/netsuite-rest/new-updated-trigger | lastmod: 2026-06-01 -->
> The New or updated standard record trigger detects when records are created or updated in NetSuite REST.

# NetSuite REST - New or updated standard record trigger

The **New or updated standard record** trigger detects when a standard record is created or updated in NetSuite REST.

Use this trigger to monitor supported NetSuite records for changes. The trigger uses a date field for polling and manages this field automatically.

## Input

| Input field | Description |
| --- | --- |
| Record | Select the NetSuite record to monitor. Only [REST Web Services supported records](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1558962745.html) appear in the list. |
| When first started, this recipe should pick up events from | Enter the date and time to start polling from. Leave empty to retrieve records from the last hour. |
| Search query | Enter a search query to filter records. For example, `email START_WITH barbara`. Don't filter by the date field used for polling. |
| Search settings | Configure how the trigger retrieves and filters records. Refer to [Record Collection Filtering](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545222128.html) for more information. |

Additional fields appear and update dynamically based on the **Record** you select.

## Output

The output fields vary based on the **Record** you select. The trigger returns fields that correspond to the NetSuite record you selected.

For example, if you select **Account**, the output includes the following fields:

| Output field | Description |
| --- | --- |
| Account context search | The context used to search for the account. |
| Display Name | The display name of the account. |
| Name | The name of the account. |
| Number | The account number. |

---
