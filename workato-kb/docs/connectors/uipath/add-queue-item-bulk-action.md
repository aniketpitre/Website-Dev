<!-- source: https://docs.workato.com/en/connectors/uipath/add-queue-item-bulk-action | lastmod: 2025-06-25 -->
> The Add queue item bulk action adds multiple queue items to the selected queue in UiPath orchestrator.

# UiPath - Add queue item action (bulk)

The **Add queue item** bulk action adds multiple queue items to the selected queue in UiPath orchestrator.

## Input

| Input field | Description |
| --- | --- |
| Queue name | Select a queue from the drop-down menu. |
| Commit type | Select the commit type from the drop-down menu. |
| Priority | Select the priority of queue item from the drop-down menu. |
| Queue item from content | Set the data to pass to the queue item. |
| Reference | Enter optional text reference for the queue item. |
| Postponed until | Set the earliest date and time at which the item is available for processing. |
| Deadline | Set the latest date and time at which the item should be processed. If empty, the item can be processed at any given time. |
| Progress | Enter a text value representing the current progress or status of the queue item. |
| Source | Specify the origin of the queue item. |
| Parent operation ID | Set the date and time that is considered a risk zone for the item to be processed. |

## Output

| Output field | Description |
| --- | --- |
| Success | Unique identifier for the campaign. |
| Message | Name of the campaign. |

---
