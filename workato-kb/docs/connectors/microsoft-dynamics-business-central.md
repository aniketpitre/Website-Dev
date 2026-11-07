<!-- source: https://docs.workato.com/en/connectors/microsoft-dynamics-business-central | lastmod: 2026-05-21 -->
> The Microsoft Dynamics Business Central connector enables you to manage records, entities, and business data using the Business Central API v2.0.

# Microsoft Dynamics Business Central

[Microsoft Dynamics Business Central](https://dynamics.microsoft.com/en-us/business-central/overview/) is an enterprise resource planning (ERP) software solution used for managing finances, operations, sales, and customer service. It includes business management capabilities such as financial management, supply chain management, and project management.

## Prerequisites

Complete the following steps before establishing a Microsoft Dynamics Business Central connection in Workato:

- [Get your tenant ID](#get-your-tenant-id)
- [Get your environment name](#get-your-environment-name)
- [Register an application in the Azure portal](#register-an-application-in-azure-portal)
- [Get your client ID](#get-your-client-id)
- [Generate a client secret](#generate-a-client-secret): This is required for OAuth2 (Authorization code) authentication and optional for OAuth2 (Client credentials) authentication.

### Get your tenant ID

Complete the following steps to retrieve your tenant ID:

1. Sign in to the [Microsoft Azure portal](https://portal.azure.com/) using an account with administrator permissions.
   
2. Search for and select **Microsoft Entra ID**. Alternatively, you can select it from the menu.
   
3. Go to the **Basic information** section and locate the **Tenant ID**.
   
4. Copy the **Tenant ID**.
   

Alternatively, you can select **Properties** from the Microsoft Entra ID menu. The Tenant ID is listed as the **Directory ID**.

### Get your environment name

Complete the following steps to retrieve your environment name:

1. Sign in to [Microsoft Dynamics Business Central](https://businesscentral.dynamics.com/).
   
2. Go to **Admin Center**. The **Environments** section displays a list of available environments.
   
3. Copy the **Environment name** from the list of available environments.
   

### Register an application in the Azure portal

Complete the following steps to register an application in the Azure portal:

1. Sign in to the [Microsoft Azure portal](https://portal.azure.com/) using an account with administrator permissions.
   
2. Go to **Microsoft Entra ID > App registrations**.
   
3. Click **New registration**.
   
4. Enter a **Name** for your application and select the appropriate **Supported account types**.
   
5. Click **Register**.
   
6. Go to **API permissions** and click **Add a permission**.
   
7. Select **Dynamics 365 Business Central** and add the required permissions, such as `Financials.ReadWrite.All` or `Financials.Read.All`.
   
8. Click **Grant admin consent** to approve the permissions.
   

Refer to the [Register an application with the Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) documentation for more information.

### Get your client ID

Complete the following steps to get your client ID:

1. In the Azure portal, go to **Microsoft Entra ID > App registrations** and select your application.
   
2. Go to the **Overview** page.
   
3. Copy the **Application (client) ID**. This is your Client ID.
   

### Generate a client secret

The client secret is required when using OAuth2 (Authorization code) authentication and optional for OAuth2 (Client credentials) authentication. Complete the following steps to generate a client secret:

1. In the Azure portal, go to **Microsoft Entra ID > App registrations** and select your application.
   
2. Go to **Certificates & secrets**.
   
3. Go to the **Client secrets** section and click **New client secret**.
   
4. Enter a **Description** and select an **Expiration period**, such as 190 days (6 months), 365 days(12 months), or 740 days (24 months).
   
5. Click **Add**.
   
6. Copy and save the client secret **Value** immediately. You can't view it later.
   

## How to connect to Microsoft Dynamics Business Central

Complete the following steps to connect Workato to Microsoft Dynamics Business Central:

1. Select your **Authentication** method. You can choose **OAuth2 (Client credentials)** or **OAuth2 (Authorization code)**.
   
2. Enter your **Tenant** ID. For example, `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
   
3. Enter your **Environment name**.
   
4. Enter your **Client ID** from your Azure application registration.
   
5. Enter your **Client secret** from your Azure application registration. This is required for Authorization code grant and optional for Client credentials authentication.
   
6. Optional. Enter your **Base URI** to use a custom base URI. Leave blank to use the default: `https://api.businesscentral.dynamics.com/v2.0/{environment}/api`.
   
7. Optional. Enter your **Company ID** to use a default Company ID for all actions and triggers that require it. You can override this value using the **Company ID** field in individual actions or triggers.
   
8. Click **Connect** to establish the connection.
   
   ![Business Central connection](/assets/connection.Df6oZgae.png)_Create a Microsoft Dynamics Business Central connection_

---
