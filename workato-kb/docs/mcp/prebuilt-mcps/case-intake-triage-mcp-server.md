<!-- source: https://docs.workato.com/en/mcp/prebuilt-mcps/case-intake-triage-mcp-server | lastmod: 2026-10-21 -->
> Use the Case Intake & Triage MCP server to connect your LLM to Jira Service Desk, Salesforce, Confluence, and PagerDuty to triage a ticket end-to-end, from customer context to priority, routing, and escalation.

# Case Intake & Triage MCP server

The Case Intake & Triage MCP server enables LLMs to interact with Jira Service Desk, Salesforce, Confluence, and PagerDuty for end-to-end support ticket triage through natural conversation. It provides tools to fetch a ticket, enrich it with customer context, apply a priority matrix, and write the resulting priority and routing back to the ticket, without requiring direct interaction with the Jira Service Desk, Salesforce, Confluence, and PagerDuty interfaces.

## Uses

Use the Case Intake & Triage MCP server to perform the following actions:

- Triage a ticket by pulling its classification fields, enriching it with Salesforce customer context, and applying a priority matrix
- Write the resulting priority and routing, or a specific assignee, back to the ticket
- Look up a ticket's customer tier and active entitlements without changing anything
- Search configured Confluence spaces for a runbook matching a ticket's issue
- Notify the on-call PagerDuty responder when a ticket is triaged as P1
- List the agents eligible for assignment to a ticket
- Reassign a ticket to a different agent with a fresh triage write
- Re-triage a ticket after its classification changes and get the resulting SLA state

### Example prompts

Use the following example prompts to invoke Case Intake & Triage MCP server tools:

- `Triage HELPDESK-1234`
- `What tier is the customer on ticket HELPDESK-1234?`
- `Prioritize this ticket and page on-call if it's P1`
- `Find a runbook that matches this ticket`
- `Who could work on HELPDESK-1234?`
- `Reassign HELPDESK-1234 to a different agent`
- `What's the current severity and impact on HELPDESK-5678?`
- `Search Confluence for a runbook about database timeouts`
- `Re-triage HELPDESK-1234 now that the impact has changed`

## Case Intake & Triage MCP server tools

The Case Intake & Triage MCP server provides the following tools:

