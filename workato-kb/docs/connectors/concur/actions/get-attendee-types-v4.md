<!-- source: https://docs.workato.com/en/connectors/concur/actions/get-attendee-types-v4 | lastmod: 2026-06-17 -->
> The Get attendee types batch action retrieves attendee types for a specific user from SAP Concur using the v4 API.

# SAP Concur - Get attendee types action (batch)

The **Get attendee types** batch action retrieves all attendee types applicable to the specified user's expense group from SAP Concur using the v4 API.

This action replaces the deprecated [Get all attendee types](/en/connectors/concur/actions/get-all-attendee-types-batch) action.

> **PREREQUISITES**
> 
> Your SAP Concur OAuth 2.0 connection must include the following scope to use this action:
> 
> - `expense.config.attendeetypes.restricted.read`

## Input

| Input field | Description |
| --- | --- |
| User ID | The unique identifier of the SAP Concur user. Use the [Get user](/en/connectors/concur/actions/get-user) action to retrieve the user ID. |

## Output

| Output field | Description |
| --- | --- |
| Attendee types | List of attendee type objects. |
| Attendee type code (Attendee types) | The code for the attendee type. |
| Attendee type name (Attendee types) | The name of the attendee type. |
| List size | The total number of attendee types returned. |
| List index | The index of the current item in the list. |

---
