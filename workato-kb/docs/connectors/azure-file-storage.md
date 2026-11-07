<!-- source: https://docs.workato.com/en/connectors/azure-file-storage | lastmod: 2026-06-29 -->
> The Azure File Storage connector lets you automate file management on cloud file shares: get file contents and upsert or delete files.

# Azure File Storage

[Azure File Storage](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction) is a fully managed cloud storage offered by Microsoft Azure for managing structured data and shared access.

## Prerequisites

Ensure you have completed the following tasks before you connect to Azure File Storage in Workato:

- [Create a storage account](#creating-storage-account)
- [Create a file share](#creating-file-share)
- [Create a Shared Access Signature (SAS) token](#creating-sas-token)

### Create a storage account

Complete the following steps to create a storage account in Azure:

1. Sign in to the [Azure portal](https://portal.azure.com).
   
2. Go to **Storage accounts** and click **Create**.
   
3. Select the appropriate **Subscription** and **Resource group** from the drop-down menu.
   
4. Enter a **Storage account name**.
   
5. Review the **Region**, **Performance**, and **Redundancy** values. Verify these settings and make changes if necessary.
   
6. Click **Review + Create**.
   
7. Click **Create**.
   

> **ADVANCED SETTINGS**
> 
> You can modify the advanced data protection, networking, and encryption settings.

### Create a file share

Complete the following steps to create a file share in your storage account.

1. Open the storage account you created.
   
2. Go to **Data storage > File shares**.
   
3. Click **\+ File share**.
   
4. Enter a **Name** for the file share.
   
5. Review other settings and make changes if necessary.
   
6. Click **Review + Create**.
   
7. Click **Create**.
   

### Create a shared access secret token

Complete the following steps to generate a shared access secret (SAS) token:

1. Go to **Storage browser > File shares** in your storage account.
   
2. Right-click your file share and select **Generate SAS**.
   
3. Select a **Signing key** and **Stored access policy** from the drop-down menu.
   
4. Go to the **Permissions** field and select the **Read**, **Write**, **List**, **Create**, and **Delete** permissions.
   
5. Set the **Start time** and **Expiry time** for the token.
   
6. Go to the **Allowed protocols** section and select **HTTPS only**.
   
7. Click **Create SAS token and URL**.
   
8. Copy the **SAS token** and store it securely.
   

## Connect to Azure File Storage

Complete the following steps to connect Workato to Azure File Storage:

1. Sign in to your Workato account and go to the project where you plan to add your Azure File Storage connection.
   
2. Click **Create > Connection** or press C twice.
   
3. Search for and select **Azure File Storage** as your connection on the **New Connection** page.
   
4. Provide a unique name for your connection in the **Connection name** field.
   
   ![Azure File Storage Connection](/assets/azure-file-storage-connection.iylmhiVQ.png)_Azure File Storage Connection_
   
5. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
6. Enter the **Storage account name**, **File share name**, and **SAS token**.
   
7. Click **Connect**.

---
