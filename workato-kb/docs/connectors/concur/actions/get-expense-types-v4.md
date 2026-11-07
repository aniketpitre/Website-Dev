<!-- source: https://docs.workato.com/en/connectors/concur/actions/get-expense-types-v4 | lastmod: 2026-06-17 -->
> The Get expense types action retrieves expense types for a specific user from SAP Concur using the v4 API.

# SAP Concur - Get expense types action

The **Get expense types** action retrieves all expense types applicable to the specified user based on their assigned policies from SAP Concur using the v4 API.

This action replaces the deprecated [Get all expense types](/en/connectors/concur/actions/get-all-expense-types-batch) action.

> **PREREQUISITES**
> 
> Your SAP Concur OAuth 2.0 connection must include the following scopes to use this action:
> 
> - `expense.config.policies.restricted.read`
> - `expense.config.expensetypes.restricted.read`

## Input

| Input field | Description |
| --- | --- |
| User ID | The unique identifier of the SAP Concur user. Use the [Get user](/en/connectors/concur/actions/get-user) action to retrieve the user ID. |

## Output

| Output field | Description |
| --- | --- |
| Expense types | List of expense types available to the specified user. |
| Expense type (Expense types) | The code for the expense type. |
| Expense type name (Expense types) | The name of the expense type. |
| Spend category code (Expense types) | The code for the spend category associated with the expense type. |
| Spend category name (Expense types) | The name of the spend category associated with the expense type. |
| Is category (Expense types) | Indicates whether the expense type is a category. |
| Parent expense type (Expense types) | The code of the parent expense type, if applicable. |
| Parent name (Expense types) | The name of the parent expense type, if applicable. |
| List size | The total number of expense types returned. |
| List index | The index of the current item in the list. |

---
