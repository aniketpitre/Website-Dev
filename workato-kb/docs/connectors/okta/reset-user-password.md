<!-- source: https://docs.workato.com/en/connectors/okta/reset-user-password | lastmod: 2026-06-29 -->
> The Okta connector action resets an active user's forgotten password and can optionally email a one-time token link to the user.

# Okta - Reset an existing user's forgotten password action

This action resets an existing user’s forgotten password and optionally sends them the one-time token (OTT) link via email. Please note that the user must be in ACTIVE state and will be required to validate their security question's answer when visiting the reset link. User’s state will still remain ACTIVE in this case. Requires Organization Administrator or Super Administrator roles to use this action.

## Input

| Field | Description |
| --- | --- |
| User ID | The unique ID of the target user. |
| Send forgotten password email to user | Choose whether to send the forgotten password email automatically to user. User needs to validate by answering the security question before setting the new password. If set to false, returns a link for the user to reset their password in the response. Allowed values are: true or false. Default is true. |

## Output

| Field | Description |
| --- | --- |
| Sent forgotten password email | Shows whether the email was sent successfully or not if "Send forgotten password email to user" is set to true. |
| Forgotten password reset URL | Returns reset URL if "Send forgotten password email to user" is set to false. |

---
