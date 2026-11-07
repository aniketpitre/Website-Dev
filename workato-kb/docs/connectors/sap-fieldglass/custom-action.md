<!-- source: https://docs.workato.com/en/connectors/sap-fieldglass/custom-action | lastmod: 2026-06-17 -->
> The Custom action allows you to build and execute an HTTP request with your SAP Fieldglass connection.

# SAP Fieldglass - Custom action

The **Custom action** allows you to build and execute an HTTP request with your SAP Fieldglass connection.

![Custom action](/assets/sap-fieldglass-custom-action.CPAA77fn.png)_Custom action_

## Input

| Input Field | Description |
| --- | --- |
| Request type | Select the HTTP method of the request, such as POST, GET, PUT, or DELETE. |
| Path | Define the API endpoint path to append to the base URI. Use an absolute URI to override the base URI if necessary. |
| URL parameters | Add any required URL parameters to refine the API call. |
| Request body parameters | For actions like POST or PATCH that modify data, define the JSON structure of the data payload. |

## Output

The output fields are determined by the object selected in the input. Map the relevant datapill from the data tree to subsequent steps.

---
