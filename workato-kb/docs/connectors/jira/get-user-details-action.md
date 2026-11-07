<!-- source: https://docs.workato.com/en/connectors/jira/get-user-details-action | lastmod: 2026-03-19 -->
> This action retrieves a user from Jira. This action fails if the user doesn't exist.

# Jira - Get user details action

The **Get user details** action retrieves a user from Jira. This action fails if the user doesn't exist.

## Input

| Input field | Description |
| --- | --- |
| Username | Enter the username to search for in Jira. For example, enter `johndoe` if the user's email address is `johndoe@workato.com`. |
| Email | Enter the email to search for in Jira. For example: `johndoe@workato.com` |

## Output

| Output field | Description |
| --- | --- |
| Self | The API URL of the user. |
| Key | The human-readable Jira identifier for the user. |
| Name | The login username of the user. |
| Account ID | The Atlassian account identifier for the user. |
| Email address | The email address of the user. |
| Avatar URLs | URLs of the user's avatar images. |
| Display name | The display name of the user. |
| Active | Indicates whether the user's account is active. |
| Time zone | The timezone of the user. |
| Locale | The language and formatting preferences of the user. |
| Expand | Fields expanded in the response, such as groups and application roles the user is a member of. |

---
