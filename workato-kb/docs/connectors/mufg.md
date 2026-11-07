<!-- source: https://docs.workato.com/en/connectors/mufg | lastmod: 2026-04-30 -->
> The MUFG connector enables you to automate banking operations including account transaction inquiries, incoming transfer tracking, and money transfer requests through the MUFG corporate banking API.

# MUFG

[Mitsubishi UFJ Financial Group (MUFG)](https://www.bk.mufg.jp) is one of Japan's largest financial institutions, providing comprehensive banking and financial services.

The MUFG connector enables you to automate banking operations including account transaction inquiries, incoming transfer tracking, and money transfer requests through the MUFG corporate banking API.

## Prerequisites

You must have the following to establish an MUFG connection in Workato:

- An active MUFG corporate banking account with API access enabled.
- A registered application in the MUFG Developer Portal.
- A client ID. This can be either your application key or secret key.

### Register your application

Complete the following steps to register your application in the MUFG Developer Portal:

1. Sign in to the [MUFG Developer Portal](https://developer.portal.bk.mufg.jp/btmu/openapitrial/user/login).
   
2. Click **Apps**, then click **Create new app**.
   
3. Enter the name of your application in the **Title** field. Maximum is 255 characters.
   
   ![Create a new application](/assets/create-app.S3u8CIjS.png)_Create a new application_
   
4. Optional. Enter a description of the application in the **Description** field. Maximum is 65535 characters.
   
5. Enter `https://www.workato.com/oauth/callback` in the **Application OAuth Redirect URL(s)** field.
   
6. Click **Save** to register your application and obtain your application key and secret key.
   
7. Store the application key or secret key securely. You can use either value as your client ID when connecting to MUFG in Workato.
   
   ![Copy the application key or secret key](/assets/api-key-and-secret.BQIrQPDP.png)_Copy the application key or secret key_
   

## How to connect to MUFG

Complete the following steps to establish an MUFG connection:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `MUFG` as your connection on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Connect to MUFG](/assets/connect.BTpGu3ZX.png)_Connect to MUFG_
   
4. Use the **Location** drop-down menu to select the project or folder where you plan to store the connection.
   
5. Enter your application key or secret key from the MUFG Developer Portal in the **Client ID** field.
   
6. Click **Connect**.

---
