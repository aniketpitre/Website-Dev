<!-- source: https://docs.workato.com/en/connectors/oracle-object-storage | lastmod: 2026-06-29 -->
> The Oracle Object Storage connector lets you upload and download objects, including streams, and create, get, search, and delete stored records.

# Oracle Object Storage

[Oracle Object Storage](https://www.oracle.com/cloud/storage/object-storage/) is a cloud-based object storage service that provides a scalable, secure, and cost-effective way to store and access data.

## Prerequisites

Before you can establish an Oracle Object Storage connection in Workato, you must configure authentication and access permissions in Oracle Cloud. Complete the following prerequisite steps:

1. [Create an Oracle Identity Cloud group](#oracle-cloud-identity-group)
2. [Create an Oracle Identity Cloud policy](#oracle-cloud-identity-policy)
3. [Create an API key](#creating-an-api-key)

### Create an Oracle Identity Cloud group

Complete the following steps to create a user group:

1. Sign in to your **Oracle Cloud** and go to **Identity and Security**.
   
2. Go to **Domains**, then select **OracleIdentityCloudService** or any other domain of your choice.
   
3. Go to **User management > Groups** and click **Create group**.
   
4. Enter a name for the group, such as **Oracle Object Storage Group**.
   
5. Select the user to add to this new group. This is the user who will be accessing Oracle Object Storage using Workato.
   
6. Click **Create**.
   

### Create an Oracle Identity Cloud policy

Complete the following steps to create a policy that grants access permissions to Oracle Object Storage:

1. In **Identity and Security**, go to **Policies**.
   
2. Click **Create Policy**.
   
3. Enter a **Name** and **Description** for your policy.
   
4. Under **Policy builder**, select **Show manual editor**.
   
5. Enter the following policy: `Allow group '<DOMAIN>'/'<GROUP>' to manage object-family in tenancy`
   
   For example: `Allow group 'OracleIdentityCloudService'/'Oracle Object Storage Group' to manage object-family in tenancy`
   
6. Click **Create**.
   

### Create an API key

Complete the following steps to generate an API key for authentication:

1. In **Identity and Security**, go to **My profile**.
   
2. Go to **Token and keys**, then click **Add API key**.
   
3. Retrieve your RSA key pair:
   
   - Download the auto-generated key pair (provides private key in PEM format), or
   - Upload your own public key or paste its contents
   
   Store the private key securely.
   
4. Click **Add**.
   
5. Retrieve details for your API key, including the **User OCID**, **Tenant OCID**, **Fingerprint**, and **Region**. Save these details in a safe location.
   

## How to connect to Oracle Object Storage

Complete the following steps to establish an Oracle Object Storage connection in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select **Oracle Object Storage** as your connection on the **New connection** page.
   
3. Provide a unique name for your connection in the **Connection name** field.
   
   ![Connect to Oracle Object Storage](/assets/oracle-object-storage-connection.CoAHg1wL.png)_Connect to Oracle Object Storage_
   
4. Use the **Location** drop-down menu to select the project or folder where you plan to save your connection.
   
5. Fill in the required fields:
   
   - **Region**
   - **Tenancy OCID**
   - **User OCID**
   - **Fingerprint**
   - **Private key** (paste in PEM format)
6. Click **Connect**.

---
