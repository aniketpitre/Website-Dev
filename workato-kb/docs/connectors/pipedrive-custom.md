<!-- source: https://docs.workato.com/en/connectors/pipedrive-custom | lastmod: 2026-09-04 -->
> Use the Pipedrive connector to automate and manage sales processes.

# Pipedrive

[Pipedrive](https://www.pipedrive.com/) is sales CRM and pipeline management software that helps small sales teams manage intricate or lengthy sales processes. It is built to be simple and easy to use, yet powerful.

## Create a Pipedrive app

A Pipedrive app is required to set up a connection in Workato. Complete the following steps to create a Pipedrive app:

1. On your Pipedrive dashboard, click on your profile icon, then on the **Developer hub**.
   
2. Click **Create an app**.
   
3. Select **Private app**.
   
4. Name your app and enter the Workato callback URL: `https://www.workato.com/oauth/callback`
   
5. Click **Save**.
   
6. Toggle all the required **API scopes**.
   
7. Copy the **Client ID** and **Client Secret** and store them securely. These values are required to establish the connection in Workato.
   
8. Click **Save**, then **Change to Live**.
   

## Connection setup

1. Click **Create > Connection** or press C+C.
   
2. Search for and select **Pipedrive** as your connection on the **New Connection** page.
   
3. Provide a unique name for your connection in the **Connection name** field.
   
4. Select the project where you plan to store the connection from the **Location** drop-down menu.
   
5. Enter the **Client ID** and **Client secret** for the Pipedrive app you created in the previous steps.
   
6. Enter the **Company domain** of your Pipedrive instance.
   
7. Click **Connect** to complete the setup.
   

> **PREREQUISITES**
> 
> A Pipedrive app is required to set up a connection in Workato. Refer to the [Create a Pipedrive app](#creating-an-app) section to create an app in Pipedrive.

---
