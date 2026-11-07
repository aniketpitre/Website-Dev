<!-- source: https://docs.workato.com/en/connectors/namely/create-status-post-action | lastmod: 2026-06-29 -->
> The Create status post action in the Namely connector lets you publish a new status post with a message and optional file attachment.

# Namely - Create status post action

The **Create status post** action creates a new status post in Namely.

![Create status post action](/assets/create-status-post-action.BlDTK0XA.png)_Create status post action_

## Input

| Input field | Description |
| --- | --- |
| Post message | Enter the message you plan to post. |
| File URL | Enter the URL of the file you plan to include in the post, or enter the file ID. |

## Output

| Output field | Description |
| --- | --- |
| ID | The unique identifier for the message. |
| Content | The text content of the message. |
| HTML content | The HTML version of the message content. |
| Created at | The timestamp when the message was created. |
| Can destroy | Indicates whether the message can be deleted or not. Values are `true` or `false`. |
| Can edit | Indicates whether the message can be edited or not. Values are `true` or `false`. |
| UTC offset | The UTC offset for the message's timestamp. |
| Likes count | The number of likes the message has received. |
| Liked by current profile | Indicates whether the current profile has liked the message or not. Values are `true` or `false`. |
| Updated at | The timestamp when the message was last updated (in Unix epoch format). |
| Profile ID | The unique identifier for the profile associated with the message. |
| Profile company UUID | The universally unique ID (UUID) of the company associated with the profile. For example: `6d82888e-9c39-4fa8-ba84-c2145485a730`. |
| Profile email | The email address associated with the profile. |
| Profile first name | The first name of the person associated with the profile. |
| Profile last name | The last name of the person associated with the profile. |
| Profile user status | The status of the profile. For example: `active`. |
| Profile updated at | The timestamp when the profile's information was last updated. |
| Profile created at | The timestamp when the profile was created. |
| Profile preferred name | The preferred name of the person associated with the profile, if any. |
| Profile preferred last name | The preferred last name of the person associated with the profile, if any. |
| Profile image | Details about the profile's image, if any. |
| Profile full name | The full name of the person associated with the profile. |
| Profile job title ID | The ID of the profile's job title. |
| Profile job title | The job title associated with the profile. |
| Profile employee type | The type of employment. For example: `Full Time` or `Part Time`. |
| Profile access role | The access role associated with the profile within the system, if any. |
| Profile ethnicity | The ethnicity of the employee associated with the profile. |
| Profile team positions | The team positions associated with the profile. |
| Profile is Namely admin | Indicates whether the profile is an admin within Namely or not. Values are `true` or `false`. |
| Profile date format | The date format preferred by the employee associated with the profile. |

---
