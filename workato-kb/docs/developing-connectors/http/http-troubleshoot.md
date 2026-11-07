<!-- source: https://docs.workato.com/en/developing-connectors/http/http-troubleshoot | lastmod: 2026-06-30 -->
> Troubleshoot the Workato HTTP connector to resolve connection failures, SSL validation errors, and token expiration with external APIs.

# HTTP connector troubleshooting

Use this page to troubleshoot issues when using the HTTP connector in Workato. These guides help you resolve connection failures, SSL validation errors, and token expiration issues with external APIs.

## SSL certificate verification failed

The HTTP connector fails to connect when the target server uses a self-signed or invalid certificate. You can export the certificate chain from the server and upload it in the HTTP connection setup to restore trust.

Refer to the [HTTP SSL certificate verify failed](/en/troubleshooting/http-ssl-certificate-verify-failed-error) guide for more information.

## Microsoft Graph API disconnects after one hour

The connector disconnects from Microsoft Graph after one hour when the access token expires. Include the `offline_access` scope in the connection settings to enable automatic token refresh.

Refer to the [Microsoft Graph API disconnects after one hour](/en/developing-connectors/http/troubleshoot-graph) guide for more information.

## Validate API behavior with Postman

Use Postman to test your request structure and headers before you build the request in Workato. This ensures that the API responds as expected and that the authentication and payload formatting are correctly configured.

---
