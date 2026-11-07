<!-- source: https://docs.workato.com/en/connectors/openapi/guides/authentication | lastmod: 2026-07-03 -->
> Reference for the authentication methods supported by the OpenAPI connector, including None, Basic, Header, Query params, and OAuth 2.0 grants.

# OpenAPI Connector Authentication

This guide serves as a reference for the authentication methods supported by the [OpenAPI connector](/en/connectors/openapi/).

* * *

## Swagger Files And Authentication Methods

In some cases, the Swagger file for an application describes the required authentication method for the application. If the file contains this info, it can be useful for [selecting the correct authentication method while setting up the connection](/en/connectors/openapi/guides/setting-up-the-openapi-connector).

> **INFO**
> 
> The connector currently doesn't support automatically reading the authentication method from Swagger files, even if present.

* * *

## Supported Methods

The OpenAPI connector supports the following authentication methods:

- [None](#none)- [Basic](#basic)- [Header](#header)- [Query params](#query-params)- [OAuth 2.0: Authorization code grant](#oauth-2-auth-code-grant)- [OAuth 2.0: Client credentials grant](#oauth-2-client-credentials-grant)- [OAuth 2.0: Resource owner password grant](#oauth-2-resource-owner-password-grant)

In some cases, we support other authentication methods only when customizing the OpenAPI connector. Refer to the [Setting up custom connectors](/en/connectors/openapi/guides/using-openapi-to-create-custom-connectors#implement-authentication) guide for more information.

## None

This method doesn't require any authentication details. Use this method if:

- The application doesn't require authentication
- Authentication is performed from the input you provide in the recipe

## Basic

[Basic authentication](https://swagger.io/docs/specification/authentication/basic-authentication/) validates requests using a username and password. This is encoded with Base64 in transit over SSL; it is a common authentication flow.

### Input

<dl><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#basic-auth-user">Basic auth user</a></dt><dd>The name of the application user/account.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#basic-auth-password">Basic auth password</a></dt><dd>The password of the user. An alternative to your password would be an API key or API token, retrieved from your account settings.</dd><dd>This should be kept secret.</dd></dl>

## Header

For applications that require additional headers outside of the usual username and password or API key, or if you want to customize the headers sent in the request, use header authentication. You can also use header authentication when you already have a generated token.

### Input field

<dl><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#header-authorization">Header authorization</a></dt><dd>Add custom auth headers, one on each line.</dd><dd><p>Example:</p><div class="language- vp-adaptive-theme"><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>X-api-token: secret42</span></span>
<span class="line"><span>Authorization: Bearer AbC123XyZ789uje4</span></span></code></pre></div></dd></dl>

## Query params

For applications where the authentication structure depends on validating URL query parameters, use the query params authentication.

### Input

<dl><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#query-param-auth">Query param authorization</a></dt><dd>Add custom URL query params, one on each line.</dd><dd><p>Example:</p><div class="language- vp-adaptive-theme"><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>token: 872943684629</span></span>
<span class="line"><span>api-key: DKDF34KD8DD</span></span></code></pre></div></dd></dl>

## OAuth 2.0: Authorization code grant

The [Authorization code grant flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow) is the authentication standard adopted by a number of cloud apps. It is popular because it allows you to give third parties access to your apps without having to disclose your username and password to the third party. In this case, Workato simply redirects you to your app, where you key in your login credentials. This is sufficient for the app to trust that Workato is acting on your behalf when it makes API requests.

The Authorization Code grant type is for use by confidential and public clients to exchange an authorization code for an access token. In addition, it requires that you have the following input information.

### Input

<dl><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#authorization-url">OAuth2 authorization URL</a></dt><dd>This is the URL where Workato redirects you when you click <strong>Connect</strong>. This is usually the log in screen of your app.</dd><dd>This should be publicly available from the API documentation of the app you’re connecting to, under the <strong>Authentication</strong> section.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#token-url">OAuth2 token URL</a></dt><dd>The URL where Workato retrieves an auth token. The auth token is used to verify that we have permission to access your app and its data.</dd><dd>This should be publicly available from the API documentation of the app you’re connecting to, under the <strong>Authentication</strong> section.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#access-token-request-mode">How does the API require credentials to be sent to request a token?</a></dt><dd>Depending on the app you’re connecting to, you may have to send your credentials either in the request body, or as a header.</dd><dd>This should be publicly available from the API documentation of the app you’re connecting to, under the <strong>Authentication</strong> section.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#client-id">Client ID</a></dt><dd>Public ID of the OAuth app that should be tied to Workato.</dd><dd>This is usually found in the <strong>Settings</strong> or <strong>Integrations</strong> page (or equivalent) of your logged in app account, where you plan to connect, and should be kept secret.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#client-secret">Client secret</a></dt><dd>Matching private key that the application verifies along with the Client ID.</dd><dd>This is usually found in the <strong>Settings</strong> or <strong>Integrations</strong> page (or equivalent) of your logged in app account, where you plan to connect, and should be kept secret.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#scopes">OAuth2 scopes</a></dt><dd>Scopes are permissions that you can request from the app.</dd><dd>This is usually found in the <strong>Settings</strong> or <strong>Integrations</strong> page (or equivalent) of your logged in app account, where you plan to connect.</dd></dl>

## OAuth 2.0: Client credentials grant

Use the [Client credentials grant flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow) when Workato requests an access token using only client credentials.

This approach is ideal when requesting access to the protected resources under your control, or for machine-to-machine authentication where a specific user’s permission to access data is not required.

### Input

<dl><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#token-url">OAuth2 token URL</a></dt><dd>URL where Workato retrieves the auth token. This auth token verifies that we have permission to access your app and its data.</dd><dd>This should be publicly available from the API documentation of the app you’re connecting to, under the <strong>Authentication</strong> section.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#access-token-request-mode">How does the API require credentials to be sent to request a token?</a></dt><dd>Depending on the app you’re connecting to, you may send your credentials either in the request body, or as a header.</dd><dd>This should be publicly available from the API documentation of the app you’re connecting to, under the <strong>Authentication</strong> section.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#client-id">Client ID</a></dt><dd>Public ID of the OAuth app that should be tied to Workato.</dd><dd>This is usually found in the <strong>Settings</strong> or <strong>Integrations</strong> page (or equivalent) of your logged in app account where you plan to connect, and should be kept secret.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#client-secret">Client secret</a></dt><dd>Matching private key that the application verifies along with the Client ID.</dd><dd>This is usually found in the <strong>Settings</strong> or <strong>Integrations</strong> page (or equivalent) of your logged in app account where you plan to connect, and should be kept secret.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#scopes">OAuth2 scopes</a></dt><dd>Scopes are permissions that you can request from the app.</dd><dd>This is usually found in the <strong>Settings</strong> or <strong>Integrations</strong> page (or equivalent) of your logged in app account where you plan to connect.</dd></dl>

## OAuth 2.0: Resource owner password grant

Use the [Resource owner password grant flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/resource-owner-password-flow) when Workato requests a token to access application resources using user credential (username and password).

### Input

<dl><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#token-url">OAuth2 token URL</a></dt><dd>URL where Workato retrieves the auth token. This auth token is used to verify that we have permission to access your app and its data.</dd><dd>This should be publicly available from the API documentation of the app you’re connecting to, under the <strong>Authentication</strong> section.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#client-id">Client ID</a></dt><dd>Public ID of the OAuth app that is tied to Workato.</dd><dd>This is usually found in the <strong>Settings</strong> or <strong>Integrations</strong> page (or equivalent) of your logged in app account where you plan to connect, and should be kept secret.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#client-secret">Client secret</a></dt><dd>Matching private key that the application verifies along with the Client ID.</dd><dd>This is usually found in the <strong>Settings</strong> or <strong>Integrations</strong> page (or equivalent) of your logged in app account where you plan to connect, and should be kept secret.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#username">Username</a></dt><dd>The name of the user who sends these API calls.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#password">Password</a></dt><dd>The password of the user who sends these API calls.</dd><dd>This should be kept secret.</dd><dt><a href="/en/connectors/openapi/reference/default-connection-fields.html#scopes">OAuth2 scopes</a></dt><dd>Scopes are permissions that you request from the app.</dd><dd>This is usually found in the <strong>Settings</strong> or <strong>Integrations</strong> page (or equivalent) of your logged in app account where you plan to connect.</dd></dl>

---
