<!-- source: https://docs.workato.com/en/connectors/workday-rest/get-inbox-tasks-action | lastmod: 2026-06-29 -->
> The Get inbox tasks action in the Workday REST connector lets you return the most recent inbox task records for the connected user.

# Workday REST - Get inbox tasks action

This action returns all the inbox task records for the connected user. Only the first 100 tasks are returned in descending order with the latest inbox task first.

> **INTEGRATION USERS AFFECT OUTPUT**
> 
> If an integration user is used to connect, this action returns inbox tasks assigned to that integration user only.

## Input

This action has no input fields.

## Output

| Output field | Description |
| --- | --- |
| Descriptor | Title of the inbox task. |
| ID | Workday ID of the inbox task. |
| HREF | API resource URL of the inbox task. |
| Subject | Subject object. Contains descriptor and ID. |
| Overall process | Business process object. Contains descriptor and ID. |
| Status | Status object. Contains descriptor and ID. |
| Step type | Step type object. Contains descriptor and ID. |
| Assigned | Date and time of assignment. |
| Due | Due date of this inbox task. |

---
