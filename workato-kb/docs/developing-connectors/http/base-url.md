<!-- source: https://docs.workato.com/en/developing-connectors/http/base-url | lastmod: 2026-06-30 -->
> Configure a base URL for an HTTP connection in Workato to restrict outbound requests, control data flow, and simplify API version updates.

# Configure a base URL tor the HTTP connector

You can configure a base URL for your [HTTP connection](/en/developing-connectors/http-v2) to restrict outbound requests to a specified URL. This ensures that anyone using the connection in recipes can only connect to the server or application you specify.

## Ensure security over the HTTP connector

Data governance enables you to control data flow from one app to another. You can set the base URL to ensure that your sensitive data only passes through a specific endpoint, domain, or host.

### Use the correct API version

Ensure that all requests are made to the correct API version of the target application. All requests, including the API version, are routed to the same endpoint after you configure the base URL.

Configuring the base URL simplifies recipe updates as API versions change. You can update request URLs for all recipes without needing to manually update individual actions by configuring a base URL.

For example, you can configure the base URL to a specific version of Salesforce REST API. This requires a single update of the base URL of the HTTP connection when it's time to update the API version:

```shell
https://instance.salesforce.com/services/data/v65.0
```

## How it works

The **Base URL** and the action's **Request URL** are used to construct the final request URL when an [HTTP action](/en/developing-connectors/http/building-http-action) is executed. You can simplify this concept in the following way: `Base URL + Action Request URL = Final request URL`.

For example:

- **Base URL**: `https://instance.salesforce.com`
- **Action Request URL**: `/services/data`
- **Final request URL**: `https://instance.salesforce.com/services/data`

Workato restricts all outgoing [HTTP requests](/en/developing-connectors/http/building-http-action) to the base URL provided. The URL validation rules are as follows:

| HTTP request | Description |
| --- | --- |
| **Absolute path** | **Base URL**: `https://instance.salesforce.com` **Request URL**: `https://instance.salesforce.com/services/data/` Workato validates that the base URL of the given endpoint matches the base URL of the connection. |
| **Relative path with `/` prefix** | **Base URL**: `https://instance.salesforce.com/services` **Request URL**: `/services/data/` Workato validates that path starting from the top-level domain (`.com`). In this example, `/services` in the base URL matches `/services` in the request URL. **Note**: Relative paths can only be used if a **Base URL** is configured. |
| **Relative path without `/` prefix** | **Base URL**: `https://instance.salesforce.com/services` **Request URL**: `data/` Workato appends the request URL to the base URL. **Note**: Relative paths can only be used if a **Base URL** is configured. |

## Base URL errors

If the action request URL attempts to use a different base URL or the computed final request URL is invalid, Workato will prevent the HTTP action and stop the job with an error.

Here are some common errors with HTTP base URL validation:

| Type of Error | Example |
| --- | --- |
| **Using a different base URL** | **Base URL**: `https://instance.salesforce.com` **Request URL**: `https://acme.com/users/` The base URL does not match. Error message: `Attempted to send request to https://acme.com/users/ but only request with base URL https://instance.salesforce.com is allowed.` |
| **Mismatch relative path with / prefix** | **Base URL**: `https://instance.salesforce.com/services` **Request URL**: `/rest` The relative path does not match `/services` defined in the Base URL. Error message: `Attempted to send request to https://instance.salesforce.com/rest but only request with base URL https://instance.salesforce.com/services is allowed.` |

* * *

## Define the base URL

You can define the base URL by configuring the **Base URL** field when [creating an HTTP connection](/en/developing-connectors/http/connection-setup). The base URL is typically provided by your target API's documentation.

For example, the base URL for the [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm) is:

```shell
https://instance.salesforce.com/
```

This applies for both cloud-based HTTP endpoints and on-premise HTTP endpoints.

---
