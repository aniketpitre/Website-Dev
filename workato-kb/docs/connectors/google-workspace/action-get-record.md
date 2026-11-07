<!-- source: https://docs.workato.com/en/connectors/google-workspace/action-get-record | lastmod: 2026-06-17 -->
> The Get record action allows you to get details of an object in the Google Workspace.

# Google Workspace - Get record action

The **Get record** action retrieves details about an object in Google Workspace. You must select the **Object** type you plan to add before you can configure the action. The recipe editor generates additional fields based on your selection.

The **Get record** action supports the following **Object** types:

- [User](#get-user)
- [User alias](#get-user-alias)
- [Group](#get-group)
- [Organizational unit](#get-organizational-unit)
- [Member from group](#get-member-from-group)
- [Role assignment](#get-role-assignment)
- [App specific passwords](#get-app-specific-passwords)
- [Verification code](#get-verification-code)
- [Access token](#get-access-token)
- [License](#get-license-assigned-to-a-user)

## Get user

The `Get user` **Object** selection retrieves user details in Google Workspace.

### Input

| Input field | Description |
| --- | --- |
| Email address | Enter the user primary or alias email address. |
| Projection type | Select the projection type as `Full` or `Basic`. The default is `Basic`. |
| View type | Select the view type as `admin_view` or `domain_public`. The default is `admin_view`. |
| Custom Field schemas | Select the custom field schemas. The default is `all fields`. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

## Get user alias

The `Get user alias` **Object** selection gets user alias email address details in Google Workspace.

### Input

| Input field | Description |
| --- | --- |
| Email address | The user primary email address, alias email address, or unique user ID. |
| Alias | The user alias email address. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

## Get group

The `Get group` **Object** selection gets group details in Google Workspace.

### Input

| Input field | Description |
| --- | --- |
| Email address | The group email address or alias email address. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

## Get organizational unit

The `Get organizational unit` **Object** selection gets organizational unit details in Google Workspace.

### Input

| Input field | Description |
| --- | --- |
| Organizational unit | Select the organizational unit in Google Workspace. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

## Get member from group

The `Get member from group` **Object** selection gets member details from a group in Google Workspace.

### Input

| Input field | Description |
| --- | --- |
| Group email address | Enter the group email address, group alias, or unique group ID. |
| Group member email address | Enter user or group email address that is part of the selected group. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

## Get role assignment

The `Get role assignment` **Object** selection retrieves user role assignment details in Google Workspace.

### Input

| Input field | Description |
| --- | --- |
| Role | Select the role assignment to retrieve details. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

## Get App specific passwords

The `Get App specific passwords` **Object** selection retrieves details of the user app-specific password in Google Workspace.

### Input

| Input field | Description |
| --- | --- |
| Email address | Enter the user email address, including primary, alias, or a unique user ID. |
| Code ID | Enter the app-specific password unique ID to be retrieved. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

## Get verification code

The `Get verification code` **Object** selection retrieves verification code details associated with a user email address in Google Workspace.

### Input

| Input field | Description |
| --- | --- |
| Email address | Enter user email address, such as the primary or alias. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

## Get access token

The `Get access token` **Object** selection retrieves access token details issued to a client under a user.

### Input

| Input field | Description |
| --- | --- |
| Email address | Enter the user email address, such as primary, alias, or a unique user ID. |
| Client ID | Enter the client ID of the application to which the token is issued to. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

## Get license assigned to a user

The `Get license assigned to a user` **Object** selection retrieves product license details assigned to a user in Google Workspace.

### Input

| Input field | Description |
| --- | --- |
| Product ID | Enter the product name associated with the user license. |
| SKU to update | Enter the product SKU unique identifier number. |
| Email ID | Provide the user email ID associated with the license. Use the updated email ID if email ID updates have been applied. |

### Output

The **Get record** action generates output fields relevant to the newly added user objects, including any custom fields defined in the **Custom fields schema**.

---
