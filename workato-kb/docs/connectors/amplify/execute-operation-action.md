<!-- source: https://docs.workato.com/en/connectors/amplify/execute-operation-action | lastmod: 2026-06-17 -->
> The **Execute operation** action enables you to perform an operation using Amplify. The list of operations is dynamically generated based on the API endpoints found in the Swagger specification file for Amplify. If an API endpoint doesn’t match any Create, Get, Search, Update, or Delete actions, it is displayed in the **Execute operation** action.

# Amplify - Execute operation action

The **Execute operation** action enables you to perform an operation using Amplify. The list of operations is dynamically generated based on the API endpoints found in the Swagger specification file for Amplify. If an API endpoint doesn’t match any Create, Get, Search, Update, or Delete actions, it is displayed in the **Execute operation** action.

## Input

| Input field | Description |
| --- | --- |
| Operation | Specify the operation to perform. Fields load dynamically based on the operation you select. |

## Output

The output fields are determined by the object selected in the input. Map the relevant datapill from the datatree to subsequent steps.

---
