<!-- source: https://docs.workato.com/en/mcp/prebuilt-mcps/vendor-onboarding-mcp-server | lastmod: 2026-10-28 -->
> Use the Vendor Onboarding MCP server to connect your LLM to Coupa, DocuSign, and NetSuite with a confirmation-gated workflow that captures vendor intake, collects tax and insurance documents, checks banking and approval status, and creates and activates the vendor master record.

# Vendor Onboarding MCP server

The Vendor Onboarding MCP server enables LLMs to onboard new vendors across Coupa, DocuSign, and NetSuite through natural conversation. It provides tools to capture vendor intake and check for duplicates, send and track tax and insurance documentation through DocuSign, confirm banking submission and approval status in Coupa, and create and activate the vendor master record in Coupa and NetSuite, without requiring direct interaction with the Coupa, DocuSign, and NetSuite interfaces. Onboarding a vendor can span days to weeks while you wait on the vendor and approvers, so the server tracks progress and lets you pick up an in-flight onboarding in any later conversation.

## Uses

Use the Vendor Onboarding MCP server to perform the following actions:

- Check a new vendor's legal name against existing Coupa suppliers before creating a record
- Send tax forms and insurance documentation to a vendor for signature through DocuSign
- Check whether a vendor has completed and returned requested documents
- Import a completed DocuSign envelope's signer-entered data into the vendor's Coupa record
- Check whether a vendor has submitted banking details through Coupa's Supplier Portal
- Submit a vendor for approval through Coupa's configured approval chain
- Create the vendor master record in Coupa and NetSuite
- Activate a vendor for transactions
- List in-flight vendor onboardings and see what each one is waiting on

### Example prompts

Use the following example prompts to invoke Vendor Onboarding MCP server tools:

- `Onboard Acme Corp as a new vendor.`
- `What's the status of the Acme onboarding?`
- `Which vendor onboardings are stuck waiting on the vendor?`
- `Check whether Acme's banking has come in yet.`
- `Send the tax and insurance forms to Acme Corp.`
- `Has Acme signed and returned their documents yet?`
- `Import Acme's signed form data into their Coupa record.`
- `Submit Acme's onboarding for approval.`
- `Create the vendor master record for Acme now that it's approved.`
- `Activate Acme for transactions.`

## Vendor Onboarding MCP server tools

The Vendor Onboarding MCP server provides the following tools:

