<!-- source: https://docs.workato.com/en/connectors/netsuite/netsuite-connect | lastmod: 2026-07-10 -->
> Set up and connect NetSuite SOAP in Workato using token-based authentication with an application ID, consumer key and secret, and token ID and secret.

# Connect to NetSuite SOAP on Workato

To connect to NetSuite using token-based authentication, you must generate an application ID, a consumer key, a consumer secret, a token ID, and a token secret.

For a step-by-step guide, refer to the following video tutorial:

[Video](https://www.youtube.com/embed/F29lbb9jN74)

* * *

## Prerequisites

To connect to NetSuite in Workato, ensure you have the following:

- The privilege to [create connections](/en/user-accounts-and-teams/role-based-access/new-model/privileges-reference#project-assets) in Workato.
- Access to a NetSuite Admin account.
- An understanding of the required NetSuite permissions.

* * *

## Enable web services and token-based authentication

Complete the following steps to enable web services and token-based authentication in your NetSuite instance:

Watch a demonstration of this step

[Video](https://www.youtube.com/embed/F29lbb9jN74?rel=0&start=81&end=136)

1. Navigate to **Setup > Company > Enable Features > SuiteCloud**.
   
   ![Navigate to Setup > Company > Enabled Features > SuiteCloud](/assets/enable-web-services-1.ByhOSi9g.png)_Navigate to **Setup > Company > Enable Features > SuiteCloud**_
   
2. Select the **Client SuiteScript** and **Server SuiteScript** checkboxes.
   
   ![Check the Client SuiteScript and Server SuiteScript checkboxes](/assets/netsuite-suitescript-setup.C_XBgvF2.png)_In the **SuiteCloud** tab, check the **Client SuiteScript** and **Server SuiteScript** checkboxes_
   
3. Navigate to the SuiteTalk (Web Services) section and select the **SOAP Web Services** and **REST Web Services** checkboxes.
   
4. Navigate to the Manage Authentication section and select the **Token-based authentication** and **OAuth 2.0** checkboxes.
   
   ![Select the SOAP Web Services, REST Web Services, Token-based authentication, and OAuth 2.0 checkboxes](/assets/enable-web-services-2.qoBpgFJ6.png)_In the SuiteCloud tab, select the SOAP Web Services, REST Web Services, Token-based authentication, and OAuth 2.0 checkboxes_
   
5. Click **Save**.
   

* * *

## Create an integration record

Complete the following steps to create a new integration record. The integration record represents an app, platform, or tool you plan to integrate with NetSuite.

Watch a demonstration of this step

[Video](https://www.youtube.com/embed/F29lbb9jN74?rel=0&start=137&end=211)

1. Navigate to **Setup > Integration > Manage Integrations > New**.
   
2. Provide a name in the **Name** field.
   
3. Ensure the **State** field is set to **Enabled**.
   
4. Ensure that the **Token-based authentication** checkbox is selected.
   
5. Clear the **TBA: Authorization flow** and **Authorization code grant** checkboxes.
   
6. Click **Save**.
   
7. Copy the **Consumer key / Client ID** and **Consumer secret / Client secret** and store them in a secure location. Workato requires these values to establish a NetSuite connection in Workato.
   

* * *

## Create an integration role

Complete the following steps to create an integration role.

Watch a demonstration of this step

[Video](https://www.youtube.com/embed/F29lbb9jN74?rel=0&start=212&end=412)

1. Navigate to **Setup > Users/Roles > Manage Roles > New** to create an integration role.
   
   ![Navigate to Setup > Users/Roles > Manage Roles](/assets/setup-integration-role-1.D-2hPdjY.png)_Navigate to **Setup > Users/Roles > Manage Roles > New**_
   
2. Provide a name for your integration role in the **Name** field.
   
3. Configure how you plan this role to interact with subsidiaries in the **Subsidiary Restrictions** section.
   
4. Optional. Select the **Web Services Only Role** checkbox in the **Authentication** section to restrict this role to API interactions only. This prevents access through NetSuite's user interface (UI).
   
   > **WEB SERVICES ONLY AUTHENTICATION**
   > 
   > Roles with the **Web Services Only** restriction don't work with RESTlets. Assigning this authentication in the role impacts the `Execute RESTlet script` action in the NetSuite REST connector.
   
5. Navigate to the **Permissions** tab to specify the extent to which Workato and other applications can interact with NetSuite.
   
   ![Set up integration-specific permissions](/assets/setup-integration-role-4.K5vES586.png)_Set up integration-specific permissions_
   
   For example, if you plan to create sales orders in NetSuite, search for and select the **Sales Order** permission and assign it the **Create** level. If you plan to create, update, and read sales order data, select the **Full** permission level.
   
6. Click **Setup**.
   
   ![Click Setup](/assets/click-setup.Bb_wUdl5.png)_Click **Setup**_
   
7. Search for the following permissions, set their permission level to **Full**, and then click **Add**:
   
   - **Log in using Access Tokens**
   - **Log in using OAuth 2.0 Access Tokens**
   - **REST Web Services**
   - **SOAP Web Services**
   - **Set Up Company**
   - **SuiteScript**
   - **User Access Tokens**
   - **Set Up SOAP Web Services**
   - **Custom Body Fields**
   - **Custom Address Form**
   - **Deleted Records** (required for the [Deleted standard record](/en/connectors/netsuite/deleted-standard-record-trigger) trigger)
   
   > **REST WEB SERVICE PREREQUISITES**
   > 
   > Refer to the NetSuite [Prerequisites and Setup for REST Web Services](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_5085602973.html#subsect_158219919831) guide for more information about the features and permissions required for REST Web Services.
   
8. Click **Save**.
   

* * *

## Set up an integration user

After configuring the integration role, you must assign it to the integration user. We recommend creating a separate user for your integrations.

Complete the following steps to edit an existing integration user or create a new one:

Watch a demonstration of this step

[Video](https://www.youtube.com/embed/F29lbb9jN74?rel=0&start=413&end=471)

**Edit an existing user**

1. Navigate to **Setup > Users/Roles > Manage Users** to edit an existing user.
   
   ![Set up other permissions and permission levels](/assets/setup-integration-user-1.Dqkn9i22.png)_Navigate to Setup > Users/Roles > Manage Users_
   
2. Navigate to the **Access** tab and ensure the **Give access** checkbox is selected.
   
3. Select the integration role you created in the [Create an integration role](#step-3) step in the **Role** field to assign it to the new user.
   

**Create a new user**

1. Navigate to **Lists > Employees > Employees > New** to create a new user.
   
2. Enter a name and email address for the user in the **Name** and **Email** fields.
   
3. Select the subsidiary they belong to in the **Subsidiary** menu.
   
4. Navigate to the **Access** tab and select the **Give access** checkbox.
   
5. Select the integration role you created in the [Create an integration role](#step-3) step in the **Role** field to assign it to the new user.
   
   ![Assign integration role](/assets/setup-integration-user-2.DWZQnQ73.png)_Assign the integration role to a user_
   

* * *

## Create an access token

Complete the following steps to create an access token for the integration user:

> **ACCESS TOKENS**
> 
> If the integration user has the **User Access Tokens** permission, they can create and revoke their own tokens. If the integration user has only the **Log in using Access Tokens** permission, a user with the **Access Token Management** permission must create an access token for the integration user.

Watch a demonstration of this step

[Video](https://www.youtube.com/embed/F29lbb9jN74?rel=0&start=472&end=517)

1. Navigate to **Setup > Users/Roles > Access Tokens > New**.
   
   ![Setup > Users/Roles > Access Tokens > New](/assets/access-token.BbvvWKbs.png)_In NetSuite, go to Setup > Users/Roles>Access Tokens > New_
   
2. Select the [integration record](#step-2) you created in the **Application name** field.
   
3. Select the [user](#step-4) you created or edited in the **User** field.
   
4. Select the [role](#step-3) you created in the **Role** field.
   
5. Use NetSuite's default name or provide one in the **Token name** field.
   
6. Click **Save**.
   
7. Copy the **Token ID** and **Token secret** and store them in a secure location. Workato requires these values to establish the NetSuite connection.
   

* * *

## Connect to NetSuite on Workato

Complete the following steps to establish a connection with NetSuite SOAP in Workato:

Watch a demonstration of this step

[Video](https://www.youtube.com/embed/F29lbb9jN74?rel=0&start=519&end=569)

1. Provide a **Connection name** that identifies which NetSuite instance Workato is connected to.
   
   ![NetSuite Connection setup](/assets/netsuite-connection-setup.Byi_p2_F.png)_Connection setup_
   
2. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
3. Enter your NetSuite **Account ID**. You can find your account ID by signing in to NetSuite as an administrator and going to **Setup > Integration > SOAP Web Services Preferences**.
   
4. Enter your NetSuite **Token ID** and **Token Secret**.
   
5. Use the **NetSuite account timezone** menu to select the timezone in which your NetSuite instance operates.
   
6. Configure the **Ignore read-only fields** to specify whether to ignore read-only fields in add and update operations. Select **No** to prevent read-only fields from being overwritten and generate an error when attempts are made to overwrite them.
   
7. Expand the **Advanced settings** section and enter the integration record's **Consumer key** and **Consumer secret**. If left blank, the global consumer key and secret are used.
   
8. Use the **Run SuiteScript and trigger workflows** field to select whether to enable server SuiteScripts and trigger workflows. Leave this field blank to use the company preference configured in NetSuite. Refer to NetSuite's [Request-Level Preferences](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4170181850.html#bridgehead_4629750371) documentation for more information.
   
9. Click **Connect** to authorize a connection between Workato and your NetSuite SOAP account.

---
