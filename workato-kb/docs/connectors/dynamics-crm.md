<!-- source: https://docs.workato.com/en/connectors/dynamics-crm | lastmod: 2026-10-22 -->
> The Microsoft Dynamics 365 connector enables you to automate sales, customer service, field service, and marketing CRM workflows in Workato.

# Microsoft Dynamics 365

[Microsoft Dynamics 365](https://dynamics.microsoft.com/en-us/) is a customer relationship management software package developed by Microsoft. It is built on the Microsoft Dynamics 365 platform, allowing users to easily extend and tailor the application for their business.

## Connector comparison

Workato offers two connectors for Microsoft Dynamics 365, each designed for a different set of applications within the Dynamics ecosystem:

- Microsoft Dynamics 365 (CRM apps)
- [Microsoft Dynamics Finance and Operations](/en/connectors/microsoft-dynamics-finance-and-operations) (ERP apps)

Use the following table to determine which connector aligns with your organization's integration needs:

|  | Microsoft Dynamics 365 | Microsoft Dynamics Finance and Operations |
| --- | --- | --- |
| Recommended for | Sales, Customer Service, Field Service, Marketing | Finance, Supply Chain Management, Commerce, Human Resources |
| Connector type | Platform | Community |
| Required permission | `user.impersonation` (Minimum scope) | `AX.FullAccess` (Recommended scope) |
| Authentication method | OAuth 2.0 with Microsoft Dataverse | OAuth 2.0 with Microsoft Entra ID |
| API documentation reference | [Dataverse Web API](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview) | [OData API](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/data-entities-overview) |
| Authentication reference | [Dataverse OAuth](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/authenticate-oauth) | [OData OAuth](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/services-home-page#authentication) |

## API version

The Microsoft Dynamics 365 connector uses the Microsoft Dynamics 365 API v8.0 and v9.0.

Select your preferred version during [connection setup](#how-to-connect-to-microsoft-dynamics-crm-on-workato).

## How to connect to Microsoft Dynamics 365

The Microsoft Dynamics 365 connector supports the following authentication methods:

- [Authorization code grant authentication](#authentication-auth-code)
- [Client credentials authentication](#authentication-client-credentials)
- [Resource owner password credentials grant authentication](#authentication-resource-owner-password-credentials)

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

### Authorization code grant authentication

This authentication method requires the following values:

- Client ID
- Client secret

#### Register the Workato app in the Azure Portal

Complete the following steps to register the Workato app and assign it permissions for authorization code grant connections.

1. Register the Workato app in the Azure Portal
   
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
      
   
2. Assign permissions to your app
   
   1. In the navigation sidebar, select **Manage > API permissions**.
      
   2. Click **\+ Add a permission** and select **Dynamics CRM**.
      
      ![Select Dynamics CRM](/assets/dynamics-crm.DFHMudAF.png)_Select Dynamics CRM_
      
   3. Select **Delegated permissions**, then select the `user_impersonation` checkbox.
      
      ![Select permissions](/assets/app-permissions-dynamics.TGgAEhVP.png)_Select permissions_
      
   4. Click **Add permissions**.
      
   
   **Note**: Admin consent is required for specific permissions. Refer to the [Granting admin consent](/en/connectors/dynamics-crm#admin-consent) section to learn more.
   
   ![Admin consent screen](/assets/dynamics-admin-consent.D-ilQt9x.png)_Admin consent screen_
   
3. Obtain the Application (client) ID from the Azure Portal
   
   1. Go to the **Overview > Essentials** section.
      
      ![App details](/assets/app-details.Qi8HIQ2x.png)_App details_
      
   2. Copy the `Application (client) ID` for use in Workato.
      
   
4. Generate a client secret
   
   Complete the following steps to generate a client secret:
   
   1. Go to **Manage > Certificates & Secrets > Client secrets**.
      
   2. Click **\+ New client secret**.
      
   3. Provide a **Description** for the client secret and specify an **Expires** date.
      
   4. Click **Add**.
      
   5. Copy and save the client secret **Value**—not the **Secret ID**—for use in Workato.
      
      ![Copy and save the client secret value](/assets/sharepoint-troubleshoot.DPBGyl4B.png)_Copy and save the client secret value_
      
   

Return to Workato to finish setting up your connection.

#### Complete setup in Workato

Complete the following steps to establish a Microsoft Dynamics 365 connection using authorization code grant authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Microsoft Dynamics 365` as your connection on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Connect to Microsoft Dynamics 365](/assets/auth-code-grant.AitXdIwi.png)_Connect to Microsoft Dynamics 365_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** to specify a cloud connection or select an on-prem group for the connection.
   
   > **ON-PREM CONNECTIONS**
   > 
   > If using an on-prem connection, you must obtain a client ID by registering your Microsoft Dynamics 365 app with the Active Directory Federation Service. [Learn more](https://technet.microsoft.com/itpro/powershell/windows/adfs/add-adfsclient).
   
6. Select **Authorization code grant** as the **Authentication type**.
   
7. Enter your Microsoft Dynamics 365 environment’s full domain, such as `abc.crm.dynamics.com`, in the **Subdomain** field.
   
8. Use the **Account type** drop-down menu to specify whether the account you're connecting to is hosted in the cloud or on-prem.
   
9. Fill in the **AD domain name** field. This field is required if you select **On-premise** as the **Account type**. For example, if your AD server is `https://abc.adfs.dynamics.com/adfs`, the AD domain name is `abc.adfs.dynamics.com`.
   
10. Enter your [client ID](#auth-register) in the **Client ID** field.
    
11. Enter your [client secret](#auth-register) in the **Client secret** field.
    
12. _Optional_. Use the **Version** drop-down menu to specify the API version you plan to use in your connection. Options include:
    
    - Version 8
    - Version 9
13. _Optional_. Expand the **Advanced settings** section to configure the **Resource URI** for which connection should be authorized. If left empty, all resources in the subdomain will be authorized. For example, `https://abc.crm.dynamics.com/api/data/v9.0/`.
    
14. _Optional_. Select a custom OAuth profile to use for the connection from the **Custom OAuth profile** drop-down menu.
    
15. Click **Sign in with Microsoft**.
    

### Client credentials authentication

This authentication method requires the following values:

- Tenant ID
- Client ID
- Client secret

#### Register the Workato app in the Azure Portal

Complete the following steps to register the Workato app and assign it permissions for client credentials-based connections.

1. Register the Workato app in the Azure Portal
   
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
      
   
2. Assign permissions to your app
   
   1. In the navigation sidebar, select **Manage > API permissions**.
      
   2. Click **\+ Add a permission** and select **Dynamics CRM**.
      
      ![Select Dynamics CRM](/assets/dynamics-crm.DFHMudAF.png)_Select Dynamics CRM_
      
   3. Select **Delegated permissions**, then select the `user_impersonation` checkbox.
      
      ![Select permissions](/assets/app-permissions-dynamics.TGgAEhVP.png)_Select permissions_
      
   4. Click **Add permissions**.
      
   
   **Note**: Admin consent is required for specific permissions. Refer to the [Granting admin consent](/en/connectors/dynamics-crm#admin-consent) section to learn more.
   
   ![Admin consent screen](/assets/dynamics-admin-consent.D-ilQt9x.png)_Admin consent screen_
   
3. Generate a client secret
   
   Complete the following steps to generate a client secret:
   
   1. Go to **Manage > Certificates & Secrets > Client secrets**.
      
   2. Click **\+ New client secret**.
      
   3. Provide a **Description** for the client secret and specify an **Expires** date.
      
   4. Click **Add**.
      
   5. Copy and save the client secret **Value**—not the **Secret ID**—for use in Workato.
      
      ![Copy and save the client secret value](/assets/sharepoint-troubleshoot.DPBGyl4B.png)_Copy and save the client secret value_
      
   
4. Obtain the Application (client) ID and Directory (tenant) ID from the Azure Portal
   
   Complete the following steps to obtain the Directory (tenant) ID from the Azure portal:
   
   1. Go to the **Overview > Essentials** section.
      
      ![App details](/assets/app-details.Qi8HIQ2x.png)_App details_
      
   2. Copy and save the `Directory (tenant) ID` for use in Workato.
      
   
5. Create an application user
   
   1. Sign in to the [Power Platform admin center](https://admin.powerplatform.microsoft.com/).
      
   2. Select **Manage** in the navigation pane.
      
   3. In the **Manage** pane, select **Environments**. Then, select an environment from the table.
      
      ![Select an environment](/assets/power-platform-admin-center.CdyLGghH.png)_Select an environment_
      
   4. Select **Settings**.
      
   5. Select **Users + permissions**, and then select **Application users**.
      
   6. Select **\+ New app user** to open the **Create a new app user** page.
      
   7. Select **\+ Add an app** to choose the registered Microsoft Entra application that was created for the selected user, and then select **Add**.
      
   8. Select the **Business Unit** associated with the environment (subdomain) you plan to connect to in Workato.
      
      The business unit you choose determines which environment your application user can access. For example, if your environment URL is `https://abc.crm.dynamics.com`, select the business unit associated with the `abc` environment.
      
   9. Click the pencil icon next to **Security roles** to choose security roles to add to the new application user. You must select a role with at least the `prvReadEntity` privilege, such as the **Basic User** role.
      
   10. Click **Save**, then click **Create**.
       
   

Return to Workato to finish setting up your connection.

#### Complete setup in Workato

Complete the following steps to establish a Microsoft Dynamics 365 connection using client credentials authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Microsoft Dynamics 365` as your connection on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Connect to Microsoft Dynamics 365](/assets/client-credentials.Dd9wiWyv.png)_Connect to Microsoft Dynamics 365_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** to specify a cloud connection or select an on-prem group for the connection.
   
   > **ON-PREM CONNECTIONS**
   > 
   > If using an on-prem connection, you must obtain a client ID by registering your Microsoft Dynamics 365 app with the Active Directory Federation Service. [Learn more](https://technet.microsoft.com/itpro/powershell/windows/adfs/add-adfsclient).
   
6. Select **Client credentials** as the **Authentication type**.
   
7. Enter your Microsoft Dynamics 365 environment’s full domain, such as `abc.crm.dynamics.com`, in the **Subdomain** field.
   
8. Use the **Account type** drop-down menu to specify whether the account you're connecting to is hosted in the cloud or on-prem.
   
9. Fill in the **AD domain name** field. This field is required if you select **On-premise** as the **Account type**. For example, if your AD server is `https://abc.adfs.dynamics.com/adfs`, the AD domain name is `abc.adfs.dynamics.com`.
   
10. Enter your [client ID](#client-credentials-register) in the **Client ID** field.
    
11. Enter your [client secret](#client-credentials-register) in the **Client secret** field.
    
12. Enter your [tenant ID](#client-credentials-register) in the **Tenant ID** field.
    
13. _Optional_. Use the **Version** drop-down menu to specify the API version you plan to use in your connection. Options include:
    
    - Version 8
    - Version 9
14. _Optional_. Expand the **Advanced settings** section to configure the **Resource URI** for which connection should be authorized. If left empty, all resources in the subdomain will be authorized. For example, `https://abc.crm.dynamics.com/api/data/v9.0/`.
    
15. _Optional_. Select a custom OAuth profile to use for the connection from the **Custom OAuth profile** drop-down menu.
    
16. Click **Sign in with Microsoft**.
    

### Resource owner password credentials grant authentication

This authentication method requires the following values:

- Client ID
- Client secret
- Username
- Password
- Tenant ID

#### Register the Workato app in the Azure Portal

Complete the following steps to register the Workato app and assign it permissions for resource owner password credentials grant connections.

1. Register the Workato app in the Azure Portal
   
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
      
   
2. Assign permissions to your app
   
   1. In the navigation sidebar, select **Manage > API permissions**.
      
   2. Click **\+ Add a permission** and select **Dynamics CRM**.
      
      ![Select Dynamics CRM](/assets/dynamics-crm.DFHMudAF.png)_Select Dynamics CRM_
      
   3. Select **Delegated permissions**, then select the `user_impersonation` checkbox.
      
      ![Select permissions](/assets/app-permissions-dynamics.TGgAEhVP.png)_Select permissions_
      
   4. Click **Add permissions**.
      
   
   **Note**: Admin consent is required for specific permissions. Refer to the [Granting admin consent](/en/connectors/dynamics-crm#admin-consent) section to learn more.
   
   ![Admin consent screen](/assets/dynamics-admin-consent.D-ilQt9x.png)_Admin consent screen_
   
3. Generate a client secret
   
   Complete the following steps to generate a client secret:
   
   1. Go to **Manage > Certificates & Secrets > Client secrets**.
      
   2. Click **\+ New client secret**.
      
   3. Provide a **Description** for the client secret and specify an **Expires** date.
      
   4. Click **Add**.
      
   5. Copy and save the client secret **Value**—not the **Secret ID**—for use in Workato.
      
      ![Copy and save the client secret value](/assets/sharepoint-troubleshoot.DPBGyl4B.png)_Copy and save the client secret value_
      
   
4. Obtain the Application (client) ID and Directory (tenant) ID from the Azure Portal
   
   Complete the following steps to obtain the Directory (tenant) ID from the Azure portal:
   
   1. Go to the **Overview > Essentials** section.
      
      ![App details](/assets/app-details.Qi8HIQ2x.png)_App details_
      
   2. Copy and save the `Directory (tenant) ID` for use in Workato.
      
   
5. Create an application user
   
   1. Sign in to the [Power Platform admin center](https://admin.powerplatform.microsoft.com/).
      
   2. Select **Manage** in the navigation pane.
      
   3. In the **Manage** pane, select **Environments**. Then, select an environment from the table.
      
      ![Select an environment](/assets/power-platform-admin-center.CdyLGghH.png)_Select an environment_
      
   4. Select **Settings**.
      
   5. Select **Users + permissions**, and then select **Application users**.
      
   6. Select **\+ New app user** to open the **Create a new app user** page.
      
   7. Select **\+ Add an app** to choose the registered Microsoft Entra application that was created for the selected user, and then select **Add**.
      
   8. Select the **Business Unit** associated with the environment (subdomain) you plan to connect to in Workato.
      
      The business unit you choose determines which environment your application user can access. For example, if your environment URL is `https://abc.crm.dynamics.com`, select the business unit associated with the `abc` environment.
      
   9. Click the pencil icon next to **Security roles** to choose security roles to add to the new application user. You must select a role with at least the `prvReadEntity` privilege, such as the **Basic User** role.
      
   10. Click **Save**, then click **Create**.
       
   

Return to Workato to finish setting up your connection.

#### Complete setup in Workato

Complete the following steps to establish a Microsoft Dynamics 365 connection using resource owner password credentials grant authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `Microsoft Dynamics 365` as your connection on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Connect to Microsoft Dynamics 365](/assets/resource-owner-password-creds.BrlgU8eF.png)_Connect to Microsoft Dynamics 365_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection type** to specify a cloud connection or select an on-prem group for the connection.
   
   > **ON-PREM CONNECTIONS**
   > 
   > If using an on-prem connection, you must obtain a client ID by registering your Microsoft Dynamics 365 app with the Active Directory Federation Service. [Learn more](https://technet.microsoft.com/itpro/powershell/windows/adfs/add-adfsclient).
   
6. Select **Resource owner password credentials grant** as the **Authentication type**.
   
7. Enter your Microsoft Dynamics 365 environment’s full domain, such as `abc.crm.dynamics.com`, in the **Subdomain** field.
   
8. Use the **Account type** drop-down menu to specify whether the account you're connecting to is hosted in the cloud or on-prem.
   
9. Fill in the **AD domain name** field. This field is required if you select **On-premise** as the **Account type**. For example, if your AD server is `https://abc.adfs.dynamics.com/adfs`, the AD domain name is `abc.adfs.dynamics.com`.
   
10. Enter your [client ID](#resource-owner-password-credentials-register) in the **Client ID** field.
    
11. Enter your [client secret](#resource-owner-password-credentials-register) in the **Client secret** field.
    
12. Enter the username of the user who has access to Microsoft Dynamics 365 in the **Username** field. Ensure that multi-factor authentication isn't enabled for that user.
    
13. Provide password of the user who has access to Microsoft Dynamics 365 in the **Password** field.
    
14. Enter your [tenant ID](#resource-owner-password-credentials-register) in the **Tenant ID** field.
    
15. _Optional_. Use the **Version** drop-down menu to specify the API version you plan to use in your connection. Options include:
    
    - Version 8
    - Version 9
16. _Optional_. Expand the **Advanced settings** section to configure the **Resource URI** for which connection should be authorized. If left empty, all resources in the subdomain will be authorized. For example, `https://abc.crm.dynamics.com/api/data/v9.0/`.
    
17. _Optional_. Select a custom OAuth profile to use for the connection from the **Custom OAuth profile** drop-down menu.
    
18. Click **Sign in with Microsoft**.
    

## Connect Microsoft Entra ID to the Microsoft Dynamics 365 connector

To connect to the Microsoft Dynamics 365 connector using a Microsoft Entra ID account, ensure that all the consent requests are granted by admins.

Complete the following steps to grant admin consent using an admin account:

1. Sign in to your Azure portal and navigate to **Enterprise Applications > Activity > Admin consent requests**.
   
2. Approve the necessary consent requests.
   

## Extend the refresh token expiration time

When you connect to a Microsoft Dynamics 365 app, Workato uses an access token to read and write to your Dynamics instance. This access token is valid until it expires. Workato receives an accompanying refresh token with the access token. When the access token expires, Workato uses the refresh token to request a new one. If the refresh token has also expired or been revoked, the connection becomes invalid and must be re-established.

To ensure your recipes run continuously without requiring intervention, extend your refresh token expiration time. You can apply and scope your token to an OAuth application instead of applying it to the entire organization.

Learn more about token lifetimes in the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-configurable-token-lifetimes).

---
