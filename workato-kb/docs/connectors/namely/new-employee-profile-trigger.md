<!-- source: https://docs.workato.com/en/connectors/namely/new-employee-profile-trigger | lastmod: 2026-06-29 -->
> The New employee profile trigger in the Namely connector polls for and runs when a new active or inactive employee profile is detected.

# Namely - New employee profile trigger

The **New employee profile** trigger runs when a new employee profile is detected.

![New employee profile trigger](/assets/new-employee-profile-trigger.Ru4hnmOb.png)_New employee profile trigger_

## Input

No additional input is required for this poll interval trigger. The trigger detects all existing active and inactive employees when you start the recipe. You can change the interval poll value by expanding the optional fields, selecting the **Trigger poll interval** checkbox, and choosing an interval value from the drop-down menu.

## Output

| Output field | Description |
| --- | --- |
| ID | The ID of the new employee profile. For example: `74267991-5762-4d37-9561-8bdc33c22de0`. |
| Company UUID | The company's universally unique identifier for the employee. For example: `6d82888e-9c39-4fa8-ba84-c2145485a730`. |
| Email | The email address of the employee. |
| First name | The first name of the employee. |
| Last name | The last name of the employee. |
| User status | The status of the employee. For example: `active`, `inactive`, or `pending`. |
| Updated at | The time at which the employee profile was last updated. For example: `2024-05-05T09:03:51.000000-08:00`. |
| Created at | The time at which the employee profile was created. For example: `2024-02-03T13:17:48.000000-08:00`. |
| Preferred name | The preferred name of the employee. This field is blank if no value is provided. |
| Preferred last name | The preferred last name of the employee. This field is `null` if no value is provided. |
| Image | The image details associated with the employee profile, including image ID, filename, and mime type. |
| Full name | The full name of the employee. |
| Job title | The job title of the employee. |
| Job title ID | The employee's job title ID. For example: `w38b44d8-sdd1-46md-9bbw-c309e792671a`. |
| Parent ID | The parent ID of the job title. For example: `s0f755b8-7s7s-47d0-8c15-dr346jl19f1c`. |
| Links | Links belonging to the job title. This field is blank if no value is provided. |
| Active | Indicates if the job title is active or not. Values are `true` or `false`. |
| Salary bands | The salary bands for the job title. This field is blank if no value is provided. |
| Reports to | The first and last name of the person the employee reports to. |
| Reports to ID | The ID of the person the employee reports to. |
| Reports to email | The email of the person the employee reports to. |
| Employee type | The type of employee associated with the account. For example, `full time` or `part time`. |
| Access role | The access role of the employee. |
| Ethnicity | The ethnicity of the employee. This field is `null` if no value is provided. |
| Team positions | The employee's team positions. This field is `null` if no value is provided. |
| Is namely admin | Indicates whether the employee is an admin within Namely or not. Values are `true` or `false`. |
| Date format | The date format of the employee's profile. For example: `mm/dd/yy`. |
| Start date | The start date of the employee. For example: `2024-02-05`. |
| LinkedIn URL | The LinkedIn URL of the employee. This field is blank if no value is provided. |
| Office direct dial | The direct office dial of the employee. This field is `null` if no value is provided. |
| Office phone | The office phone number of the employee. This field is `null` if no value is provided. |
| Veteran protected classes | Indicates whether the employer is a protected veteran. |
| Middle name | The middle name of the employee. |
| Bio | Biographical information about the employee. This field is blank if no value is provided. |
| Office main number | The main office number of the office where the employee works. |
| Address | The address of where the employee works. |
| City | The city where the employee works. |
| State ID | The ID of the state where the employee works. |
| Country ID | The ID of the country where the employee works. |
| Zip | The employee's zip code. |
| Phone | The employee's phone number. |

---
