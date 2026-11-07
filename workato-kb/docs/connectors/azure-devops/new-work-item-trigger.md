<!-- source: https://docs.workato.com/en/connectors/azure-devops/new-work-item-trigger | lastmod: 2026-07-01 -->
> The New work item (batch) trigger monitors Azure DevOps new work items.

# Azure DevOps - New work item (batch) trigger

The **New work item (batch)** trigger monitors Azure DevOps new work items.

## Input

| Input field | Description |
| --- | --- |
| Batch size | Enter the number of entries to process in each batch. Defaults to `100` if not specified. Maximum batch size is `200`. |
| When first started, this recipe should pick up events from | Specify the date and time from which the recipe picks up trigger events. Defaults to tasks created or updated 1 hour ago. You can't change this value after running or testing the recipe. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |
| Project | Select the project to monitor for new work items. |

## Output

| Output field | Description |
| --- | --- |
| Work items | Information about the new work items, including `Work item ID`, `Work item URL`, and `Revision number`. |

---
