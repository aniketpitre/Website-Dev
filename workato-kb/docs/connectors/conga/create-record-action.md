<!-- source: https://docs.workato.com/en/connectors/conga/create-record-action | lastmod: 2026-03-30 -->
> The Create record action creates a new record in Conga, such as a new contact.

# Conga - Create record action

The **Create record** action creates a new record in Conga, such as a new contact.

## Input

Input fields generate dynamically based on the object you select. The following are common input fields for all object types.

| Input field | Description |
| --- | --- |
| Object | Select the type of object to create. |
| Include record payload in response | Select **Yes** or **No** to specify whether to include full record details in the response. |
| Name | Enter the name of the new record to create. |

## Output

Output fields generate dynamically based on the object you select. The following are common output fields for all object types.

| Output field | Description |
| --- | --- |
| Success | A boolean response that indicates if the action was successful. |
| Status code | A code indicating the status of the action, such as `OK`, `BadRequest`, `Unauthorized`, and more. |
| Record ID | The unique ID of the created record. |
| Data | ID: The unique ID of the created record., Name: The name of the new record., Created by: The name of the user that created the new record., Created date: The date that the new record was created., Modified by: The name of the user that modified the record., Modified date: The date that the new record was modified., E tag: The E tag with a unique identifier included in the Conga response header., External ID: The external ID of the created record. |

---
