<!-- source: https://docs.workato.com/en/connectors/azure-ad/new-updated-user-trigger | lastmod: 2026-06-29 -->
> The New/updated user trigger in the Microsoft Entra ID connector fires when a user is created or updated in your directory.

# Microsoft Entra ID - New/updated user trigger

The **New/updated user** trigger detects when a Microsoft Entra ID user is created or updated.

## Input

| Input field | Description |
| --- | --- |
| Trigger poll interval | Select how frequently to check for new events. |
| When first started, this recipe should pick up events from | Choose a start date and time to retrieve trigger events. Leave blank to start with events from one hour ago. |
| Output fields | Choose fields to include in the response. Leave blank to return default fields. |
| Additional fields | Add fields with JSON or enter them manually. |
| Set trigger condition | Define conditions to filter trigger events before processing. |

## Output

The response includes fields based on the selections in the input.

Refer to the [User schema](https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#properties) for field definitions.

---
