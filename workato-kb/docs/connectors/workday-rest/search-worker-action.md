<!-- source: https://docs.workato.com/en/connectors/workday-rest/search-worker-action | lastmod: 2026-06-29 -->
> The Search workers action in the Workday REST connector lets you search for workers by name and return their full worker records.

# Workday REST - Search workers action

Use this action to search for workers by name.

![Search workers by name action](/assets/search-worker.Ch2LnkTV.png)_Search workers action_

## Input

| Input field | Description |
| --- | --- |
| Name filter | This must be at least 3 characters long and is not case sensitive. Workers with names that start with the provided value will be returned. |

## Output

Output is a list of workers. Each worker object has an output defined in the following table.

| Output field | Description |
| --- | --- |
| Descriptor | Worker full name |
| ID | Workday ID or the worker record. |
| HREF | API resource URL of the worker record. |
| Primary supervisory organization | Primary supervisory organization object of this worker record. Contains descriptor (full name), Workday ID and HREF. |
| Business title | Full business title of the worker record. |
| Primary work email | Primary work email of the worker record. |
| Is manager | Boolean data. `True` if the worker record is a manager. |
| Primary work phone | Primary phone number of the worker record. |
| Location | Location object of this worker record. Contains descriptor (full name) and Workday ID. |
| Primary work address text | Full primary address of the worker record. |
| Supervisory organizations managed | Supervisory organizations managed by the worker record. |
| Years of service | Years of service, as an integer, by the worker. |
| Date of birth | Date of birth of the worker record. Format: YYYY-MM-DD |

---
