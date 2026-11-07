<!-- source: https://docs.workato.com/en/connectors/google-workspace-custom | lastmod: 2026-06-29 -->
> The Google Workspace (Custom) connector uses Google batch APIs to automate user and group management, including creation, updates, aliases, and membership.

# Google Workspace (Custom)

[Google Workspace](https://developers.google.com/workspace/guides/get-started) offers tools to integrate with or extend apps like Gmail, Drive, and Chat. This custom connector enables efficient user and group management using [Google's batch APIs](https://developers.google.com/workspace/admin/directory/v1/guides/batch), allowing streamlined operations like user creation, updates, alias handling, and group membership—all optimized with batch processing to reduce API calls and boost performance.

## Prerequisites

To connect to the custom Google Workspace connector, you must complete the following prerequisite steps:

- [Set up your Google Cloud project](#cloud-project)
- Complete steps specific to your authentication method:
  - **OAuth 2.0**: [Create OAuth 2.0 credentials](#oauth-prerequisites)
  - **Service account**: [Set up your service account](#service-account-prerequisites)
- [Assign Super Admin privileges in Google Workspace](#admin-access)

### Set up your Google Cloud project

Complete the following steps to set up your Google Cloud project:

1. Create or select an existing Google Cloud project.
   
2. Enable the **Admin SDK API** and any other required APIs (for example, Gmail, Drive, Chat) in the Google Cloud Console.
   

### Create OAuth 2.0 credentials

Complete the following steps to create OAuth 2.0 credentials:

1. In your Google Cloud project, navigate to the Cloud Console.
   
2. Select **APIs & Services > Credentials**.
   
3. Click **\+ Create credentials** and select **OAuth client ID**.
   
4. Configure the consent screen and authorized redirect URIs.
   

Use this method for user-level access instead of domain-wide admin control.

### Set up your service account

1. Create a service account and enable **Domain-wide delegation**.
   
2. Download the service account JSON key file.
   
3. In the Google Admin Console, authorize the client ID and grant the necessary scopes. Example scopes include:
   
   - `https://www.googleapis.com/auth/cloud-platform`
   - `https://www.googleapis.com/auth/directory.user`
   - `https://www.googleapis.com/auth/admin.directory.user`
   - `https://www.googleapis.com/auth/admin.directory.group`
   - `https://www.googleapis.com/auth/admin.directory.group.member`

### Assign Super Admin privileges in Google Workspace

Super Admin access is required to manage users, groups, scopes, and service account delegation.

Refer to the [Google Workspace Admin Help documentation](https://support.google.com/a/answer/172176?hl=en&co=DASHER._Family%3DDomain-verified) for steps on how to assign these privileges.

## How to connect to Google Workspace (Custom)

The Google Workspace custom connector supports the following authentication methods:

- [OAuth 2.0 (user-delegated access)](#oauth-2-0)
- [Service account (domain-wide delegation)](#service-account)

### OAuth 2.0

Complete the following steps to establish a connection to the Google Workspace custom connector using OAuth 2.0 authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select **Google Workspace (Custom)** as your connection on the **New connection** page.
   
3. Provide a unique name for your connection in the **Connection name** field.
   
   ![OAuth Connection Setup](/assets/oauth.BwlRZCfp.png)_OAuth Connection Setup_
   
4. Select **OAuth 2.0** as the **Authentication type**.
   
5. Enter the **Client ID** and **Client secret** from your Google Cloud project.
   
6. Click **Sign in with Google**.
   
7. Select your Google account and grant the required permissions.
   

### Service account

Complete the following steps to establish a connection to the Google Workspace custom connector using service account authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select **Google Workspace (Custom)** as your connection on the **New connection** page.
   
3. Provide a unique name for your connection in the **Connection name** field.
   
   ![Service Account Connection Setup](/assets/service.n18k7gjG.png)_Service Account Connection Setup_
   
4. Select **Service account** as the **Authentication type**.
   
5. Enter the email address of the service account in the **Issuer** field.
   
6. Enter the private key from your downloaded JSON key in the **Private key** field.
   
7. Enter email address of the user to impersonate in the **Email address** field.
   
8. Click **Sign in with Google**.

---
