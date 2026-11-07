<!-- source: https://docs.workato.com/en/connectors/pipedrive | lastmod: 2026-10-26 -->
> The Pipedrive connector lets you automate sales CRM workflows: create, update, search, and delete records and trigger recipes on new or updated records.

# Pipedrive

[Pipedrive](https://www.pipedrive.com/) is sales CRM and pipeline management software that helps small sales teams manage intricate or lengthy sales processes. It's built to be simple and easy to use, yet powerful.

> **CONNECTOR UPGRADE TO API V2**
> 
> Action required by July 31, 2026. Pipedrive is sunsetting a significant portion of its API v1 endpoints that Workato's Pipedrive connector currently relies on. Recipes using deprecated Pipedrive triggers, actions, or affected custom actions will stop functioning after this date. Refer to [Connector upgrade to API v2](/en/connectors/pipedrive/connector-upgrade-to-api-v2) for more information.

## Connection setup

The Pipedrive connector uses API token authentication.

### Pipedrive setup for API token authentication

Complete the following steps to retrieve credentials in Pipedrive:

1. Click your profile icon on your Pipedrive dashboard, then click **Personal preferences**.
   
2. Select the **API** tab.
   
3. Copy and save **Your personal API token** for use in Workato.
   

### Connect to Pipedrive with API token authentication

Complete the following steps to connect to Pipedrive in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for `Pipedrive` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Pipedrive connection](/assets/pipedrive-connection-setup.CKOYaeNm.png)_Pipedrive connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the **API token**. Refer to [Retrieve the API token](#pipedrive-setup) for more information.
   
6. Click **Connect**.

---
