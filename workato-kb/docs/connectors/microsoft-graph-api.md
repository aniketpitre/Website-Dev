<!-- source: https://docs.workato.com/en/connectors/microsoft-graph-api | lastmod: 2026-07-07 -->
> Connect to the Microsoft Graph API connector using authorization code grant or client credentials authentication.

# Microsoft Graph API

[Microsoft Graph API](https://learn.microsoft.com/en-us/graph/use-the-api) is a powerful unified endpoint that allows organizations to access and interact with Microsoft 365 services and other Microsoft cloud-based resources. It enables developers to integrate and automate various application actions, such as managing users, groups, mail, calendars, tasks, and security insights.

With Microsoft Graph API, organizations can enhance security, streamline user management, and enable seamless single sign-on experiences across different applications. It provides access to:

- External resources, such as Microsoft 365, the Azure portal, and thousands of other SaaS applications.
- Internal resources, such as apps on your corporate network, intranet, and any cloud apps developed by your organization.

## Install Microsoft Graph API from the community library

Complete the following steps to install the Microsoft Graph API connector from the [community library](https://www.workato.com/browse/connectors):

1. Open the recipe editor and search for a connector. Alternatively, you can search for a connector in the [community library](https://www.workato.com/browse/connectors).
   
   ![Search for recipe editor](/assets/search-on-recipe-editor.VrZpf8zl.png)_Search for community connectors in the recipe editor_
   
2. Select the community connector you plan to install.
   
3. Click **Install** to install the connector from the community library.
   
   ![Click install](/assets/install-connector.BXpGZP9K.png)_Click **Install**_
   
4. Select **Release connector**. Alternatively, select **Review code** to review and modify the connector code before releasing it to the workspace.
   
   ![Release connector](/assets/release-and-review.kWToLwmF.png)_Release the connector_
   
5. Summarize any changes you made to the connector, then click **Release** to allow workspace collaborators to use the connector in recipes.
   
   ![The Confirm release dialog](/assets/release.CpEhhA-6.png)_The **Confirm release** dialog_
   

## Connection setup

The Microsoft Graph API connector supports the following authentication types:

- [Authorization code grant authentication (OAuth 2.0)](#authentication-auth-code)
- [Client credentials-based authentication (OAuth 2.0)](#authentication-client-credentials)

> **MICROSOFT MFA ENFORCEMENT**
> 
> Microsoft is rolling out mandatory multifactor authentication (MFA) gradually to different applications and accounts in phases. This enforcement continues throughout 2025 and beyond. Refer to the Microsoft [Mandatory multifactor authentication for Azure and admin portals](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mandatory-multifactor-authentication?tabs=dotnet) documentation for more information.
> 
> We strongly recommend enabling MFA now for all Microsoft accounts used with Workato to avoid service disruptions from short-notice enforcement changes.
> 
> Complete the following steps to maintain uninterrupted service:
> 
> 1. Enable MFA for your Microsoft organization following the Microsoft MFA setup guide. Refer to [Set up multifactor authentication for Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/admin/security-and-compliance/set-up-multi-factor-authentication?view=o365-worldwide) for more information.
>    
> 2. Reconnect your Microsoft connection in Workato.
>    
> 3. Complete the OAuth flow with MFA when prompted.
>    
> 4. Test your recipes to ensure they work with the updated connection.
>    

### Authorization code grant authentication (OAuth 2.0)

Authorization code grant authentication signs in as a specific user and uses **Delegated** permissions.

This authentication type requires the following values:

- **Client ID**
- **Client secret**
- **Tenant ID** (required for single tenant)

#### Minimum and default scopes

When no scopes are provided in the **Scopes** input field, the Microsoft Graph API connector requests the following scopes for authorization code grant connections by default. These scopes are necessary to use all of the connector's triggers and actions. You must assign these permissions to the Workato app as **Delegated** permissions in the Azure portal.

- `offline_access`
- `openid`
- `profile`
- `User.Read`
- `User.Read.All`
- `User.ReadBasic.All`
- `User.ReadWrite`
- `User.ReadWrite.All`
- `Directory.Read.All`
- `Directory.ReadWrite.All`
- `Files.ReadWrite.All`
- `Mail.ReadBasic`
- `Mail.Read`
- `Mail.ReadWrite`
- `Mail.Send`
- `MailboxFolder.Read`
- `MailboxFolder.ReadWrite`
- `Calendars.Read`
- `Calendars.ReadBasic`
- `Calendars.ReadWrite`
- `OnlineMeetings.Read`
- `OnlineMeetings.ReadWrite`
- `OnlineMeetingArtifact.Read.All`
- `OnlineMeetingTranscript.Read.All`
- `OnlineMeetingRecording.Read.All`

The following scopes are not requested by default. Add them through the **Scopes** input field when you create a connection if your use case requires them:

- `DeviceManagementManagedDevices.Read.All`
- `DeviceManagementManagedDevices.ReadWrite.All`

The following minimum scopes are required to establish a connection to Microsoft Graph API using authorization code grant authentication:

- `User.Read`
- `offline_access`

#### Microsoft Graph API setup for authorization code grant authentication

Complete the following steps to set up the Microsoft Graph API connector for authorization code grant authentication:

- [Register the Workato app in the Azure portal](#auth-register)
- [Assign permissions to your app](#assign-permissions)
- [Generate a client secret](#generate-client-secret)
- [Obtain the Application (client) ID and Directory (tenant) ID from the Azure portal](#obtain-ids)

##### Register the Workato app in the Azure portal

View register the Workato app in the Azure portal steps

Complete the following steps to register the Workato app in the Azure portal:

1. Sign in to the [Azure portal](https://portal.azure.com/).
   
2. Select **App registrations > + New registration**.
   
3. Enter a unique name for the application.
   
4. Use the **Supported account types** drop-down menu to select an account type.
   
5. Select **Web** from the **Select a platform** drop-down menu.
   
6. Use the following URI for the **Redirect URI**:
   
   ```html
   https://www.workato.com/oauth/callback
   ```
   
7. Select **Register**.
   

##### Assign permissions to your app

View assign permissions to your app steps

Complete the following steps to assign permissions to your app:

1. Go to your newly registered app and select **Manage > API permissions**.
   
2. Click **\+ Add a permission** and select **Microsoft Graph**.
   
3. Select **Delegated permissions** as the permission type, since your application requires a user to sign in.
   
   ![Add permissions](/assets/app-permissions.Cbe76A6a.png)_Add permissions_
   
4. Add the required permissions. Refer to [Minimum and default scopes](/en/connectors/microsoft-graph-api#authorization-code-grant-scopes) for the scopes to assign.
   
5. Click **Add permissions**.
   
   Admin consent is required for specific permissions. Refer to [Connect Microsoft Entra ID to the Microsoft Graph API connector](/en/connectors/microsoft-graph-api#admin-consent) to learn more.
   

##### Generate a client secret

View generate a client secret steps

Complete the following steps to generate a client secret:

1. Go to **Manage > Certificates & Secrets > Client secrets**.
   
2. Click **\+ New client secret**.
   
3. Provide a **Description** for the client secret and specify an **Expires** date.
   
4. Click **Add**.
   
5. Copy and save the client secret **Value**—not the **Secret ID**—for use in Workato.
   
   ![Copy and save the client secret value](/assets/sharepoint-troubleshoot.DPBGyl4B.png)_Copy and save the client secret value_
   

##### Obtain the Application (client) ID and Directory (tenant) ID from the Azure portal

View obtain the Application (client) ID and Directory (tenant) ID from the Azure portal steps

Complete the following steps to obtain the Application (client) ID and Directory (tenant) ID from the Azure portal:

1. Go to the **Overview > Essentials** section.
   
   ![App details](/assets/app-details.Qi8HIQ2x.png)_App details_
   
2. Copy and save the **Application (client) ID** and **Directory (tenant) ID** for use in Workato.
   

#### Connect to Microsoft Graph API with authorization code grant authentication

Complete the following steps to establish an authorization code grant connection to Microsoft Graph API in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for `Microsoft Graph API` and select it as your app.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![Connect to Microsoft Graph API with authorization code grant authentication](/assets/connection-setup-acg.CWFbfw7A.png)_Connect to Microsoft Graph API with authorization code grant authentication_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the **Application (client) ID** from the Azure portal in the **Client ID** field.
   
6. Enter your client secret in the **Client secret** field.
   
7. Select **Authorization code grant** from the **Authentication type** drop-down menu.
   
8. Select an option from the **Account type** drop-down menu. Options include **Single tenant**, **Multitenant**, and **Active directory multitenant**.
   
9. Enter the **Directory (tenant) ID** in the **Tenant ID** field. This field is required if you select **Single tenant** as the **Account type**.
   
10. Optional. Select the scopes you need from the **Scope** drop-down menu. By default, the connector requests the scopes listed in [Minimum and default scopes](#authorization-code-grant-scopes), which cover all of its triggers and actions.
    
11. Click **Connect**.
    

### Client credentials-based authentication (OAuth 2.0)

Client credentials-based authentication connects as the application and uses **Application** permissions.

This authentication type requires the following values:

- **Client ID**
- **Client secret**
- **Tenant ID**

#### Minimum and recommended scopes

For client credentials connections, the connector uses the **Application** permissions consented for the app in the Azure portal. We recommend assigning the following permissions to support common operations across the connector's triggers and actions. Some operations may require additional Application permissions.

- `User.Read.All`
- `Files.ReadWrite.All`
- `Mail.Read`
- `Mail.ReadWrite`
- `Mail.Send`

The following minimum scope is required to establish a connection to Microsoft Graph API using client credentials authentication:

- `User.Read.All`

#### Microsoft Graph API setup for client credentials-based authentication

Complete the following steps to set up the Microsoft Graph API connector for client credentials-based authentication:

- [Register the Workato app in the Azure portal](#client-credentials-register)
- [Assign permissions to your app](#assign-permissions-client-credentials)
- [Generate a client secret](#generate-client-secret-client-credentials)
- [Obtain the Application (client) ID and Directory (tenant) ID from the Azure portal](#obtain-ids-client-credentials)

##### Register the Workato app in the Azure portal

View register the Workato app in the Azure portal steps

Complete the following steps to register the Workato app in the Azure portal:

1. Sign in to the [Azure portal](https://portal.azure.com/).
   
2. Select **App registrations > + New registration**.
   
3. Enter a unique name for the application.
   
4. Use the **Supported account types** drop-down menu to select an account type.
   
5. Select **Web** from the **Select a platform** drop-down menu.
   
6. Use the following URI for the **Redirect URI**:
   
   ```html
   https://www.workato.com/oauth/callback
   ```
   
7. Select **Register**.
   

##### Assign permissions to your app

View assign permissions to your app steps

Complete the following steps to assign permissions to your app:

1. Go to your newly registered app and select **Manage > API permissions**.
   
2. Click **\+ Add a permission** and select **Microsoft Graph**.
   
3. Select **Application permissions** as the permission type, since your application doesn't require a user to sign in.
   
   ![Add permissions](/assets/app-permissions.Cbe76A6a.png)_Add permissions_
   
4. Add the required permissions. Refer to [Minimum and recommended scopes](/en/connectors/microsoft-graph-api#client-credentials-scopes) for the scopes to assign.
   
5. Click **Add permissions**.
   
   Admin consent is required for specific permissions. Refer to [Connect Microsoft Entra ID to the Microsoft Graph API connector](/en/connectors/microsoft-graph-api#admin-consent) to learn more.
   

##### Generate a client secret

View generate a client secret steps

Complete the following steps to generate a client secret:

1. Go to **Manage > Certificates & Secrets > Client secrets**.
   
2. Click **\+ New client secret**.
   
3. Provide a **Description** for the client secret and specify an **Expires** date.
   
4. Click **Add**.
   
5. Copy and save the client secret **Value**—not the **Secret ID**—for use in Workato.
   
   ![Copy and save the client secret value](/assets/sharepoint-troubleshoot.DPBGyl4B.png)_Copy and save the client secret value_
   

##### Obtain the Application (client) ID and Directory (tenant) ID from the Azure portal

View obtain the Application (client) ID and Directory (tenant) ID from the Azure portal steps

Complete the following steps to obtain the Application (client) ID and Directory (tenant) ID from the Azure portal:

1. Go to the **Overview > Essentials** section.
   
   ![App details](/assets/app-details.Qi8HIQ2x.png)_App details_
   
2. Copy and save the **Application (client) ID** and **Directory (tenant) ID** for use in Workato.
   

#### Connect to Microsoft Graph API with client credentials-based authentication

Complete the following steps to establish a client credentials-based connection to Microsoft Graph API in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for `Microsoft Graph API` and select it as your app.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![Connect to Microsoft Graph API with client credentials-based authentication](/assets/connection-setup-cc.CWA0Ti2t.png)_Connect to Microsoft Graph API with client credentials-based authentication_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the **Application (client) ID** from the Azure portal in the **Client ID** field.
   
6. Enter your client secret in the **Client secret** field.
   
7. Select **Client credentials** from the **Authentication type** drop-down menu.
   
8. Enter the **Directory (tenant) ID** in the **Tenant ID** field.
   
9. Click **Connect**.
   

## Connect Microsoft Entra ID to the Microsoft Graph API connector

View connect Microsoft Entra ID to the Microsoft Graph API connector steps

To connect to the Microsoft Graph API connector using a Microsoft Entra ID account, ensure that all the consent requests are granted by admins.

Complete the following steps to grant admin consent using an admin account:

1. Sign in to your Azure portal and navigate to **Enterprise Applications > Activity > Admin consent requests**.
   
2. Approve the necessary consent requests.

---
