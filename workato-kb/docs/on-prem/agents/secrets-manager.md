<!-- source: https://docs.workato.com/en/on-prem/agents/secrets-manager | lastmod: 2026-06-30 -->
> Use an external secrets manager with the Workato on-prem agent to manage passwords without storing them in config files.

# On-prem agent - Secrets Manager

To simplify password management, use an external secrets manager with Workato's [on-prem agent (OPA)](/en/on-prem/agents).

This approach eliminates the need to store passwords in OPA config files, allowing you to rotate your passwords without re-configuring OPA.

* * *

## Connection types

The [on-prem connection type](/en/on-prem/agents/connection) determines which secrets managers are supported. Both connection types let you use OPA to connect your secrets manager to Workato from behind a corporate firewall.

- [Cloud profiles](/en/on-prem/agents/connection/cloud) support AWS Secrets Manager, Microsoft Azure Key Vault, and HashiCorp Vault. Cloud profiles are set up directly in Workato, so you don't need to access the machine where the on-prem agent is installed.
- [Connection profiles](/en/on-prem/agents/connection/profile) support AWS Secrets Manager, Microsoft Azure Key Vault, and Google Secret Manager. Connection profiles are set up manually in a config file on the machine where the on-prem agent is installed.

> **CLOUD CONNECTION**
> 
> If you want to connect a secrets manager but aren't using an on-prem agent, see [Secrets management for connection credentials](/en/security/data-protection/secrets-management/secrets-management).

* * *

## How it works

At a high level, here's how using a secrets manager works with OPA:

1. You create a vault and secret in your external secrets manager.
   
2. Configure Workato to use the secrets manager.
   
   - **For cloud profiles:** Set up a connection for the secrets manager you're using. If you're using HashiCorp Vault, you must also set the **Connection type** to your on-prem group instead of _Cloud_.
   - **For connection profiles:** Define the secrets manager in the config file on the machine where the on-prem agent is installed.
3. Specify the secret to retrieve from the secrets manager.
   
   - **For cloud profiles:** Specify the secret in the configuration page for the connection.
   - **For connection profiles:** Specify the secret in the appropriate [system profile](/en/on-prem/agents/connection/profile#system-types).
4. When fully configured, OPA retrieves the secret from the defined secrets manager.
   

* * *

## Supported secret managers

The table below lists the secret managers Workato currently supports for use with OPA. In the table, you'll find:

- **Name**: The name of the secrets manager and a link to a setup guide
- **Provider Value**: The `provider` value of the secrets manager, used in the [OPA config file](/en/on-prem/agents/connection/profile) (if applicable)
- **Profile**: The [on-prem connection type](/en/on-prem/agents/connection) ([cloud profile](/en/on-prem/agents/connection/cloud) or [connection profile](/en/on-prem/agents/connection/profile))

| Name | Provider Value | Profile |
| --- | --- | --- |
| [Amazon Web Services Secrets Manager](/en/on-prem/agents/secrets-manager/amazon-web-services-secret-manager) | `aws` | Cloud profile and connection profile |
| [Google Secret Manager](/en/on-prem/agents/secrets-manager/google-secret-manager) | `google` | Connection profile |
| [HashiCorp Vault](/en/on-prem/agents/secrets-manager/hashicorp-vault) | n/a | Cloud profile |
| [Microsoft Azure Key Vault](/en/on-prem/agents/secrets-manager/microsoft-azure-key-vault) | `azure` | Cloud profile and connection profile |

---
