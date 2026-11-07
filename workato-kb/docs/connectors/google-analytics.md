<!-- source: https://docs.workato.com/en/connectors/google-analytics | lastmod: 2026-06-29 -->
> The Google Analytics connector lets you automate web analytics workflows: pull reports on demand and trigger recipes on new rows of analytics data.

# Google Analytics

[Google Analytics](https://developers.google.com/analytics) is a powerful web analytics platform that provides insights into website and app performance. It helps users track visitor behavior, measure engagement, and optimize digital strategies through data-driven decisions.

## Prerequisites

To establish a connection to Google Analytics, you must complete the following prerequisite steps:

1. [Create a project in Google Cloud Console](#project)
2. [Enable the Google Analytics API](#enable-api)
3. [Create OAuth 2.0 credentials](#oauth-creds)

### Create a project in Google Cloud Console

1. Sign in to your [Google Cloud Console](https://console.cloud.google.com/welcome/new).
   
2. Click the **Select a project** drop-down menu and select **New project**.
   
3. Give the project a name and click **Create**.
   

### Enable the Google Analytics API

Complete the following steps to enable the Google Analytics API:

1. In the **Cloud Console**, go to **API & Services > Library**.
   
2. Search for and enable the following APIs:
   
   - Google Analytics Data API
   - Google Analytics Admin API

### Create OAuth 2.0 credentials

Complete the following steps to create OAuth 2.0 credentials:

1. Go to **API & Services > Credentials**.
   
2. Click **Create Credentials > OAuth Client ID**.
   
3. If prompted, configure the **OAuth consent screen**:
   
   - Choose **External** as the **User type**. Learn more about [user types](https://support.google.com/cloud/answer/15549945?sjid=3043175652946470283-NC&authuser=1).
   - Fill in the required fields, including **App name** and **Support email**.
   - Click **Save and continue**.
4. Select **Web application** as the **Application type**.
   
5. Enter a name for the OAuth client.
   
6. Enter `https://www.workato.com/oauth/callback` in the **Authorized redirect URIs** field.
   
7. Click **Create**.
   
8. Click **Edit OAuth client** (pencil icon) to view the client ID and client secret.
   
9. Copy the **Client ID** and **Client secret** and store these values securely, as they are required to [complete setup in Workato](#connection-setup).
   

## How to connect to Google Analytics

Workato supports OAuth 2.0 authentication to connect to Google Analytics.

Complete the following steps to establish a Google Analytics connection:

1. Click **Create** > **Connection**.
   
2. Search for and select **Google Analytics** as your connection on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![Connect to Google Analytics](/assets/connection.U4rZMUsr.png)_Connect to Google Analytics_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter your [client ID](#oauth-creds) in the **Client ID** field.
   
6. Enter your [client secret](#oauth-creds) in the **Client secret** field.
   
7. Click **Sign in with Google**.

---