| Tool | Description |
| --- | --- |
| [initiate\_vendor\_request](#initiate-vendor-request-tool) | Captures new-vendor intake and checks for duplicates against existing Coupa suppliers. |
| [send\_vendor\_onboarding\_documents](#send-vendor-onboarding-documents-tool) | Sends a single composite DocuSign envelope with tax forms and supporting-document requests to the vendor. |
| [check\_vendor\_document\_status](#check-vendor-document-status-tool) | Returns DocuSign envelope status and follows up with form data and document metadata. |
| [import\_vendor\_form\_data](#import-vendor-form-data-tool) | Downloads completed documents and writes validated form data into the Coupa Supplier Information Management (SIM) record. |
| [check\_vendor\_bank\_details](#check-vendor-bank-details-tool) | Checks whether the vendor has submitted banking through Coupa's native SIM flow. |
| [submit\_vendor\_for\_approval](#submit-vendor-for-approval-tool) | Submits the vendor's Easy Form Response(s) for approval into Coupa's configured chain. |
| [create\_vendor\_master\_netsuite](#create-vendor-master-netsuite-tool) | Finalizes the existing Coupa supplier and creates the NetSuite vendor record. |
| [activate\_vendor\_for\_transactions](#activate-vendor-for-transactions-tool) | Activates the vendor in both Coupa and the ERP, making it payment-ready. |
| [list\_pending\_vendor\_onboardings](#list-pending-vendor-onboardings-tool) | Returns a paginated list of in-flight onboardings you initiated. |
| [get\_vendor\_onboarding\_status](#get-vendor-onboarding-status-tool) | Returns the status of a vendor onboarding across every system. |
| [get\_vendor\_write\_policy](#get-vendor-write-policy-tool) | Returns the field mapping, sensitivity flags, and forbidden-field list for writing vendor data. |

## Install the Vendor Onboarding MCP server

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
    

## Vendor Onboarding connection setup

The following connections are required to use the Vendor Onboarding MCP server:

- [Coupa](#coupa-connection)
- [DocuSign](#docusign-connection)
- [NetSuite](#netsuite-rest-connection)

### Role requirements

Each tool's availability depends on the scopes and permissions granted to the relevant connection. A request made without the required permission returns a permission-denied outcome rather than a partial result.

- **[Coupa](#coupa-connection)**: Requires the following permissions at minimum: - Supplier Information (read, write) - Suppliers (read, write) - Easy Form Responses (read, write, approval submission) - Approvals (read) - Attachments (read, write)
- **[DocuSign](#docusign-connection)**: Requires the following: - `impersonation` scope (JWT Grant) or equivalent send-on-behalf-of access (OAuth 2.0) to send envelopes
- **[NetSuite](#netsuite-rest-connection)**: Requires the following: - RESTlets and REST Web Services scopes - A NetSuite role with permission to create and edit Vendor records

#### Coupa connection setup steps

View Coupa connection setup steps

Complete the following steps to configure Coupa for a client credentials connection to Workato:

> **CLIENT CREDENTIALS REQUIRED**
> 
> The Vendor Onboarding MCP server requires an OAuth 2.0 client credentials connection to Coupa. Other authentication methods aren't supported.

1. Sign in to your Coupa instance, for example `https://[your-instance-name].coupacloud.com/oauth2/clients`.
   
2. Click **Create** to create a new OAuth client.
   
3. Use the **Grant type** drop-down menu to select **Authorization Code** or **Client Credentials**. You must select the same option in Workato for the **Authentication type**.
   
4. Provide a name in the **Name** field. For example: `Workato Coupa OAuth connection`.
   
5. Enter the redirect URIs you plan to use in the **Redirect URIs** field. Add the link `https://www.workato.com/oauth/callback` if you plan to use **Authorization code**.
   
6. Select the scopes you plan to provide to Workato. Include all objects and features you plan to automate with the Coupa connector. The scopes you select must match the scopes you configure in Workato. You must include the `core.common.read` and `offline_access` scopes at a minimum to establish a connection.
   
   ![Coupa creating a client](/assets/coupa-create-client.BgDfen2E.png)_Create a new client_
   
7. Click **Save**.
   
8. Copy and store the **Identifier** and the **Secret** for use in Workato.
   
9. Return to your Workato account and go to the project where you plan to add your connection.
   
10. Click **Create > Connection** or press C twice.
    
11. Search for and select `Coupa` as your connection on the **New connection** page.
    
12. Provide a unique name for the connection in the **Connection name** field.
    
13. Use the **Location** drop-down menu to select the project where you plan to store the connection.
    
14. Use the **Authentication** drop-down to select the **Grant type** provided in Coupa.
    
15. Enter the **Client ID** and **Client secret**.
    
16. Enter the Coupa URL for your instance in the **Host** field. For example, enter `acme` if your URL is `http://acme.coupacloud.com`.
    
17. Use the **Scopes** drop-down menu to select the same scopes you configured in Coupa. Include the required scopes `core.common.read` and `offline_access` to connect successfully.
    
18. Click **Connect**.
    

#### DocuSign connection setup steps

View DocuSign connection setup steps

The Coupa, DocuSign, and NetSuite connector supports the following authentication types:

- [JWT Grant](#jwt-token)
- [OAuth 2.0 (Authorization Code Grant)](#oauth-2-0)

> **AUTHENTICATION AND SENDING**
> 
> **JWT Grant** authentication uses the Docusign `impersonation` scope to send documents from the email address of the user you connect with, without requiring that user to sign in. The impersonated user, or their account admin, must grant consent before you can connect.
> 
> **OAuth 2.0** (Authorization Code Grant) sends all documents from the email address of the user who signs in to authorize the connection.

> **ROLES AND PERMISSIONS**
> 
> Users who can sign in to Docusign can connect it to Workato. Users have the same permissions and capabilities to view, manage, and send envelopes on Workato as in Docusign. Refer to the Docusign [Permission Profiles](https://support.docusign.com/en/guides/ndse-admin-guide-permission-sets) documentation for more information.

The Coupa, DocuSign, and NetSuite connector works with the following Docusign plans:

- Personal
- Standard
- Business Pro

##### DocuSign JWT Grant authentication

View JWT Grant authentication steps

Use JWT Grant authentication to connect to Coupa, DocuSign, and NetSuite with a private key for server-to-server authentication. This method sends documents from the email address of the User ID you connect with, using the Docusign user impersonation. That user, or their account admin, must grant consent before you can connect. Refer to [Retrieve your User ID](#retrieve-your-user-id) for more information.

Complete the following to set up JWT Grant authentication:

- [Retrieve your User ID](#retrieve-your-user-id)
- [Create an integration key](#create-an-integration-key)
- [Generate an RSA keypair](#generate-an-rsa-keypair)
- [Add the redirect URI](#add-the-redirect-uri)
- Optional: [Obtain consent for user impersonation](#obtain-consent-for-send-on-behalf-of)

###### Retrieve your User ID

View retrieve your User ID steps

Complete the following steps to retrieve your User ID in Coupa, DocuSign, and NetSuite:

1. Sign in to Coupa, DocuSign, and NetSuite.
   
2. Go to **Admin > Apps and Keys**.
   
3. Copy and save the **User ID** for use in Workato.
   

###### Generate an integration key

View generate an integration key steps

You must create an app to generate an integration key.

Complete the following steps to generate an integration key in Coupa, DocuSign, and NetSuite:

1. Go to the **Apps and Keys** page and click **Add App and Integration Key**.
   
2. Enter a name for your application, such as `Workato Integration`.
   
3. Click **Create App**.
   
4. Copy and save the **Integration Key** (also known as the Client ID) for use in Workato.
   

###### Generate an RSA keypair

View generate an RSA keypair steps

Complete the following steps to generate an RSA keypair in Coupa, DocuSign, and NetSuite:

1. Go to the **Service Integration** section in your newly created app settings.
   
2. Click **Generate RSA** to create a new RSA keypair.
   
3. Copy the **Private Key** and save it in a secure location. This value is required to establish the connection in Workato.
   
   > **SAVE YOUR PRIVATE KEY**
   > 
   > The private key is only displayed once. After you close this dialog, you won't be able to retrieve it again. If you lose it, you must generate a new keypair.
   
4. Click **Close** to save the keypair to your integration.
   

###### Add the redirect URI

View add the redirect URI steps

Complete the following steps to add the redirect URI in Coupa, DocuSign, and NetSuite:

1. Go to the **Additional settings > Redirect URIs** section in your newly created app settings.
   
2. Click **\+ Add URI**.
   
3. Enter `https://www.workato.com/oauth/callback` in the **Redirect URIs** field.
   
4. Click **Save**.
   

###### Obtain consent for user impersonation

JWT Grant authentication sends envelopes from the email address of the user you connect with, using Docusign's user impersonation. Connecting as that user requires consent, which comes in two forms:

- [Admin consent](#obtain-admin-consent) for the JWT app (one-time setup for the organization)
- [Individual user consent](#obtain-individual-user-consent) for the user you connect as

View obtain admin consent steps

Use the Docusign Admin panel to grant consent to your JWT app on behalf of all users within your organization's claimed domains. This authorization grants app access to all domain users, with access limited by the permissions you specify. This is a one-time configuration.

> **PREREQUISITES FOR ADMIN CONSENT**
> 
> - Your organization must have the Docusign Admin feature enabled.
> - Your organization must have at least one claimed domain. Refer to the Docusign [Claim a domain](https://support.docusign.com/s/document-item?bundleId=rrf1583359212854&topicId=gso1583359141256_1.html) documentation.
> - You must have created an [integration key](#create-an-integration-key) for your app.

Complete the following steps to obtain admin consent:

1. Sign in to Coupa, DocuSign, and NetSuite as an organization administrator.
   
2. Open your [Organization](https://apps-d.docusign.com/admin/organization/) home page in Docusign Admin.
   
3. Select **Connected Apps** from the navigation pane.
   
4. Select **Authorize Application** and choose your application from the drop-down menu. This menu lists every integration key by name (for example, `Workato Integration`).
   
5. Enter `signature impersonation` in the **Permissions** field of the **Add New Application** dialog.
   
   These permissions apply to every user who's a member of the organization's claimed domains.
   
6. Click **Add** to confirm and authorize the application.
   

Refer to the Docusign [How to obtain admin consent for internal applications](https://developers.docusign.com/platform/auth/consent/obtaining-admin-consent-internal/) documentation for more information.

View obtain individual user consent steps

Each user you plan to connect as must grant individual consent to your JWT app. This allows the app to act on their behalf when sending envelopes.

> **INTEGRATION KEY AND REDIRECT URI**
> 
> Ensure you complete the [integration key](#create-an-integration-key) and [redirect URI](#add-the-redirect-uri) steps from the JWT Grant setup section before you set up individual consent.

Complete the following steps to obtain individual user consent:

**For administrators**

1. Construct the individual consent URL using the following format:
   
   **For production accounts:**
   
   ```
   https://account.docusign.com/oauth/auth?response_type=code&scope=signature%20impersonation&client_id=YOUR_INTEGRATION_KEY&redirect_uri=https://www.workato.com/oauth/callback
   ```
   
   **For demo/sandbox accounts:**
   
   ```
   https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature%20impersonation&client_id=YOUR_INTEGRATION_KEY&redirect_uri=https://www.workato.com/oauth/callback
   ```
   
   Replace `YOUR_INTEGRATION_KEY` with your integration key (Client ID).
   
2. Provide the consent URL to each user who needs to grant consent. Users can open this URL in their web browser.
   

**For users**

1. Open the consent URL provided by your administrator in a web browser.
   
2. Sign in to Coupa, DocuSign, and NetSuite.
   
3. Review the consent screen and click **Accept** to grant consent. You won't be prompted again unless consent is revoked.
   

  

> **CONSENT DURING CONNECTION**
> 
> Docusign prompts you to grant consent when you [connect with JWT Grant authentication](#jwt-token). This grants individual consent for the user who authenticates the connection. You only need to follow the steps above to pre-authorize consent for users who won't personally set up the connection, for example, so an admin can grant consent ahead of time for another user's connection.

Refer to the Docusign [How to obtain individual consent](https://developers.docusign.com/platform/auth/consent/obtaining-individual-consent/) documentation for more information.

###### Connect to DocuSign with JWT Grant authentication

View connect to DocuSign with JWT Grant authentication steps

Complete the following steps to set up a JWT Grant connection to Coupa, DocuSign, and NetSuite in Workato:

1. Click **Create > Connection**.
   
2. Search for `Coupa, DocuSign, and NetSuite` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Docusign JWT Grant connection](/assets/jwt-grant-connection.D5bvWRRz.png)_Docusign JWT Grant connection_
   
4. Use the **Location** drop-down menu to select the project or folder where you plan to store your connection.
   
5. Use the **Auth type** drop-down menu to select **JWT Grant**.
   
6. Use the **Demo** drop-down menu to indicate if this is a demo Docusign account. Select **Yes** for demo/sandbox accounts or **No** for production accounts.
   
7. Enter the [integration key](#create-an-integration-key) from your Docusign application in the **Client ID** field.
   
8. Enter the [User ID](#retrieve-your-user-id) from the [JWT Grant setup](#jwt-token-setup) steps in the **User ID** field.
   
9. Enter the [RSA private key](#generate-an-rsa-keypair) from the [JWT Grant setup](#jwt-token-setup) steps in the **Private key** field. Enter the complete private key including the `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----` headers.
   
10. Optional. Enter the **Account ID** to specify a Docusign account when you have multiple accounts. You can find the account ID by navigating to **Admin > Apps and Keys > API Account ID**. The connection selects your first Docusign account by default.
    
11. Optional. Enter the Connect key in the **Connect key** field to validate your webhook requests. Refer to the Docusign [Add HMAC keys for your app](https://developers.docusign.com/platform/webhooks/connect/setting-up-hmac/) documentation for more information.
    
12. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
    
13. Click **Connect**. Workato redirects you to Docusign to authorize the connection.
    
14. Click **Allow Access** to grant the Workato integration permission to access your account.
    
    ![JWT consent screen](/assets/jwt-consent.C2zP7euJ.png)_JWT consent screen_
    

##### DocuSign OAuth 2.0 (Authorization Code Grant) authentication

View OAuth 2.0 (Authorization Code Grant) setup steps

Use OAuth 2.0 (Authorization Code Grant) to connect to Coupa, DocuSign, and NetSuite by signing in and granting access through Coupa, DocuSign, and NetSuite's authorization flow. All documents are sent from the email address of the user who authorized the connection.

Complete the following steps to set up an OAuth 2.0 authentication connection to Coupa, DocuSign, and NetSuite in Workato:

1. Click **Create > Connection**.
   
2. Search for `Coupa, DocuSign, and NetSuite` and select it as your app.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Docusign OAuth 2.0 (Authorization Code Grant) connection](/assets/oauth-2.NAxc7mKJ.png)_Docusign OAuth 2.0 (Authorization Code Grant) connection_
   
4. Use the **Location** drop-down menu to select the project or folder where you plan to store your connection.
   
5. Use the **Auth type** drop-down menu to select **OAuth 2.0 (Authorization Code Grant)**.
   
6. Use the **Demo** drop-down menu to indicate if this is a demo Docusign account. Select **Yes** for demo/sandbox accounts or **No** for production accounts.
   
7. Optional. Enter the **Account ID** to specify a Docusign account when you have multiple accounts. You can find the account ID by navigating to **Admin > Apps and Keys > API Account ID**. The connection selects your first Docusign account by default.
   
8. Optional. Enter the Connect key in the **Connect key** field to validate your webhook requests. Refer to the Docusign [Add HMAC keys for your app](https://developers.docusign.com/platform/webhooks/connect/setting-up-hmac/) documentation for more information.
   
9. Optional. Use the **Custom OAuth profile** drop-down menu to select a custom OAuth profile for your connection.
   
10. Click **Connect**.
    

#### NetSuite REST connection setup steps

View NetSuite REST connection setup steps

The NetSuite REST connector supports the following OAuth 2.0 authentication types:

- Client credentials (machine-to-machine)
- Authorization code grant (user-based authentication)

Select the authentication type based on your use case. Use client credentials for backend integrations. Use authorization code grant when actions require user-level access.

##### Prerequisites

Ensure you have the following to connect to NetSuite in Workato:

- The privilege to [create connections](/en/user-accounts-and-teams/role-based-access/new-model/privileges-reference#project-assets) in Workato.
- Access to a NetSuite Admin account.
- An understanding of the required NetSuite permissions.

##### Create an integration record in NetSuite

Complete the following steps to create a new integration record. The integration record represents an app, platform, or tool you plan to integrate with NetSuite.

1. Go to **Setup > Integration > Manage Integrations > New**.
   
   ![Go to Setup > Integration > Manage Integrations > New](/assets/manage-integrations.CkBsXBhB.png)_Go to **Setup > Integration > Manage Integrations > New**_
   
2. Provide a name for the integration record in the **Name** field.
   
3. Select the authentication flow based on your use case:
   
   - Select **Client credentials (machine to machine) grant** to use client credentials (machine-to-machine).
   - Select **Authorization code grant** to use user-based authentication.
   
   You can enable one or both authentication methods depending on your integration requirements.
   
4. Select the following scopes:
   
   - **RESTlets**
   - **REST Web Services**
   - **SuiteAnalytics Connect**
   
   ![Create an integration record in NetSuite](/assets/new-integration-record.CdQ_KiXw.png)_Create an integration record in NetSuite_
   
5. Click **Save**.
   
6. Copy the **Consumer key / Client ID** and **Consumer secret / Client secret** and store both values securely.
   
   - Client credentials authentication requires an EC private key and certificate.
   - Authorization code grant requires a client ID and client secret configured in a custom OAuth profile.
   
   Use the **Client ID** for client credentials authentication. Use the **Client ID** and **Client secret** for authorization code grant.
   
   ![Copy the client credentials](/assets/copy-client-credentials.CPnWlFSG.png)_Copy the client credentials_
   

##### NetSuite client credentials authentication

View client credentials setup steps

###### Create key and certificate files

View create key and certificate files steps

Complete the following steps to generate key and certificate files:

1. Open a new terminal window and run the following command to list available elliptic curves and algorithms:
   
   ```shell
   openssl ecparam -list_curves
   ```
   
2. Generate a private key using the `prime256v1` elliptic curve:
   
   ```shell
   openssl ecparam -name prime256v1 -genkey -noout -out private-key.pem
   ```
   
3. Generate the corresponding public key from the private key:
   
   ```shell
   openssl ec -in private-key.pem -pubout -out public-key.pem
   ```
   
4. Self-sign the private key and generate a PEM certificate:
   
   ```shell
   openssl req -new -x509 -key private-key.pem -out cert.pem -days 365
   ```
   

###### Create a machine-to-machine certificate in NetSuite

View create a machine-to-machine certificate steps

Complete the following steps to create a machine-to-machine certificate in NetSuite:

1. Go to **Setup > Integration > OAuth 2.0 Client Credentials (M2M) Setup**.
   
2. Click **Create New**. The **Create a New Client Credentials Mapping** dialog appears.
   
3. Configure the following fields:
   
   - Entity
   - Select the entity that uses the client credentials. Refer to the NetSuite SOAP connector documentation to learn how to [set up an integration user](/en/connectors/netsuite/netsuite-connect#step-4).
   - Role
   - Choose the role that defines the permissions for the entity. Ensure the selected role has the necessary permissions for the integration. Refer to the NetSuite SOAP connector documentation to learn how to [create an integration role](/en/connectors/netsuite/netsuite-connect#step-3).
   - Application
   - Select the integration record you created previously.
   - Certificate
   - Upload the certificate you created previously. The file should be saved on your computer as `cert.pem`.
   
   > **CONFIGURATION FOR RECORD SEARCH**
   > 
   > You must configure the following prerequisites in NetSuite to use the [Search records](/en/connectors/netsuite-rest/search-records-action) action:
   > 
   > - Your account must have the **SuiteAnalytics Workbook** feature enabled.
   > - Your role must have the **SuiteAnalytics Workbook (View)** permission.
   > 
   > Refer to the NetSuite [Prerequisites and Setup for REST Web Services](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_5085602973.html#subsect_158219919831) guide for more information about the features and permissions required for REST Web Services.
   
   ![Create a new client credentials mapping](/assets/new-client-credentials-mapping.CXgKG4EU.png)_Create a new client credentials mapping_
   
4. Click **Save**.
   
5. Copy the **Certificate ID** and store it in a secure location. Workato requires this value to establish the NetSuite REST connection.
   
   ![Copy the Certificate ID](/assets/certificate-id.RrrJbYFc.png)_Copy the Certificate ID_
   

###### Connect to NetSuite REST with client credentials

View connect with client credentials steps

Complete the following steps to establish a connection using client credentials:

1. Enter a name for your NetSuite connection in the **Connection name** field.
   
   ![Connection fields](/assets/netsuite-rest-connect.ohtfw5sj.png)_Connect to NetSuite REST using client credentials_
   
2. Enter the folder or project where you plan to store your NetSuite connection in the **Location** field.
   
3. Use the **Authentication type** drop-down menu to select **Client credentials**.
   
4. Enter your **Account ID**.
   
   Sign in to NetSuite as an Administrator and go to **Setup > Company > Company Information** to find your **Account ID**.
   
   You can also find it at the beginning of the NetSuite URL. For example, if the URL is `https://1234567.app.netsuite.com/`, your **Account ID** is `1234567`.
   
   > **SANDBOX ACCOUNT ID FORMAT**
   > 
   > You must replace underscores (`_`) with a hyphen (`-`) and capitalize letters if you are using a sandbox account. For example, `1234567_sb1` must be updated to `1234567-SB1`.
   
5. Enter the client ID you saved when you created your NetSuite integration record into the **Client ID** field.
   
6. Enter the private key you generated into the **EC Private Key** field. Ensure the key is in PEM format and has a length of 256, 384, or 521 bits.
   
   To extract the key, open the `private-key.pem` file and copy the text, starting from `-----BEGIN EC PRIVATE KEY-----` and ending with `-----END EC PRIVATE KEY-----`.
   
7. Enter the certificate ID from the machine-to-machine certificate you created in NetSuite into the **Certificate ID** field.
   
8. Optional. Click **Advanced settings > OAuth 2.0 scopes** and select a value.
   
   - Select OAuth 2.0 scopes and add them along with REST Web Services to define the minimum scope required for a NetSuite REST connection. You must enable the selected scopes in the corresponding integration record.
   
   ![Connection fields](/assets/scope-settings.DzESonA8.png)_Optional OAuth 2.0 scope settings_
   
9. Click **Connect**.
   

##### NetSuite authorization code grant authentication

View authorization code grant setup steps

###### Create a custom OAuth profile in Workato

View create a custom OAuth profile steps

Authorization code grant requires a custom OAuth profile with a valid client ID and client secret. Ensure your integration record in NetSuite supports authorization code grant and includes the required OAuth scopes. Use the following redirect URL when configuring the custom OAuth profile in Workato:

- `https://www.workato.com/oauth/callback`

Complete the following steps to create a custom OAuth profile:

1. Go to **Tools > Custom OAuth profiles** in Workato.
   
2. Click **\+ New custom profile**.
   
3. Select **NetSuite REST** in the **Application** field.
   
4. Enter a name for the custom OAuth profile in the **Name** field.
   
5. Copy the **Client ID** and **Client secret** from the integration record you created in NetSuite.
   
   ![Create a custom OAuth profile](/assets/create-oauth-profile-netsuite.BTL_WPnx.png)_Create a custom OAuth profile_
   
6. Paste the **Client ID** and **Client secret** into their respective fields.
   
7. Click **Save**.
   

###### Connect to NetSuite REST with authorization code grant

View connect with authorization code grant steps

Complete the following steps to establish a connection using authorization code grant:

1. Enter a name for your NetSuite connection in the **Connection name** field.
   
   ![Connection fields](/assets/netsuite-rest-connect-auth-code.DQojyKjp.png)_Connect to NetSuite REST using authorization code grant_
   
2. Enter the folder or project where you plan to store your NetSuite connection in the **Location** field.
   
3. Use the **Authentication type** drop-down menu to select **Authorization code grant**.
   
4. Enter your **Account ID**.
   
   Sign in to NetSuite as an Administrator and go to **Setup > Company > Company Information** to find your **Account ID**.
   
   You can also find it at the beginning of the NetSuite URL. For example, if the URL is `https://1234567.app.netsuite.com/`, your **Account ID** is `1234567`.
   
   > **SANDBOX ACCOUNT ID FORMAT**
   > 
   > You must replace underscores (`_`) with a hyphen (`-`) and capitalize letters if you are using a sandbox account. For example, `1234567_sb1` must be updated to `1234567-SB1`.
   
5. Optional. Expand **Advanced settings** and configure **OAuth 2.0 scopes** and the **NetSuite account timezone**.
   
6. Select your custom OAuth profile in the **Custom OAuth profile** field.
   
7. Click **Connect**.
   
8. Sign in to NetSuite and authorize access when prompted.
   

### Server configuration

Edit the **Server Configuration** recipe function in the project's **Functions** folder to control Coupa setup, vendor deduplication, document delivery, NetSuite vendor creation, and operational limits:

| Key | Description |
| --- | --- |
| `coupa_spend_currency` | Enter the currency used for estimated annual spend in Coupa. Defaults to `USD`. |
| `coupa_tax_easy_form_id` | Enter the Easy Form ID for the tax/general SIM form used for approval submission. |
| `coupa_banking_easy_form_id` | Enter the Easy Form ID for the banking form, if this deployment configures banking as a separate form from tax. |
| `coupa_approval_chain_configured` | Configure whether Coupa's approval chain for new suppliers is set up for this deployment. |
| `dedupe_name_normalization_rules` | Choose how vendor names are normalized before duplicate matching: stripping legal suffixes, collapsing whitespace, casefolding, and stripping punctuation. |
| `dedupe_candidate_query_strategy` | Choose which query strategies run when searching Coupa for duplicate candidates: exact match, starts with, contains, or merge-and-dedupe. |
| `dedupe_max_candidates_per_query` | Enter the cap on duplicate candidates each query retrieves. Defaults to `20`. |
| `docusign_composite_template_ids` | Enter the DocuSign template IDs combined into the single composite envelope sent to the vendor. |
| `docusign_recipient_role_name` | Enter the DocuSign recipient role name shared across all composite templates. Defaults to `Vendor`. |
| `docusign_envelope_expiration_days` | Enter the number of days before a sent DocuSign envelope expires. Defaults to `30`. |
| `docusign_form_data_mapping` | Map how DocuSign form fields correspond to Coupa SIM fields, including each field's type, whether it's required, how the server normalizes it, and match criteria. |
| `erp_netsuite_is_oneworld` | Configure whether the target NetSuite account is OneWorld. Defaults to `true`. |
| `erp_netsuite_subsidiary_id` | Enter the internal ID of the target subsidiary for new vendors. Required when `is_oneworld` is `true`. |
| `erp_netsuite_currency_map` | Map Coupa currency codes to NetSuite currency internal IDs. |
| `erp_netsuite_payment_terms_map` | Map Coupa payment term strings to NetSuite payment term internal IDs. |
| `erp_netsuite_default_vendor_category_id` | Enter the NetSuite vendor category internal ID to apply to every new vendor. |
| `erp_netsuite_default_1099_eligible_rule` | Choose the rule for setting `is1099Eligible` on the NetSuite vendor record. Defaults to deriving it from Coupa's tax classification field. |
| `erp_netsuite_initial_inactive` | Configure whether new NetSuite vendor records are created inactive until activation. Defaults to `true`. |
| `server_limits_max_pending_lookback_days` | Enter how many days back **list\_pending\_vendor\_onboardings** looks for in-flight onboardings. Defaults to `90`. |
| `server_limits_plan_token_ttl_seconds` | Enter how long a previewed plan stays valid before it expires and requires re-review. Defaults to `900` (15 minutes). |

View server configuration steps

Complete the following steps to configure the Vendor Onboarding MCP server:

1. Sign in to your Workato account and go to **Projects**.
   
2. Go to the project that contains your MCP server.
   
3. Open the **Functions** folder, then open the **Server Configuration** recipe.
   
4. Edit the value in the step for the setting you plan to change. For example, lower `docusign_envelope_expiration_days` from `30` to `15`.
   
5. Save and start the recipe for the new value to take effect.
   

## How to use Vendor Onboarding MCP server tools

Refer to the following sections for detailed information on available tools:

### initiate\_vendor\_request tool

The **initiate\_vendor\_request** tool captures new-vendor intake details, checks for duplicates against existing Coupa suppliers, presents a preview for your approval, then creates the Supplier Information Management (SIM) record. Your LLM calls this tool once to capture the vendor's details, then calls it again after receiving your approval to create the SIM record.

**Try asking**:

- `Onboard Acme Corp as a new vendor.`
- `Set up Acme Industries LLC as a new supplier, with annual spend around $500,000 in IT services.`
- `Register this vendor even though a similar name already exists. It's a different company.`

### send\_vendor\_onboarding\_documents tool

The **send\_vendor\_onboarding\_documents** tool assembles a single composite DocuSign envelope combining tax forms (W-9/W-8) and supporting-document requests, presents a preview for your approval, then sends it to the vendor's contact. Your LLM calls this tool once to display the preview, then calls it again after receiving your approval to send the envelope.

**Try asking**:

- `Send the tax and insurance forms to Acme Corp.`
- `Send Acme their onboarding documents now.`
- `What documents will Acme receive, and when do they expire?`

### check\_vendor\_document\_status tool

The **check\_vendor\_document\_status** tool returns the DocuSign envelope's current status and, after the vendor completes it, the extracted form data and a document manifest. Your LLM uses this tool to check whether a vendor has signed and returned their documents. This tool is read-only.

**Try asking**:

- `Has Acme signed and returned their documents yet?`
- `Check the status of Acme's DocuSign envelope.`
- `What did Acme submit on their tax form?`

### import\_vendor\_form\_data tool

The **import\_vendor\_form\_data** tool downloads the vendor's completed documents from DocuSign, prepares the signer-entered form data for the Coupa SIM record, presents a preview with sensitive values masked, then writes the data and attaches the downloaded documents. Your LLM uses this tool in the following four call workflow:

1. **check\_vendor\_document\_status** reports an envelope is complete.
2. **get\_vendor\_write\_policy** maps the fields into a Coupa SIM write payload.
3. **import\_vendor\_form\_data** displays a preview of the payload.
4. **import\_vendor\_form\_data** commits the import after receiving your approval.

A signed envelope can return more fields than the deployment's mapping covers. The tool drops a field without a mapping entry instead of blocking the import, so confirm **get\_vendor\_write\_policy** covers every field you need, especially sensitive fields.

**Try asking**:

- `Import Acme's signed form data into their Coupa record.`
- `Write Acme's completed tax form into their vendor record.`
- `Show me what will be written to Acme's record before you import it.`

### check\_vendor\_bank\_details tool

The **check\_vendor\_bank\_details** tool checks whether the vendor has submitted banking details through Coupa's native Supplier Portal flow and returns masked account and routing numbers. Your LLM uses this tool to check on banking before submitting a vendor for approval. The tool is read-only and doesn't send a banking request to the vendor.

This tool reads a legacy SIM Easy Form Response. The server may not recognize a submission made through Coupa's newer Coupa Pay Payment Methods flow.

**Try asking**:

- `Check whether Acme's banking has come in yet.`
- `Has Acme submitted their bank details?`
- `Show me what banking information Acme has submitted so far.`

### submit\_vendor\_for\_approval tool

The **submit\_vendor\_for\_approval** tool identifies the vendor's Easy Form Response(s), presents a preview of the responses and spend amount for your approval, then submits them into Coupa's configured spend-based approval chain. Your LLM calls this tool once to display the preview, then calls it again after receiving your approval to submit. Coupa determines the approver from its own configured chain at submission time, so the preview doesn't name the approver.

**Try asking**:

- `Submit Acme's onboarding for approval.`
- `Send Acme's vendor record through Coupa approval.`
- `What spend amount will be submitted for Acme's approval?`

### create\_vendor\_master\_netsuite tool

The **create\_vendor\_master\_netsuite** tool prepares the fields needed to finalize the existing Coupa supplier and create the corresponding NetSuite vendor record, presents a preview for your approval, then writes to both systems, creating the vendor inactive in NetSuite until activation. Your LLM calls this tool once, after approval is complete, to display the preview, then calls it again after receiving your approval to commit the write. If a probable duplicate turns up at this stage, your LLM presents it and asks you how to proceed.

**Try asking**:

- `Create the vendor master record for Acme now that it's approved.`
- `What fields will be written to Coupa and NetSuite for Acme?`
- `Finalize Acme's supplier record and create their NetSuite vendor.`

### activate\_vendor\_for\_transactions tool

The **activate\_vendor\_for\_transactions** tool previews the status change for each system, including inactive to active in Coupa and NetSuite, and then activates the vendor in both apps. This makes the vendor eligible for transactions and payments. Your LLM calls this tool once, after the vendor master is created, to display the preview, then calls it again after receiving your approval to activate.

**Try asking**:

- `Activate Acme for transactions.`
- `Turn on Acme so we can start transacting with them.`
- `What changes when I activate Acme in Coupa and NetSuite?`

### list\_pending\_vendor\_onboardings tool

The **list\_pending\_vendor\_onboardings** tool returns a paginated list of the in-flight vendor onboardings you initiated, grouped by why each vendor onboarding is stalled. Your LLM uses this tool when you ask what's outstanding or which vendors are stuck. This tool is read-only.

**Try asking**:

- `Which vendor onboardings are stuck waiting on the vendor?`
- `Show me what's outstanding in my vendor onboarding queue.`
- `List onboardings that are waiting on approval.`

### get\_vendor\_onboarding\_status tool

The **get\_vendor\_onboarding\_status** tool returns the full status of a vendor's onboarding across Coupa, DocuSign, and NetSuite, including the current blocker, if any, and who owes the next action. Your LLM uses this tool when you ask about a specific vendor's progress. This tool is read-only.

**Try asking**:

- `What's the status of the Acme onboarding?`
- `What's holding up Acme's onboarding?`
- `Who still needs to act on Acme's vendor approval?`

### get\_vendor\_write\_policy tool

The **get\_vendor\_write\_policy** tool returns the deployment's configured [`docusign_form_data_mapping`](#server-configuration) setting, which contains the field mapping, types, and sensitivity flags. The tool also returns a fixed list of fields **import\_vendor\_form\_data** rejects, regardless of configuration. Your LLM calls this tool before writing using the **import\_vendor\_form\_data** tool. This tool is read-only.

**Try asking**:

- `What fields will be written when I import Acme's documents?`
- `Which of Acme's submitted fields are treated as sensitive?`
- `Show me the write policy this server uses for importing vendor data.`

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