| Tool | Description |
| --- | --- |
| [get\_case\_context](#get-case-context-tool) | Fetches a ticket's request state and classification fields, and establishes the workflow for the case. |
| [get\_customer\_account\_context](#get-customer-account-context-tool) | Resolves the ticket's Salesforce account and returns the customer's tier and active entitlements for the triage matrix. |
| [search\_known\_issues](#search-known-issues-tool) | Searches configured Confluence spaces for a runbook matching the ticket. |
| [apply\_triage\_to\_case](#apply-triage-to-case-tool) | Runs the ticket through the triage matrix and writes the resulting priority and routing back to it. |
| [trigger\_p1\_escalation](#trigger-p1-escalation-tool) | Notifies the on-call PagerDuty responder for a ticket triaged as P1. |
| [list\_assignable\_agents](#list-assignable-agents-tool) | Lists the users eligible for assignment to the ticket. |

## Install the Case Intake & Triage MCP server

Complete the following steps to install a prebuilt MCP server to your project:

1. Sign in to your Workato account.
   
2. Go to **AI Hub > Enterprise MCP > Custom servers**.
   
3. Click **\+ Create MCP server**.
   
4. Go to the **Start with pre-built MCP Servers using your connected apps** section and select the prebuilt MCP server you plan to use.
   
5. Click **Use this server**.
   
6. Provide a name for your MCP server in the **Server name** field.
   
7. Use the **Location** drop-down menu to select the project for the MCP server.
   
8. Go to the **Connections** section and connect to your app account.
   
9. Select the connection type you plan to use for the MCP server template.
   
   - **User's connection**: MCP server tools perform actions based on the identity and permissions of the user who connects to the application. Users authenticate with their own credentials to execute the skill.
   - **Your connection**: This option uses the connection established by the recipe builder and follows the same principles as normal app connections.
   
   ![Select your connection type](/assets/connection-type.Cor-6PJN.png)_Select your connection type_
   
   > **VERIFIED USER ACCESS AUTHENTICATION REQUIREMENTS**
   > 
   > Only app connections that use OAuth 2.0 authorization code grant are available for user's connection. Refer to [Verified user access](/en/mcp/verified-user-access) for more information.
   
10. Complete the app-specific connection setup steps in the following section.
    

## Case Intake & Triage connection setup

View Case Intake & Triage connection setup steps

Configure the following connections to set up the Case Intake & Triage MCP server:

- [Jira](#jira-connection-setup): Required. Reads and writes ticket priority, assignee, and routing through the core Issue API.
- [Jira Service Desk](#jira-service-desk-connection-setup): Required. Reads request state, SLA cycles, and customer-request details.
- [Salesforce](#salesforce-connection-setup): Required. Enriches a ticket with the customer's tier and active entitlements.
- [Confluence](#confluence-connection-setup): Required if runbook search is enabled.
- [PagerDuty](#pagerduty-connection-setup): Required if P1 on-call escalation is enabled.

### Jira connection setup

View Jira connection setup steps

There are six ways to connect to Jira:

- [API token](#api-token)
- [Service account (API token)](#service-account-api-token)
- [OAuth 2.0 (Cloud - Atlassian-hosted Jira)](#oauth-2-0-cloud)
- [OAuth 2.0 (Data Center)](#oauth-2-0-data-center)
- [Personal access tokens](#personal-access-tokens)
- [Basic authentication (password)](#basic-authentication-with-password)

We strongly recommend using API tokens, service account API tokens, OAuth 2.0, or personal access tokens to connect to Jira instead of basic authentication with a password.

> **LIMITATIONS**
> 
> Authentication methods for the Jira connector have the following limitations:
> 
> - Real-time triggers aren't supported with OAuth 2.0 (Cloud - Atlassian-hosted Jira) or OAuth 2.0 (Data Center).
> - On-prem Jira connections aren't supported with API token or service account (API token) authentication.
> - Atlassian deprecated basic authentication for cloud connections in December 2018. On-premise Jira is not affected.

#### API token

View API token steps

API tokens authenticate your Atlassian account without using a username and password. API token authentication doesn't support connections to on-premise Jira.

##### Prerequisites

You must generate an Atlassian API token for this authentication method. Refer to the Atlassian [Manage API tokens](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) guide for more information.

##### Connect to Jira using an API token

Complete the following steps to connect to Jira in Workato using an API token:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Jira` as your connection on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![API token auth](/assets/api-token-auth.CeU8zRLD.png)_API token auth_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select your connection type.
   
6. Use the **Auth type** drop-down menu to select **API token**.
   
7. Enter the URL subdomain for your Jira instance in the **Host name** field. For example: `workato.atlassian.net`
   
8. Enter the **Email** of the Jira account to link to Workato.
   
9. Enter the **API token** for your Atlassian account. Refer to the Atlassian [Manage API tokens](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) guide to generate this value.
   
10. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
    
11. Click **Connect**.
    

#### Service account (API token)

View Service account (API token) steps

Use this authentication method to connect Workato to Jira using an Atlassian Cloud service account. A service account is a dedicated, non-personal Atlassian account used for integrations. Service accounts aren't tied to individual users, so connections remain stable when team members leave or change roles.

Service account (API token) authentication supports Jira Cloud connections only.

##### Prerequisites

Complete the following tasks before you connect:

###### Set up the service account

1. Go to [Atlassian Administration](https://admin.atlassian.com/).
   
2. Select your organization.
   
3. Select **Directory > Service accounts** and click **Create a service account**.
   
4. Enter a name and description for the service account, then click **Create a service account**.
   
5. Select the apps and roles for the service account on the **Select app role for service account** page.
   
6. Add the service account to groups to grant access to specific projects or spaces.
   
7. Click **Create**.
   
8. Click **Create credentials**.
   
9. Select **API token** on the **Choose authentication type** screen.
   
10. Enter a **Name** and **Expires on** date on the **Name API token** page.
    
11. Select the scopes for your connection. At minimum, you must select `read:jira-user` to establish the connection. Select additional scopes based on the triggers and actions your recipes use. Refer to [Manage API tokens for service accounts](https://support.atlassian.com/user-management/docs/manage-api-tokens-for-service-accounts/#Create-an-API-token-with-scopes) for the full list of available scopes.
    
12. Click **Next**.
    
13. Review the scopes assigned to your token on the **Review your API token** screen.
    
14. Click **Create**.
    
15. Click **Copy** to copy your API token. Save this value for use in Workato.
    
16. Click **Done**.
    

##### Connect to Jira using a service account API token

Complete the following steps to connect to Jira in Workato using a service account API token:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Jira` as your connection on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select your connection type.
   
6. Use the **Auth type** drop-down menu to select **Service account (API token)**.
   
7. Enter the URL subdomain for your Jira instance in the **Host name** field. For example: `workato.atlassian.net`
   
8. Enter the email address associated with the service account in the **Email** field.
   
9. Enter the **API token** for the service account. Refer to the Atlassian [Manage API tokens](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) guide to generate this value.
   
10. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
    
11. Click **Connect**.
    

#### OAuth 2.0 (Cloud - Atlassian-hosted Jira)

View OAuth 2.0 (Cloud - Atlassian-hosted Jira) steps

OAuth 2.0 enables you to share specific data with an application while keeping your username, password, and other information private. OAuth 2.0 (Cloud - Atlassian-hosted Jira) supports Jira Cloud connections.

> **REAL-TIME TRIGGERS NOT SUPPORTED**
> 
> OAuth 2.0 doesn't support real-time triggers because it's incompatible with webhooks. As an alternative, you can register the [Webhooks connector](/en/connectors/workato-webhooks) in Jira to use Jira's static webhook functionality. Refer to the [Cloud Jira](https://support.atlassian.com/jira-cloud-administration/docs/manage-webhooks/) webhook documentation for registration steps.

##### Connect to Jira using OAuth 2.0 (Cloud - Atlassian-hosted Jira)

Complete the following steps to connect to Jira in Workato using OAuth 2.0 (Cloud - Atlassian-hosted Jira):

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Jira` as your connection on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![OAuth 2.0 auth](/assets/oauth-2-0-auth.Cd8GQFwz.png)_OAuth 2.0 auth_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select your connection type.
   
6. Use the **Auth type** drop-down menu to select **OAuth 2.0 (Cloud - Atlassian-hosted Jira)**.
   
7. Enter the URL subdomain for your Jira instance in the **Host name** field. For example: `workato.atlassian.net`
   
8. Optional. Use the **Scopes** drop-down menu to select the authorization scopes to request. Workato requests the following scopes by default:
   
   - `read:jira-user`
   - `write:jira-work`
   - `manage:jira-project`
   - `read:jira-work`
   - `manage:jira-webhook`
9. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
   
10. Click **Connect** and sign in to your Jira instance.
    
11. Authorize Workato's request to access your Jira instance.
    

#### OAuth 2.0 (Data Center)

View OAuth 2.0 (Data Center) steps

OAuth 2.0 (Data Center) enables you to connect to an on-premise Jira Data Center instance using OAuth 2.0.

> **REAL-TIME TRIGGERS NOT SUPPORTED**
> 
> OAuth 2.0 doesn't support real-time triggers because it's incompatible with webhooks. As an alternative, you can register the [Webhooks connector](/en/connectors/workato-webhooks) in Jira to use Jira's static webhook functionality. Refer to the [Jira Datacenter](https://confluence.atlassian.com/adminjiraserver/managing-webhooks-938846912.html) webhook documentation for registration steps.

##### Prerequisites

You must generate an Atlassian client ID and client secret if you plan to connect to Jira Data Center using OAuth 2.0. Refer to the Atlassian [Configure an incoming link](https://confluence.atlassian.com/adminjiraserver/configure-an-incoming-link-1115659067.html) guide to generate these values using `https://www.workato.com/oauth/callback` as the redirect URI.

##### Connect to Jira using OAuth 2.0 (Data Center)

Complete the following steps to connect to Jira in Workato using OAuth 2.0 (Data Center):

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Jira` as your connection on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select your connection type.
   
6. Use the **Auth type** drop-down menu to select **OAuth 2.0 (Data Center)**.
   
7. Enter the hostname of your Jira Data Center instance in the **Host name** field. For example: `jira.yourcompany.com`
   
8. Expand the **Advanced settings** section.
   
9. Enter the **Client ID** and **Client secret** from your Jira Data Center application link configuration. Refer to the [Prerequisites](#oauth-2-0-data-center-prerequisites) section to generate these values.
   
10. Optional. Use the **Scopes** drop-down menu to select the authorization scopes to request. Defaults to **READ** and **WRITE**.
    
11. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
    
12. Click **Connect** and sign in to your Jira instance.
    
13. Authorize Workato's request to access your Jira instance.
    

#### Personal access tokens

View Personal access tokens steps

Personal access tokens (PATs) authenticate your Atlassian account without using a username and password. PAT authentication supports on-premise Jira connections.

##### Prerequisites

You must generate an Atlassian personal access token for this authentication method. Refer to the Atlassian [Using Personal Access Tokens](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html) guide for more information.

##### Connect to Jira using a personal access token

Complete the following steps to connect to Jira in Workato using a personal access token:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Jira` as your connection on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![Personal access token auth](/assets/personal-access-token-auth.CVFp-sGl.png)_Personal access token auth_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select your connection type.
   
6. Use the **Auth type** drop-down menu to select **Personal access token**.
   
7. Enter the URL subdomain for your Jira instance in the **Host name** field. For example: `workato.atlassian.net`
   
8. Enter the **Personal access token** of the Jira account to link to Workato. Refer to the Atlassian [Using Personal Access Tokens](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html) guide to generate this value.
   
9. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
   
10. Click **Connect**.
    

#### Basic authentication with password

View Basic authentication with password steps

Basic authentication connects to your Atlassian account using a username and password. Basic authentication supports on-premise Jira connections.

> **DEPRECATED PASSWORD AUTHENTICATION**
> 
> Atlassian deprecated basic authentication for cloud connections in December 2018. On-premise Jira is not affected.

##### Connect to Jira using basic authentication

Complete the following steps to connect to Jira in Workato using basic authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Jira` as your connection on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![Basic password auth](/assets/basic-password-auth.Bp4eQ9Ja.png)_Basic password auth_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select your connection type.
   
6. Use the **Auth type** drop-down menu to select **Basic**.
   
7. Enter the URL subdomain for your Jira instance in the **Host name** field. For example: `workato.atlassian.net`
   
8. Enter your Jira **Username** and **Password**.
   
9. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
   
10. Click **Connect**.
    

### Jira Service Desk connection setup

View Jira Service Desk connection setup steps

#### Jira Service Desk API version

The Jira Service Desk connector uses the [Jira Service Desk Cloud REST API](https://developer.atlassian.com/cloud/jira/service-desk/rest/intro/).

#### Jira Service Desk supported editions and versions

The Jira Service Desk connector works with both cloud and on-prem instances 7.x and later.

The Jira Service Desk connector supports the following authentication types:

- [API token](#jira-service-desk-api-token)
- [OAuth 2.0](#jira-service-desk-oauth-2-0)
- [Basic authentication with password](#jira-service-desk-basic-authentication-with-password)

#### Jira Service Desk API token

View API token authentication steps

Use API token authentication to connect to Jira Service Desk with a token generated from your Atlassian account. Use basic authentication with password for on-prem instances.

#### Get an API token

Refer to [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) in the Atlassian documentation.

#### Connect to Jira Service Desk using an API token

Complete the following steps to set up an API token connection to Jira Service Desk in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Jira Service Desk` on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![API token auth](/assets/api-token-auth.BAbtq3je.png)_API token connection setup_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select **Cloud**.
   
6. Use the **Auth type** drop-down menu to select **API token**.
   
7. Enter your Jira Service Desk subdomain in the **Subdomain** field.
   
8. Enter the email address for your Jira Service Desk account in the **Email** field.
   
9. Enter your [API token](#api-token-setup) in the **API token** field.
   
10. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
    
11. Click **Connect**.
    

#### Jira Service Desk OAuth 2.0

View OAuth 2.0 authentication steps

Use OAuth 2.0 to connect to Jira Service Desk by signing in and granting access through Atlassian's authorization flow.

#### Default scopes

Workato requests the following scopes by default:

- `read:jira-user`
- `read:jira-work`
- `write:jira-work`
- `manage:jira-project`
- `manage:jira-configuration`
- `manage:jira-webhook`
- `read:servicedesk-request`
- `write:servicedesk-request`
- `manage:servicedesk-customer`

#### Connect to Jira Service Desk using OAuth 2.0

Complete the following steps to set up an OAuth 2.0 connection to Jira Service Desk in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Jira Service Desk` on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![OAuth 2.0 auth](/assets/oauth-2-0-auth.CuhHbAN1.png)_OAuth 2.0 connection setup_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select **Cloud**.
   
6. Use the **Auth type** drop-down menu to select **OAuth 2.0**.
   
7. Enter your Jira Service Desk subdomain in the **Subdomain** field.
   
8. Optional. Expand **Advanced settings** and use the **Scopes** field to request additional scopes. Refer to [Default scopes](#oauth-2-0-scopes) for the list of scopes Workato requests by default.
   
9. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
   
10. Click **Connect** and sign in to your Jira Service Desk instance using your account username and password when prompted.
    
11. Authorize Workato's request to access your Jira Service Desk instance.
    

#### Jira Service Desk basic authentication with password

View basic authentication steps

Atlassian deprecated basic authentication with password for Jira Service Desk (cloud only) on December 1, 2018, in favor of API tokens. On-prem Jira Service Desk connections aren't affected by this change.

#### Connect to Jira Service Desk using basic authentication

Complete the following steps to set up a basic authentication connection to Jira Service Desk in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Jira Service Desk` on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Basic password auth](/assets/basic-password-auth.CtTZL-sz.png)_Basic authentication connection setup_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to specify whether this is a cloud or on-prem connection.
   
6. Use the **Auth type** drop-down menu to select **Basic**.
   
7. Enter your Jira Service Desk subdomain in the **Subdomain** field.
   
8. Enter your Jira Service Desk username in the **Username** field.
   
9. Enter your Jira Service Desk password in the **Password** field.
   
10. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
    
11. Click **Connect**.
    

### Salesforce connection setup

View Salesforce connection setup steps

Workato supports OAuth 2.0 authentication and JWT bearer authentication connections for Salesforce.

#### OAuth 2.0 authentication

View OAuth 2.0 authentication steps

#### Connect to Salesforce using OAuth 2.0 (Authorization Code Grant)

Complete the following steps to set up an OAuth 2.0 (Authorization Code Grant) connection to Salesforce in Workato:

> **OAUTH RESTRICTIONS**
> 
> As of early September 2025, Salesforce restricts the use of uninstalled Salesforce Connected Apps. Refer to [OAuth restrictions](/en/connectors/salesforce#oauth-restrictions) for required actions if you encounter errors when you create a new connection. These steps are required for all new Salesforce connections starting **September 17, 2025**.

1. Click **Create > Connection** or press C twice.
   
2. Search for `Salesforce` and select it as your app.
   
3. Enter a name in the **Connection name** field.
   
   ![Salesforce connection setup](/assets/connect.CnntY3nd.png)_OAuth2.0 Salesforce connection setup_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Auth type** drop-down menu to select **OAuth 2.0 (Authorization Code Grant)**.
   
6. Use the **Sandbox** drop-down menu to specify whether the Salesforce account is a sandbox account.
   
7. Optional. Expand **Advanced settings** to configure the following options:
   
   Advanced settings
   
   - **Organization/community custom domain URL**: Enter the URL to your Salesforce community's custom domain. Required for community connections with unique domains.
   - **Requested permissions**: Select [permissions](https://help.salesforce.com/articleView?id=remoteaccess_oauth_scopes.htm&type=5) to request for this connection. Refer to [Requested scopes](/en/connectors/salesforce#oauth2-scopes) for the scopes Workato requests.
   - **Verified user access configuration**: Configure custom auth for personal connections. Refer to [Runtime user connections](/en/features/runtime-user-connections) for more information.
   
   > **REFRESH TOKEN SCOPE IS REQUIRED**
   > 
   > The **Perform requests at any time (`refresh_token`, `offline_access`)** scope is one of the scopes Workato requests for OAuth 2.0 connections, but whether Salesforce actually grants this scope depends on the Connected App's own OAuth policies, not on the Workato connection's settings. Refer to [Salesforce connection disconnects repeatedly](/en/connectors/salesforce/troubleshoot-connection-setup#salesforce-connection-disconnects-repeatedly) if your connection later disconnects when the access token expires. A Refresh Token Policy or IP Relaxation setting can cause the same symptom.
   
8. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection. Refer to [Create a custom OAuth profile for Salesforce](/en/connectors/salesforce/custom-oauth) for more information.
   
9. Click **Connect**.
   
10. Optional. If your Salesforce organization or community uses a custom domain, complete the following in the sign-in modal:
    
    - Click **Use Custom Domain**.
    - Enter your **Custom domain**, then click **Continue**.
    
    ![Salesforce custom domains](/assets/connection-custom-domain.D3hJN8X8.png)_Enter your Custom domain._
    
11. Enter your Salesforce **Username** and **Password**.
    
    ![Salesforce connection setup](/assets/login.CIu5oc0P.png)_Log in to your Salesforce account_
    
12. Click **Log In** to complete the setup.
    
    > **OAUTH\_APPROVAL\_ERROR\_GENERIC**
    > 
    > If you see this error, Salesforce is restricting the Workato app because it isn't installed. A Salesforce admin must install the app in **Connected Apps OAuth Usage** or assign the Salesforce permissions. Refer to [OAuth restrictions](/en/connectors/salesforce#oauth-restrictions) for details.
    

#### JWT bearer authentication

View JWT bearer authentication steps

> **ACTIONS ON BEHALF OF USER**
> 
> JWT connections can perform actions on behalf of a user you specify using the **On-behalf-of-user email** field. Contact your Workato Customer Success Manager to enable this feature.

#### How it works

JWT bearer authentication connects using a digital certificate that signs a JWT request. Workato sends a JWT to the Salesforce OAuth token endpoint, where Salesforce processes the JWT and issues an access token based on prior approval of Workato in Salesforce.

Although JWT bearer skips interactive sign-in, Salesforce still evaluates every request against the permissions of the user specified in the connection and attributes any changes to that user. Use a dedicated integration user rather than a personal account.

Refer to [Required roles and permissions](/en/connectors/salesforce#roles-and-permissions-required-to-connect) for the Salesforce permissions the connected user needs.

#### Generate a private key and certificate

JWT bearer authentication requires a private key and a certificate. The following command generates both using OpenSSL. Replace the `-subj` values with your own:

```bash
openssl req -x509 -sha256 -nodes -newkey rsa:2048 \
  -keyout server.key \
  -out server.crt \
  -days 365 \
  -subj "/CN=Your App Name/O=Your Organization/C=US"
```

This generates two files:

| File | Description |
| --- | --- |
| `server.key` | Your private key for Workato. Keep this secret. |
| `server.crt` | Your public certificate for Salesforce. |

Refer to Salesforce's documentation for more information:

- [OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_oauth_jwt_flow.htm&language=en_US&type=5): Details on how Salesforce uses this certificate to sign and validate JWTs.
- [Create a Private Key and Self-Signed Digital Certificate](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm): Other ways to generate a private key and certificate.

#### Create an external client app for JWT bearer

JWT bearer authentication also requires a registered external client app in Salesforce. Complete the following steps before creating your connection in Workato. Refer to Salesforce's [Create an External Client App](https://help.salesforce.com/s/articleView?id=xcloud.create_a_local_external_client_app.htm&language=en_US&type=5) documentation for more information.

1. Sign in to Salesforce.
   
2. Go to **Setup > Apps > External Client Apps > External Client App Manager**.
   
3. Click **New External Client App**.
   
4. Enter a name in the **External Client App Name** field, such as `Workato`.
   
5. Enter a name in the **API Name** field that meets the following requirements:
   
   - Contains only underscores and alphanumeric characters.
   - Is unique.
   - Starts with a letter.
   - Doesn't include spaces.
   - Doesn't end with an underscore.
   - Doesn't contain consecutive underscores.
6. Enter the contact email address for your app in the **Contact Email** field.
   
7. Use the **Distribution State** drop-down menu to select either **Local** or **Packaged**.
   
8. Expand **API (Enable OAuth Settings)** and select the **Enable OAuth** checkbox. Refer to Salesforce's [Configure the External Client App OAuth Settings](https://help.salesforce.com/s/articleView?id=xcloud.configure_external_client_app_oauth_settings.htm&language=en_US&type=5) documentation for more information.
   
9. Enter `https://www.workato.com/oauth/callback` in the **Callback URL** field.
   
10. Select your OAuth scopes in the **OAuth Scopes** field based on the actions and triggers you plan to use, then click the **Move selection to Selected OAuth Scopes** arrow to apply them.
    
    ![Configure scopes for your external client app](/assets/oauth-scopes.B-mGtuor.png)_Configure scopes for your external client app_
    
    > **REFRESH\_TOKEN SCOPE IS REQUIRED**
    > 
    > If you see the error `refresh_token scope is required and the connected app should be installed and preauthorized`, add **Perform requests at any time (refresh\_token, offline\_access)** to your OAuth scopes. If you then see an invalid session error, also add **Manage user data via APIs (api)**.
    
11. Select **Enable JWT Bearer Flow** in the **Flow Enablement** section. Refer to Salesforce's [Configure a JWT Bearer Flow](https://help.salesforce.com/s/articleView?id=xcloud.configure_oauth_jwt_flow_external_client_apps.htm&language=en_US&type=5) documentation for more information.
    
12. Upload `server.crt` as the digital certificate.
    
13. Click **Create**.
    
14. Click the **Policies** tab, then click **Edit**.
    
15. Expand the **OAuth Policies** section and set **Permitted Users** to **Admin approved users are pre-authorized**.
    
    > **USER HASN'T APPROVED THIS CONSUMER**
    > 
    > If you see this error when connecting, this step was likely missed.
    
16. Locate the **App Policies** section. Add either the [profile](https://help.salesforce.com/s/articleView?id=admin_userprofiles.htm&language=en_US&type=5) or [permission set](https://help.salesforce.com/s/articleView?id=000386289&language=en_US&type=1) assigned to the Salesforce user Workato connects as to the **Select Profiles** or **Select Permission Sets** list. Refer to Salesforce's [Preauthorize User App Access Through External Client App Policies](https://help.salesforce.com/s/articleView?id=xcloud.preauth_user_app_access_through_eca.htm&language=en_US&type=5) documentation for more information.
    
    > **USER IS NOT ADMIN APPROVED TO ACCESS THIS APP**
    > 
    > If you see this error when connecting, this step was likely missed.
    
17. Click **Save**.
    
18. Click the **Settings** tab for your external client app.
    
19. Expand the **OAuth Settings** section.
    
20. Click **Consumer Key and Secret**.
    
21. Verify your identity when prompted.
    
22. Copy the **Consumer Key**. You'll enter this as the **Issuer** when connecting in Workato.
    

#### Connect to Salesforce using JWT bearer

Complete the following steps to connect to Salesforce using JWT bearer authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for `Salesforce` and select it as your app.
   
3. Enter a name in the **Connection name** field.
   
   ![Salesforce JWT Connection](/assets/salesforce-new-jwt-connection.BCDJGTAT.png)_Configure Salesforce JWT Bearer connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Auth type** drop-down menu to select **JWT token**.
   
6. Use the **Sandbox** drop-down menu to specify whether the Salesforce account is a sandbox account.
   
7. Paste the full contents of `server.key` in the **Private key** field, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines.
   
8. Enter the **Consumer Key** from your external client app in the **Issuer** field.
   
9. Enter the **Subject** for the JWT connection. This is the username of the Salesforce user you want Workato to authenticate as, or a valid Experience Cloud username if you're connecting to an Experience Cloud site. You can use principal (`prn`) in place of subject (`sub`) for backward compatibility. If you specify both, Workato uses `prn`.
   
10. Enter your **Salesforce Subdomain**. For example, if your Salesforce URL is `yourInstance.salesforce.com`, the subdomain is `yourInstance`.
    
11. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection. Refer to [Create a custom OAuth profile for Salesforce](/en/connectors/salesforce/custom-oauth) for more information.
    
12. Click **Connect**.
    

### Confluence connection setup

View Confluence connection setup steps

The Confluence connector supports the following authentication types:

- [Basic](#confluence-basic)
- [API token](#confluence-api-token)
- [OAuth 2.0](#confluence-oauth)

#### Basic authentication

Use basic authentication with your Confluence username and password.

View basic authentication steps

Complete the following steps to set up a basic authentication connection to Confluence in Workato:

1. Click **Create > Connection**.
   
2. Search for `Confluence` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Confluence basic connection](/assets/confluence-basic-connection.C9dhQeh0.png)_Basic connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select **Cloud** for Confluence cloud instances or the corresponding option for on-prem connections. Refer to [Connections using an on-prem agent](/en/on-prem/agents/connection) for more information.
   
6. Use the **Auth type** drop-down menu to select **Basic**.
   
7. Enter your subdomain for cloud instances in the **Confluence subdomain** field. This is typically found in the Confluence URL. For example, your subdomain is `acme` if your URL is `https://acme.atlassian.net`.
   
8. Optionally, select **Enter on-prem URI** from the drop-down menu and enter your Confluence URI in the **Confluence domain** field. This is the root URI of your on-prem Confluence host. For example, `https://confluence.intranet.acme.com:7654`. You might need to add Workato's IP address to the allowlist to connect. Refer to [IP allowlists](/en/security/ip-allowlists) for more information.
   
9. Enter your Confluence **Username** and **Password**.
   
10. Click **Connect**.
    

#### API token authentication

You must generate an API token to use API token authentication.

##### Confluence setup for API token authentication

View generate API token steps

Complete the following steps to generate an API token in Confluence:

1. Go to the Atlassian [API Tokens](https://id.atlassian.com/manage/api-tokens) page.
   
2. Click **Create API token**.
   
3. Enter a **Name** and select an **Expires on** date.
   
4. Click **Create**.
   
5. Copy and save the **API token** for use in Workato.
   

##### Connect to Confluence with API token authentication

View connect to Confluence with API token authentication steps

Complete the following steps to set up an API token connection to Confluence in Workato:

1. Click **Create > Connection**.
   
2. Search for `Confluence` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Confluence API token connection](/assets/confluence-api-token-connection.U-D2amgE.png)_API token connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select **Cloud** for Confluence cloud instances or the corresponding option for on-prem connections. Refer to [Connections using an on-prem agent](/en/on-prem/agents/connection) for more information.
   
6. Use the **Auth type** drop-down menu to select **API token**.
   
7. Enter your subdomain for cloud instances in the **Confluence subdomain** field. This is typically found in the Confluence URL. For example, your subdomain is `acme` if your URL is `https://acme.atlassian.net`.
   
8. Optionally, select **Enter on-prem URI** from the drop-down menu and enter your Confluence URI in the **Confluence domain** field. This is the root URI of your on-prem Confluence host. For example, `https://confluence.intranet.acme.com:7654`. You might need to add Workato's IP address to the allowlist to connect. Refer to [IP allowlists](/en/security/ip-allowlists) for more information.
   
9. Enter your **Email** and **API token**.
   
10. Click **Connect**.
    

#### OAuth 2.0 authentication

You must generate a client ID and secret to use OAuth 2.0 authentication.

##### Confluence setup for OAuth 2.0 authentication

View generate client ID and secret steps

Complete the following steps to generate a client ID and secret in Confluence:

1. Log in to the Atlassian [Developer Console](https://developer.atlassian.com/console/myapps/).
   
2. Click **Create > OAuth 2.0 integration**.
   
3. Enter a **Name**.
   
4. Agree to the terms.
   
5. Click **Create**.
   
6. Click **Authorization** and then click **Add**.
   
7. Enter `https://www.workato.com/oauth/callback` in the **Callback URL** field and then click **Save changes**.
   
8. Click **Permissions**.
   
9. Click **Add** for the Confluence API.
   
10. Click **Configure**.
    
11. Click **Edit Scopes** under **Classic scopes**.
    
12. Select the following scopes:
    
    - `manage:confluence-configuration`
    - `read:confluence-groups`
    - `read:confluence-content.all`
    - `read:confluence-content.permission`
    - `read:confluence-content.summary`
    - `read:confluence-props`
    - `read:confluence-space.summary`
    - `read:confluence-user`
    - `read:page:confluence`
    - `readonly:content.attachment:confluence`
    - `search:confluence`
    - `write:confluence-content`
    - `write:confluence-file`
    - `write:confluence-groups`
    - `write:confluence-space`
13. Click **Save**.
    
14. Select **Settings**.
    
15. Copy and save the **Client ID** and **Secret** for use in Workato.
    

##### Connect to Confluence with OAuth 2.0 authentication

View connect to Confluence with OAuth 2.0 authentication steps

Complete the following steps to set up an OAuth 2.0 connection to Confluence in Workato:

1. Click **Create > Connection**.
   
2. Search for `Confluence` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Confluence OAuth connection](/assets/confluence-oauth-connection.Ck6ynxBz.png)_OAuth connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** drop-down menu to select **Cloud** for Confluence cloud instances or the corresponding option for on-prem connections. Refer to [Connections using an on-prem agent](/en/on-prem/agents/connection) for more information.
   
6. Use the **Auth type** drop-down menu to select **OAuth 2.0**.
   
7. Enter your subdomain for cloud instances in the **Confluence subdomain** field. This is typically found in the Confluence URL. For example, your subdomain is `acme` if your URL is `https://acme.atlassian.net`.
   
8. Optionally, select **Enter on-prem URI** from the drop-down menu and enter your Confluence URI in the **Confluence domain** field. This is the root URI of your on-prem Confluence host. For example, `https://confluence.intranet.acme.com:7654`. You might need to add Workato's IP address to the allowlist to connect. Refer to [IP allowlists](/en/security/ip-allowlists) for more information.
   
9. Enter the **Client ID** and **Client secret**.
   
10. Optionally, expand **Advanced settings** and select **Classic scopes** or **Granular scopes**.
    
11. Click **Connect**.
    
12. Choose a site from the **Use app on** drop-down menu. This is the Atlassian account your app accesses.
    
13. Click **Accept**.
    

### PagerDuty connection setup

View PagerDuty connection setup steps

The PagerDuty connector uses API key authentication.

#### Create an API key

View create API key steps

You must create an API key (PagerDuty integration key) to connect to Workato. PagerDuty supports the following types of API keys:

- **General access API key**: This API key has access to all objects in your PagerDuty instance.
- **Personal API key**: This API key is restricted according to the user's permissions. This requires PagerDuty [advanced permissions](https://support.pagerduty.com/docs/advanced-permissions).

Complete the following steps to create a PagerDuty API key:

1. Go to **Integrations > Developer Tools > API Access Keys** and click **Create New API Key**.
   
   Alternatively, go to **Profile > User settings** to create a Personal API key.
   
2. Enter a description that helps identify the key, such as **Workato integration key**. Ensure that you don't select `Read-only API Key`. This connection requires read and write permissions to function properly.
   
   ![Provide the API key with write permissions](/assets/api-key-permissions.DCypS1mp.png)_Provide the API key with write permissions_
   
3. Store the API key in a secure location. Use this API key to authenticate with Workato.
   

#### Connect to PagerDuty on Workato

View connect to PagerDuty steps

Complete the following steps to connect to PagerDuty in Workato:

1. Select **Create > Connection** or press C twice.
   
2. Search for `PagerDuty` on the **New connection** page and select it.
   
3. Enter a name in the **Connection name** field.
   
   ![Connect to PagerDuty](/assets/pagerduty-connection-setup.DEV0ftqU.png)_Connect to PagerDuty_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the API key you generated in the **API key** field.
   
6. Select **Connect** to verify and save the connection. Workato displays a success message when the connection is established.
   

### Case Intake & Triage role requirements

Each tool's availability depends on the permissions of the connected account. Calling a tool without the required permission returns a `permission_denied` outcome rather than a partial result.

- **Jira Service Desk** requires the project-level **Browse Users and Groups** or **Assign Issues** permission and the following scopes at a minimum:
  
  - `read:servicedesk-request`
  - `read:jira-work`
  - `write:jira-work`
  - `read:jira-user`
  
  Refer to [Scopes for OAuth 2.0 (3LO) and Forge apps](https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/) for the complete list of scopes.
  
- **Salesforce** requires read access to the following objects:
  
  - Account
  - Entitlement
  - Contact, only when [account\_match\_rule](#data-table-configuration) is `contact_email_lookup`
  - Any configured escalation object
- **Confluence** requires read access to the spaces you set in [confluence.space\_keys](#data-table-configuration).
  
- **PagerDuty** requires rights to the service set in [pagerduty.service\_id](#data-table-configuration).
  

### Data table configuration

Edit the following data tables to control triage rules, connector integration settings, escalation timing, and operational limits:

- `triage_matrix`: Define the priority matrix. Create a row for every `severity`, `impact`, and `tier` combination, including the configured `unknown_customer_tier`, with the resulting `priority` (P1–P4).
  
- `suggested_routing_map`: Map each `severity`, `impact`, and `tier` combination to a `routing_value`. Required when `jsm.assignment_mode` is `routing_field`.
  
- `suggested_assignee_map`: Map each `severity`, `impact`, and `tier` combination to an `account_id`. Required when `jsm.assignment_mode` is `specific_agent`.
  
- `severity_value_map`: Map each raw JSM severity field value (`raw_value`) to a `mapped_value` of `low`, `medium`, `high`, or `critical`. Every raw value on a ticket must have a row. An unmapped value returns `classification_required`, an outcome that blocks the triage write until someone sets the field on the ticket.
  
- `impact_value_map`: Map each raw JSM impact field value to `single_user`, `multi_user`, `department`, or `org_wide`.
  
- `routing_value_map`: Map each raw JSM routing field value to a normalized routing value.
  
- `org_mapping`: Map a customer domain or identifier pattern (`pattern`) to a Salesforce Account ID (`account_id`). Required when `salesforce.account_match_rule` is `organization_mapping_table`.
  
- `entitlement_tier_derivation`: Map a Salesforce entitlement process (`SlaProcess`) name or ID (`sla_process_key`) to this server's tier values (`tier`). Required when `salesforce.tier_source` is `active_entitlement`.
  
- `case_intake_config` contains the following keys:
  

| Key | Description |
| --- | --- |
| `jsm.cloud_id` | Enter the Atlassian cloud ID for this deployment. Used as part of the workflow-state key. |
| `jsm.default_project_key` | Enter the default Jira Service Desk project key. |
| `jsm.severity_field.id` | Enter the Jira custom field ID that carries severity. |
| `jsm.impact_field.id` | Enter the Jira custom field ID that carries impact. |
| `jsm.routing_field.id` | Enter the Jira custom field ID that drives queue placement. Required when `jsm.assignment_mode` is `routing_field`. |
| `jsm.assignment_mode` | Choose `routing_field` (default) or `specific_agent`. |
| `jsm.priority_mapping.P1` / `.P2` / `.P3` / `.P4` | Map this server's P1–P4 priorities to the JSM instance's native priority names. |
| `salesforce.tier_source` | Choose `account_field` or `active_entitlement`. |
| `salesforce.tier_field` | Enter the Account custom field that holds the customer's tier. Required when `tier_source` is `account_field`. |
| `salesforce.account_match_rule` | Choose one of `direct_account_id_field`, `contact_email_lookup`, `custom_account_domain_field`, or `organization_mapping_table`. |
| `salesforce.direct_account_id_field` | Enter the JSM custom field holding the Salesforce Account ID. Required when `account_match_rule` is `direct_account_id_field`. |
| `salesforce.custom_account_domain_field` | Enter the Account custom field holding the customer's domain. Required when `account_match_rule` is `custom_account_domain_field`. |
| `salesforce.unknown_customer_tier` | Enter the fallback tier used when no Account matches the ticket. |
| `salesforce.health_field` | Optional. Enter an Account field to surface as context. This field doesn't feed the priority matrix. |
| `salesforce.escalation_object.api_name` / `.account_relationship_field` / `.status_field` / `.open_status_values` / `.returned_fields` | Optional. Enter the values needed to surface a customer's open escalations as context. |
| `confluence.enabled` | Configure whether the `search_known_issues` tool is available. |
| `confluence.space_keys` | Enter the Confluence spaces to search for runbooks. |
| `confluence.max_results` | Specify the default number of runbook search results to return. Defaults to `5`, capped by `server_limits.max_kb_results`. |
| `pagerduty.enabled` | Configure whether P1 on-call escalation is available through the `trigger_p1_escalation` tool. |
| `pagerduty.service_id` | Enter the PagerDuty service to page for P1 escalations. |
| `pagerduty.escalation_policy_id` | Optional. Enter an escalation policy to override the service's default. |
| `pagerduty.priority_mapping.P1` | Map this server's P1 priority to a PagerDuty priority ID. |
| `pagerduty.from_email` | Enter the PagerDuty user email required by the incident's `From` header. |
| `pagerduty.approval_token_ttl_seconds` | Specify how long a P1 escalation approval token remains valid. Defaults to `120`. |
| `server_limits.max_kb_results` | Specify the hard cap on Confluence runbook search results. Defaults to `10`. |
| `server_limits.max_assignable_results` | Specify the maximum assignable-agent results returned in a single page. Defaults to `50`, subject to the Jira Service Desk 1000-user endpoint cap. |
| `server_limits.snapshot_ttl_seconds` | Specify how long a customer context snapshot remains valid. Defaults to `600`. |
| `server_limits.payload_max_chars` | Specify the field-level character caps applied when sanitizing ticket text for the PagerDuty payload. Defaults to `1000`. |
| `triage_matrix_version` | Enter a version identifier for the triage matrix. Every preview and audit record includes this value. |
| `triage_matrix_content_hash` | A hash of the current triage matrix content, written into audit records and escalation payloads to confirm which matrix version produced them. Don't set this manually. |
| `audit.log_retention_days` | Specify how many days to retain audit records. Defaults to `365`. |

View data table configuration steps

Complete the following steps to configure settings using the MCP's data tables:

1. Sign in to your Workato account and go to **Projects**.
   
2. Go to the project that contains your MCP server.
   
3. Open the **Case Intake & Triage** folder.
   
4. Select the data table to update, such as `triage_matrix` or `case_intake_config`.
   
5. [Add](/en/data-tables/user-interface/edit#add-a-new-row) or [edit](/en/data-tables/user-interface/edit#edit-a-row) rows to make your changes. For example, add a row to `case_intake_config` with the key `pagerduty.service_id` and your PagerDuty service's ID as the value.
   

## How to use Case Intake & Triage MCP server tools

Refer to the following sections for detailed information on available tools.

### get\_case\_context tool

The **get\_case\_context** tool fetches a ticket's request state and classification fields, and establishes the workflow for the case. Your LLM uses this tool before any other tool in the sequence, since every downstream tool requires the `workflow_id` it returns.

**Try asking**:

- `Triage HELPDESK-1234`
- `Pull up ticket HELPDESK-1234`
- `What's the status of HELPDESK-1234?`

### get\_customer\_account\_context tool

The **get\_customer\_account\_context** tool resolves the ticket's Salesforce account and returns the customer's tier and active entitlements for the [triage matrix](#data-table-configuration). Your LLM uses this tool right after **get\_case\_context**, since **apply\_triage\_to\_case** requires the `context_snapshot_id` it returns.

**Try asking**:

- `What tier is the customer on ticket HELPDESK-1234?`
- `Does this customer have an active entitlement?`
- `Triage HELPDESK-1234`

### search\_known\_issues tool

The **search\_known\_issues** tool searches configured Confluence spaces for a runbook matching the ticket. Your LLM uses this tool to find documentation related to a ticket's issue. The server derives the search terms from the ticket's subject and description, and only adds a topic you explicitly name as a hint.

**Try asking**:

- `Find a runbook that matches this ticket`
- `Search Confluence for a runbook about database timeouts`
- `Is there a known issue for this?`

### apply\_triage\_to\_case tool

The **apply\_triage\_to\_case** tool runs the ticket through the [triage matrix](#data-table-configuration) and writes the resulting priority and routing to the ticket. Your LLM calls this tool once to preview the plan, then calls it again to apply it.

**Try asking**:

- `Triage HELPDESK-1234`
- `Prioritize this ticket`
- `Show me the triage plan before you apply it`
- `Re-triage HELPDESK-1234 now that the impact has changed`

### trigger\_p1\_escalation tool

The **trigger\_p1\_escalation** tool notifies the on-call PagerDuty responder for a ticket triaged as P1. Your LLM only uses this tool when the committed priority is P1. It calls the tool once to preview the on-call target and request a single-use approval token, then calls it again with that token after you approve it to send a page.

**Try asking**:

- `Prioritize this ticket and page on-call if it's P1`
- `Page on-call for HELPDESK-1234`
- `Who's currently on-call for this escalation policy?`

### list\_assignable\_agents tool

The **list\_assignable\_agents** tool lists the users eligible for assignment to a ticket. Your LLM uses this tool to find who could work on a ticket, or to suggest an alternative to the matrix-suggested assignee.

**Try asking**:

- `Who could work on HELPDESK-1234?`
- `Reassign HELPDESK-1234 to a different agent`
- `Show me other agents who could take this ticket`

## Getting started

View and manage your MCP server tools in the **Details** tab **Tools** section. Tool management provides the following capabilities:

- [Start tools](/en/mcp/manage-tools#start-tools)
- [Remove tools](/en/mcp/manage-tools#remove-tools)
- [Edit tools](/en/mcp/manage-tools#edit-tools)
- [Add tools](/en/mcp/manage-tools#add-tools)
- [Edit your LLM-facing MCP server description](/en/mcp/prebuilt-mcps#edit-llm-facing-mcp-server-description)

> **TOOLS MUST BE STARTED**
> 
> Your LLM can only access active tools in your MCP server connector.

---
