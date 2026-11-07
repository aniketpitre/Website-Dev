<!-- source: https://docs.workato.com/en/mcp/prebuilt-mcps/outlook-email-mcp-server | lastmod: 2026-07-10 -->
> Use the Outlook Email MCP server to let LLMs read, draft, send, and organize Microsoft Outlook email and manage attachments by chat.

# Outlook Email MCP server

The Outlook Email MCP server enables LLMs to read, organize, draft, and send email through Microsoft Outlook (Exchange Online) through natural conversation. It provides tools to find and review conversations, summarize email content, draft and send messages, organize your inbox with folders and categories, and manage attachments without requiring direct interaction with the Outlook Email interface.

## Uses

Use the Outlook Email MCP server to perform the following actions:

- Search for conversations with specific people, customers, or groups
- Find ongoing or historical discussions about topics or projects
- Read and review complete email threads and individual messages
- Compose, draft, and send new emails or replies
- Manage attachments including viewing and retrieving files
- Organize inbox with folders, categories, and flags
- Mark messages as read or unread for inbox management
- Move messages to specific folders for organization
- List and manage email drafts
- Add or remove attachments from drafts

### Example prompts

Use the following example prompts to invoke Outlook Email MCP server tools:

- `Find all email conversations with Acme Corp from the last month.`
- `Show me the conversation about the Q4 product launch.`
- `Draft a follow-up email to Mei about the meeting yesterday.`
- `What attachments were included in the contract email?`
- `Send the draft email I created earlier.`
- `Move all emails from this project to the Archive folder.`
- `Mark all unread messages from this week as read.`
- `Star the email from Josh about the budget approval.`

## Outlook Email MCP server tools

The Outlook Email MCP server provides the following tools:

