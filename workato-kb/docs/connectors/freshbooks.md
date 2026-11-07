<!-- source: https://docs.workato.com/en/connectors/freshbooks | lastmod: 2026-06-17 -->
> [FreshBooks](https://www.freshbooks.com/) is a cloud-based accounting software platform designed for small businesses and freelancers. It provides tools for invoicing, expense tracking, time tracking, project management, and financial reporting to help businesses manage their finances efficiently.

# FreshBooks

[FreshBooks](https://www.freshbooks.com/) is a cloud-based accounting software platform designed for small businesses and freelancers. It provides tools for invoicing, expense tracking, time tracking, project management, and financial reporting to help businesses manage their finances efficiently.

## Prerequisites

Before using the FreshBooks connector in Workato, ensure you have an active FreshBooks account with proper permissions and have set up OAuth 2.0 authentication.

- [Set up your FreshBooks account](#account-setup)
- [Create an application in the FreshBooks Developer Portal](#app-creation)
- [Configure OAuth 2.0 authentication scopes](#scopes)

### Set up your FreshBooks account

Ensure that you have an active FreshBooks account with administrative privileges. You can sign up at [FreshBooks.com](http://FreshBooks.com) if you don't have an account.

### Create an application in the FreshBooks Developer Portal

Complete the following steps to set up a developer application in FreshBooks and obtain OAuth 2.0 credentials:

1. Sign in to the [FreshBooks Developer Portal](https://my.freshbooks.com/developers) using your FreshBooks account credentials.
   
2. Select **My Apps**, then click **Create New App**.
   
3. Enter the **App Name** and **Redirect URI**. The [universal callback URL](/en/developing-connectors/registering-new-client#universal-callback-url) for Workato is `https://www.workato.com/oauth/callback`.
   
4. Click **Save** to register the app.
   
5. Copy the generated **Client ID** and **Client Secret** for use in your OAuth integration.
   

### Configure OAuth 2.0 authentication scopes

Configure the appropriate scopes for your application based on the data you need to access. Refer to the [FreshBooks API Scopes documentation](https://www.freshbooks.com/api/scopes) for a complete list of available scopes and their permissions.

## How to connect to FreshBooks

Complete the following steps to establish a connection to FreshBooks in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select **FreshBooks** as your connection on the **New connection** page.
   
3. Provide a unique name for your connection in the **Connection name** field. ![FreshBooks connection](/assets/connection.BNIJDtTG.png)_FreshBooks connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the **Client ID** and **Client Secret** for your FreshBooks developer application, which you obtained from the FreshBooks Developer Portal.
   
6. Click **Connect** to establish the connection.

---
