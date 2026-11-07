<!-- source: https://docs.workato.com/en/connectors/bamboo-hr/updated-employee-trigger | lastmod: 2026-06-29 -->
> The New/Updated employee trigger in the BambooHR connector picks up created or updated employees once every poll interval as separate jobs.

# BambooHR - New/Updated employee trigger

This trigger picks up employees that are created or updated. Each employee is processed as a separate job. It checks for new rows once every poll interval.

## Input

![New/Updated employee trigger](/assets/updated-employee-trigger.grYo7JSO.png)_New/Updated employee trigger_

| Input field | Description |
| --- | --- |
| When first started, this recipe should pick up events from | Employees created or updated after this time will be processed by the recipe. If left blank, the default date will be set to **one hour** before the recipe is first started. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |
| Output field configuration | Select custom fields that will be generated as outputs to this action. If left blank, all custom fields will be returned. This is not recommended as it may cause job runtime to increase. |

## Output

The output of this action are all default employee fields and any custom fields selected. The commonly used employee fields are shown below.

| Output field. | Description |
| --- | --- |
| First name | The first name of the employee. |
| Last name | The last name of the employee. |
| Employee ID | The employee ID assigned by BambooHR. |
| Employee number | The employee number assigned by your company. |
| Job title | The current job title of this employee. |
| Department | The current department of this employee. |
| Supervisor ID | The employee ID of the current supervisor of this employee. |
| Supervisor E ID | The employee number of the current supervisor of this employee. |

Refer to the BambooHR [Field Names](https://documentation.bamboohr.com/docs/list-of-field-names) documentation for a full list of employee fields.

---