| Tool | Description |
| --- | --- |
| [search\_conversations](#search-conversations-tool) | Searches for email conversations matching criteria you specify and returns conversation identifiers with summary metadata. |
| [search\_messages](#search-messages-tool) | Searches for individual email messages matching criteria you specify and returns message identifiers with summary metadata. |
| [list\_folders](#list-folders-tool) | Retrieves the list of mail folders available in the authenticated user's mailbox. |
| [get\_conversation](#get-conversation-tool) | Retrieves all messages in a conversation identified by `conversationId`, ordered chronologically. |
| [get\_message](#get-message-tool) | Retrieves the complete contents of a single email message. |
| [list\_attachments](#list-attachments-tool) | Retrieves the list of attachments associated with a specific email message. |
| [get\_attachment](#get-attachment-tool) | Retrieves the raw payload of a specific file attachment from an email message. |
| [create\_draft](#create-draft-tool) | Creates a new email draft in the user's Drafts folder. |
| [list\_drafts](#list-drafts-tool) | Retrieves a list of email drafts with summary metadata. |
| [get\_draft](#get-draft-tool) | Retrieves the complete contents of an existing email draft. |
| [update\_draft](#update-draft-tool) | Updates the body, subject, or recipients of an existing email draft. |
| [send\_draft](#send-draft-tool) | Sends an existing email draft on behalf of the authenticated user. |
| [add\_attachments](#add-attachments-tool) | Adds one or more file or OneDrive reference attachments to an existing email draft. |
| [remove\_attachments](#remove-attachments-tool) | Removes one or more attachments from an existing email draft. |
| [mark\_message\_read\_state](#mark-message-read-state-tool) | Marks one or more email messages as read or unread. |
| [move\_to\_folder](#move-to-folder-tool) | Moves one or more email messages to a mail folder you specify. |
| [update\_categories](#update-categories-tool) | Adds or removes categories from email messages. |
| [update\_star\_state](#update-star-state-tool) | Sets or clears the star (follow-up flag) on one or more email messages. |

## Install the Outlook Email MCP server

Complete the following steps to install a prebuilt MCP server to your project:

1. Sign in to your Workato account.
   
2. Go to **AI Hub > Enterprise MCP > Custom servers**.
   
3. Click **\+ Create MCP server**.
   
4. Go to the **Start with pre-built MCP Servers using your connected apps** section and select the prebuilt MCP server you plan to use.
   
5. Click **Use this server**.
   
6. Provide a name for your MCP server in the **Server name** field.
   
7. Use the **Location** drop-down menu to select the project for the MCP server.
   
8. Go to the **Connections** section and connect to your app account.
   
9. Select the connection type you plan to use for the MCP server template.
   
   - **User's connection**: MCP server tools perform actions based on the identity and permissions of the user who connects to the application. Users authenticate with their own credentials to execute the skill.
   - **Your connection**: This option uses the connection established by the recipe builder and follows the same principles as normal app connections.
   
   ![Select your connection type](/assets/connection-type.Cor-6PJN.png)_Select your connection type_
   
   > **VERIFIED USER ACCESS AUTHENTICATION REQUIREMENTS**
   > 
   > Only app connections that use OAuth 2.0 authorization code grant are available for user's connection. Refer to [Verified user access](/en/mcp/verified-user-access) for more information.
   
10. Complete the app-specific connection setup steps in the following section.
    

## Outlook Email connection setup

View Outlook Email connection setup steps

The Outlook connector supports the following authentication types:

- [Authorization code grant authentication (OAuth 2.0)](#authentication-auth-code)
- [Client credentials-based authentication (OAuth 2.0)](#authentication-client-credentials): _Only available for tenant-specific connections_

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

### Authorization code grant authentication (OAuth 2.0)

View authorization code grant authentication steps

This authentication method requires the following value for tenant-specific account types:

- Tenant ID/Domain

#### Minimum and default scopes

View minimum and default scopes

The connector requests the following scopes for authorization code grant connections by default. These scopes are necessary to use all of the connector's triggers and actions. Additionally, you must assign these permissions to the Workato app as **Delegated** permissions in the Azure portal.

- `Mail.Send`
- `Mail.ReadWrite`
- `Mail.ReadWrite.Shared`
- `Calendars.ReadWrite`
- `Calendars.ReadWrite.Shared`
- `User.Read`
- `offline_access`

The following minimum scopes are required to establish a connection to using authorization code grant authentication:

- `User.Read`
- `offline_access`

#### Outlook setup for authorization code grant authentication

Complete the following steps to set up Outlook for authorization code grant authentication:

- [Register the Workato App in Azure portal](#auth-register)
- [Assign permissions to your app](#assign-permissions)
- [Obtain the Directory (tenant) ID from the Azure portal](#obtain-directory-id)

#### Register the Workato app in the Azure portal

View register the Workato app in the Azure portal steps

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
   

##### Assign permissions to your app

View assign permissions to your app steps

Complete the following steps to assign permissions to your app:

1. Go to your newly registered app and select **Manage > API permissions**.
   
2. Click **\+ Add a permission** and select **Microsoft Graph**.
   
3. Add the required permissions as outlined in [Minimum and default scopes](/en/connectors/outlook/outlook#authorization-code-grant-scopes). Depending on your connection type, you must assign **Application** or **Delegated** permissions.
   
   ![Add permissions](/assets/app-permissions.Cbe76A6a.png)_Add permissions_
   
4. Click **Add permissions**.
   
   Admin consent is required for specific permissions. Refer to [Connect Microsoft Entra ID to the Outlook connector](/en/connectors/outlook/outlook#admin-consent) to learn more.
   

##### Obtain the Directory (tenant) ID from the Azure portal

View obtain the Directory (tenant) ID from the Azure portal steps

This step is required if you plan to use a tenant-specific account. You can skip this step if you plan to use a common, consumer, or organization account type for your connection.

Complete the following steps to obtain the Directory (tenant) ID from the Azure portal:

1. Go to the **Overview > Essentials** section.
   
   ![App details](/assets/app-details.Qi8HIQ2x.png)_App details_
   
2. Copy and save the `Directory (tenant) ID` for use in Workato.
   

#### Connect to Outlook with authorization code grant authentication

View connect to Outlook with authorization code grant authentication steps

Complete the following steps to set up an authorization code grant connection to Outlook in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for `Outlook` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Connection account type** drop-down menu to select the type of account you plan to use. The available choices are **Common**, **Tenant-specific**, **Consumer**, and **Organization**.
   
   **Common**
   
   - **Common**: This option allows you to sign in using enterprise and multi-tenant accounts that are not restricted to a specific organization (tenant).
   
   ![Common connection](/assets/connect-common.n5OKFNtM.png)_Common connections_
   
   **Tenant specific**
   
   - **Tenant specific**: This option is specifically designed for users who belong to a particular organization (tenant).
   
   ![Provide the tenant ID/domain](/assets/connect-tenant.Te-J1c-V.png)_Tenant specific connections_
   
   Provide the `tenant ID` of the Microsoft Entra ID tenant (a GUID) or its `tenant domain` in the **Tenant ID/Domain** field. This ensures that you access resources specifically configured for that tenant. Refer to [Register the Workato app in the Azure portal](#auth-register) for more information.
   
   **Consumer**
   
   - **Consumer**: This option supports personal Microsoft accounts.
   
   ![Consumer connection](/assets/connect-consumer.DM8X7YiA.png)_Consumer connections_
   
   **Organization**
   
   - **Organization**: This option supports work or school accounts.
   
   ![Organization connection](/assets/connect-organization.BB6uVVjE.png)_Organization connections_
   
6. Use the **Authentication type** drop-down menu to select **Authorization code grant**.
   
7. Optional. The connector requests a set of scopes necessary for all triggers and actions to function properly by default. Go to the **Advanced settings** section to manually select the permissions instead. The minimum permissions required to establish a connection are `User.Read` and `offline_access`. Workato requests these permissions regardless of the permissions you select. Refer to [Minimum and default scopes](#authorization-code-grant-scopes) for more information.
   
8. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection. Refer to [Outlook custom OAuth](/en/connectors/outlook/custom-oauth) for more information.
   
9. Click **Sign in with Microsoft**.
   

### Client credentials-based authentication (OAuth 2.0)

View client credentials-based authentication steps

This method requires the following fields:

- Tenant ID/Domain
- User ID
- Client ID
- Client Secret

> **COMPATIBLE AUTHENTICATION**
> 
> Client credentials-based authentication is only compatible with tenant-specific connections.

#### Minimum and default scopes

View minimum and default scopes

We recommend the following scopes for client credentials connections. These scopes are necessary to use all of this connector's triggers and actions. Additionally, you must assign these permissions to the Workato app as **Application** permissions in the Azure portal.

- `Calendars.Read`
- `Calendars.ReadWrite`
- `Contacts.Read`
- `Contacts.ReadWrite`
- `Mail.Read`
- `Mail.ReadWrite`
- `Mail.Send`

The following minimum scopes are required to establish a connection to with client credentials-based authentication:

- `Mail.Read`

#### Outlook setup for client credentials-based authentication

Complete the following steps to set up Outlook for client credentials-based authentication:

- [Register the Workato app in the Azure portal](#client-credentials-register)
- [Assign permissions to your app](#assign-permissions-client-credentials)
- [Generate a client secret](#generate-client-secret)
- [Obtain the Application (client) ID, Object ID, and Directory (tenant) ID from the Azure portal](#obtain-ids)
- [Obtain the User ID from the Azure portal](#obtain-user-id)

##### Register the Workato app in the Azure portal

View Register the Workato app in the Azure portal steps

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
   

##### Assign permissions to your app

View assign permissions to your app steps

Complete the following steps to assign permissions to your app:

1. Go to your newly registered app and select **Manage > API permissions**.
   
2. Click **\+ Add a permission** and select **Microsoft Graph**.
   
3. Add the required permissions as outlined in [Minimum and default scopes](/en/connectors/outlook/outlook#authorization-code-grant-scopes). Depending on your connection type, you must assign **Application** or **Delegated** permissions.
   
   ![Add permissions](/assets/app-permissions.Cbe76A6a.png)_Add permissions_
   
4. Click **Add permissions**.
   
   Admin consent is required for specific permissions. Refer to [Connect Microsoft Entra ID to the Outlook connector](/en/connectors/outlook/outlook#admin-consent) to learn more.
   

##### Generate a client secret

View generate a client secret steps

Complete the following steps to generate a client secret:

1. Go to **Manage > Certificates & Secrets > Client secrets**.
   
2. Click **\+ New client secret**.
   
3. Provide a **Description** for the client secret and specify an **Expires** date.
   
4. Click **Add**.
   
5. Copy and save the client secret **Value**—not the **Secret ID**—for use in Workato.
   
   ![Copy and save the client secret value](/assets/sharepoint-troubleshoot.DPBGyl4B.png)_Copy and save the client secret value_
   

##### Obtain the Application (client) ID, Object ID, and Directory (tenant) ID from the Azure portal

View obtain the Application (client) ID, Object ID, and Directory (tenant) ID from the Azure portal steps

Complete the following steps to obtain the Application ID, Object ID, and Directory (tenant) ID from the Azure portal:

1. Go to the **Overview > Essentials** section.
   
   ![App details](/assets/app-details.Qi8HIQ2x.png)_App details_
   
2. Copy and save the **Application (client) ID**, **Object ID**, and **Directory (tenant) ID** for use in Workato.
   

##### Obtain the User ID from the Azure portal

View obtain the User ID from the Azure portal steps

Complete the following steps to obtain the User ID from the Azure portal:

1. Go to **Home > Users** to obtain the `User ID`.
   
   ![Users](/assets/users.CuDgSGeL.png)_Select users_
   
2. Search for and select the default user you plan to use to perform operations. This user doesn't establish the connection but is required for performing certain operations that an app can't perform. It's also required in picklists to pull user data. For example, the folder picklist populates folders belonging to the default user.
   
3. Copy and save the **User principal name**. Use this value as the **User ID** in Workato.
   

#### Connect to Outlook with client credentials-based authentication

View connect to Outlook with client credential-based authentication steps

Complete the following steps to set up a client credentials-based connection to Outlook in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for `Outlook` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Client credentials connection](/assets/client-credentials-connection.BNf4ndnr.png)_Client credentials connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Select **Tenant specific** as the **Connection account type**. This option is specifically designed for users who belong to a particular organization (tenant).
   
6. Provide your **Tenant ID/Domain**. This is the **Directory (tenant) ID** for your app. Refer to [Register an app in Azure](/en/connectors/outlook/outlook#client-credentials-register) for more information.
   
7. Use the **Authentication type** drop-down menu to select **Client credentials**.
   
8. Supply the **User ID**, **Client ID**, and **Client secret** for your app. Refer to [Register an app in Azure](/en/connectors/outlook/outlook#client-credentials-register) for more information.
   
9. Click **Sign in with Microsoft**.
   

## How to use Outlook Email MCP server tools

Refer to the following sections for detailed information on available tools:

### search\_conversations tool

The **search\_conversations** tool searches for email conversations matching criteria you specify and returns conversation identifiers with summary metadata. Your LLM uses this tool to find conversations with specific people, locate ongoing or historical discussions about topics, identify active deal or project-related email threads, or narrow the search space before retrieving full conversation content.

**Try asking**:

- `Find all email conversations with Acme Corp from the last month.`
- `Search for conversations about the API migration project.`
- `Show me email threads with Jade Anderson that mention 'budget approval'.`
- `Find all ongoing discussions about the product launch.`

### search\_messages tool

The **search\_messages** tool searches for individual email messages matching criteria you specify and returns message identifiers with summary metadata. Your LLM uses this tool to find a specific email you sent or received, locate a message with a known subject or phrase, or identify a particular inbound or outbound message.

**Try asking**:

- `Find the email I sent to Josh yesterday about the contract.`
- `Search for messages with 'invoice' in the subject line.`
- `Locate the message from legal@acme.com about terms of service.`
- `Find the email I received from Mei with the meeting notes.`

### list\_folders tool

The **list\_folders** tool retrieves the list of mail folders available in your mailbox. Your LLM uses this tool when you refer to folders by name and available folders are unknown, when validating folder existence before moving messages, or when listing available folders for organization.

**Try asking**:

- `What folders do I have in my Outlook mailbox?`
- `Show me all my email folders.`
- `List the folders I use for project organization.`
- `What archive folders are available?`

### get\_conversation tool

The **get\_conversation** tool retrieves all messages in a conversation identified by `conversationId`, ordered chronologically. Your LLM uses this tool when complete conversation context is required, when you ask to review or summarize an email thread, or when preparing replies, follow-ups, or handoffs.

**Try asking**:

- `Show me the full conversation thread with Acme Corp.`
- `Read the entire email thread about the Q4 planning.`
- `Get the complete discussion from the contract negotiation emails.`
- `Review all messages in the thread with Marco about the budget.`

### get\_message tool

The **get\_message** tool retrieves the complete contents of a single email message. Your LLM uses this tool when a message has been identified through search and complete contents are required, or when message-level precision is needed.

**Try asking**:

- `Read the email from Jade sent on January 15th.`
- `Show me the complete message about the contract terms.`
- `Get the full contents of the meeting invitation from Mei.`
- `Read the message with the project timeline attachment.`

### list\_attachments tool

The **list\_attachments** tool retrieves the list of attachments associated with a specific email message, including OneDrive reference attachments. Your LLM uses this tool when you ask what files were attached to an email, when referencing or including existing attachments in a reply, or when preparing to retrieve an attachment payload.

**Try asking**:

- `What files were attached to the email from legal@acme.com?`
- `List the attachments in Marco's message about the proposal.`
- `Show me what documents were included in the contract email.`
- `What attachments did Josh send in the project update?`

### get\_attachment tool

The **get\_attachment** tool retrieves the raw payload of a specific file attachment from an email message. Your LLM uses this tool to download, forward, or re-attach a file.

**Try asking**:

- `Download the PDF attachment from the contract email.`
- `Get the spreadsheet that Jade attached to her message.`
- `Retrieve the presentation file from Alex's email.`
- `Download the proposal document from the legal team's message.`

### create\_draft tool

The **create\_draft** tool creates a new email draft in your Drafts folder. Your LLM uses this tool to create a draft email when you ask to write an email that may be sent now or later. **Try asking**:

- `Draft an email to Mei about tomorrow's meeting.`
- `Create a reply to Josh's message thanking them for the update.`
- `Write a follow-up email to Acme Corp about the proposal.`
- `Start a new email to the team about the project timeline.`

### list\_drafts tool

The **list\_drafts** tool retrieves a list of email drafts in your Drafts folder with summary metadata. Your LLM uses this tool when you refer to an existing draft but don't provide a draft ID, or when you ask to view, list, or select from your drafts.

**Try asking**:

- `Show me my email drafts.`
- `List all draft emails I've been working on.`
- `What drafts do I have saved?`
- `Display my unsent emails.`

### get\_draft tool

The **get\_draft** tool retrieves the complete contents of an existing email draft. Your LLM uses this tool to review, see, or confirm the current contents of a draft.

**Try asking**:

- `Show me the draft email I created earlier.`
- `Review my draft reply to Alex.`
- `What does my current draft say?`
- `Read the draft I started for the team update.`

### update\_draft tool

The **update\_draft** tool updates the body, subject, or recipients of an existing email draft. Your LLM uses this tool to change, revise, or edit an existing draft.

**Try asking**:

- `Update the draft to include the budget numbers.`
- `Revise the email draft to mention the deadline change.`
- `Edit the draft to add Marco as a CC recipient.`
- `Change the subject line of my draft email.`

### send\_draft tool

The **send\_draft** tool sends an existing email draft on your behalf. Your LLM uses this tool to send the email when a draft has been created or explicitly referenced earlier in the current conversation.

**Try asking**:

- `Send the draft email I just created.`
- `Send my reply to Sarah now.`
- `Go ahead and send that follow-up email.`
- `Send the draft about the project update.`

### add\_attachments tool

The **add\_attachments** tool adds one or more file or OneDrive reference attachments to an existing email draft. Your LLM uses this tool to attach files to an existing draft, or when attachments must be added before sending.

**Try asking**:

- `Add the roadmap.pdf file to my email draft.`
- `Attach the proposal presentation to this draft.`
- `Include the sales team spreadsheet as an attachment.`
- `Add the Q4 report to the draft email.`

### remove\_attachments tool

The **remove\_attachments** tool removes one or more attachments from an existing email draft. Your LLM uses this tool to remove, delete, or replace attachments on an existing draft, or when an attachment must be removed before sending.

**Try asking**:

- `Remove the roadmap.pdf from my email draft.`
- `Delete the proposal presentation attachment from this draft.`
- `Don't include the sales team spreadsheet.`
- `Remove all attachments from the draft email.`

### mark\_message\_read\_state tool

The **mark\_message\_read\_state** tool marks one or more email messages as read or unread. Your LLM uses this tool to mark messages as read or unread, or when to perform inbox triage actions.

**Try asking**:

- `Mark all messages from today as read.`
- `Set the unread email from Alex to read.`
- `Mark the contract email as unread so I don't forget to review it.`
- `Mark all emails in this thread as read.`

### move\_to\_folder tool

The **move\_to\_folder** tool moves one or more email messages to a mail folder you specify. Your LLM uses this tool to move, file, or organize messages into a folder you specify.

**Try asking**:

- `Move all emails from this project to the Archive folder.`
- `File the contract emails in the Legal folder.`
- `Move these messages to my Completed Projects folder.`
- `Organize the Q4 planning emails into the Planning folder.`

### update\_categories tool

The **update\_categories** tool adds or removes categories from email messages. Your LLM uses this tool to tag, categorize, reclassify, or remove categories from messages.

**Try asking**:

- `Add the 'Important' category to this email.`
- `Tag these messages with 'Project Alpha'.`
- `Remove the 'Follow-up' category from this thread.`
- `Categorize the contract emails as 'Legal Review'.`

### update\_star\_state tool

The **update\_star\_state** tool sets or clears the star (follow-up flag) on one or more email messages. Your LLM uses this tool to star, flag, mark for follow-up, unstar, or unflag messages.

**Try asking**:

- `Star the email from Mei about the budget approval.`
- `Flag the message with the contract attachment for follow-up.`
- `Unstar the email from Sarah now that I've reviewed it.`
- `Remove the flag from the completed action items.`

## Getting started

View and manage your MCP server tools in the **Details** tab **Tools** section. Tool management provides the following capabilities:

- [Start tools](/en/mcp/manage-tools#start-tools)
- [Remove tools](/en/mcp/manage-tools#remove-tools)
- [Edit tools](/en/mcp/manage-tools#edit-tools)
- [Add tools](/en/mcp/manage-tools#add-tools)
- [Edit your LLM-facing MCP server description](/en/mcp/prebuilt-mcps#edit-llm-facing-mcp-server-description)

> **TOOLS MUST BE STARTED**
> 
> Your LLM can only access active tools in your MCP server connector.

---
