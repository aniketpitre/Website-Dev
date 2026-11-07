<!-- source: https://docs.workato.com/en/connectors/sap-fieldglass | lastmod: 2026-07-07 -->
> The SAP Fieldglass connector enables you to automate external workforce and services procurement workflows in this cloud-based vendor management system.

# SAP Fieldglass

[SAP Fieldglass](https://www.sap.com/products/acquired-brands/what-is-fieldglass.html) is a cloud-based vendor management system (VMS) designed to help businesses manage their external workforce and services procurement. It is part of the SAP family of enterprise solutions.

## Prerequisites

Before using the SAP Fieldglass connector in Workato, ensure you have an active SAP Fieldglass account with appropriate permissions to access APIs.

1. [Register an application in SAP Fieldglass](#register-an-application-in-sap-fieldglass)
2. [Generate an API key](#generate-an-api-key)

### Register an application in SAP Fieldglass

Suppliers can register new supplier accounts after the registration email has been received from the buyer company.

Register an application in SAP Fieldglass

1. Copy the temporary registration code in the first email.
   
2. Select the link in the second email to go to the SAP Fieldglass website.
   
3. Paste the temporary registration code into the **Registration Code** field, and select **Next**.
   
4. Enter a **Username** and **Password**, and re-enter the password. Specify user preferences.
   
5. Review all of the fields and update any that aren’t accurate.
   
6. Select **Sign In**. The SAP Fieldglass home page displays.
   

Refer to the [SAP Fieldglass help](https://help.sap.com/docs/SAP_Fieldglass/966d9b18b66c4304b9d585884f7b0931/8d8700fdc42644f89de2d487f2ad10f7.html) page for more information.

### Generate an API key

[Generate an API key](https://www.servicenow.com/docs/bundle/xanadu-integrate-applications/page/administer/integrationhub-store-spokes/task/generate-api-key.html) on the SAP Fieldglass tenant to enable your ServiceNow instance to connect to the SAP Fieldglass tenant.

Generate an API key

1. Sign in to your SAP Fieldglass tenant account.
   
2. Select **Linked Accounts**. ![Linked accounts](/assets/sap-fieldglass-spoke-linked-account.CkVResL3.png)_Linked accounts_
   
3. On the **Self-Service Dashboard**, select the **API Application Keys** card. ![Configuration tools](/assets/sap-fieldglass-spoke-application-keys-card.CDNknj22.png)_Configuration tools_
   
4. Select **New**. ![New button](/assets/sap-fieldglass-spoke-new-button.DuwaMv_H.png)_New button_
   
5. On the **Create Application Key** page, enter the following values:
   
   1. **Application Name**: Provide the name of the application.
      
   2. **Description**: Provide a custom description of the API key.
      
6. Select **Create**. ![API key](/assets/sap-fieldglass-spoke-api-key-details.BnkFOf05.png)_API key_
   
7. The API key and other details are generated. The API key, client ID, and client secret are required to establish a connection to Workato. ![API key](/assets/sap-fieldglass-spoke-api-key-generated.CnuBKtXh.png)_API key_
   

## How to connect to SAP Fieldglass

Connecting to the SAP Fieldglass involves the following steps:

1. [Download the SAP Fieldglass from the community](#community-download)
2. [Complete setup in Workato](#workato-setup)

### Download the SAP Fieldglass from the community

Complete the following steps to install the SAP Fieldglass connector from the [community library](https://www.workato.com/browse/connectors):

1. Open the recipe editor and search for a connector. Alternatively, you can search for a connector in the [community library](https://www.workato.com/browse/connectors).
   
   ![Search for recipe editor](/assets/search-on-recipe-editor.VrZpf8zl.png)_Search for community connectors in the recipe editor_
   
2. Select the community connector you plan to install.
   
3. Click **Install** to install the connector from the community library.
   
   ![Click install](/assets/install-connector.BXpGZP9K.png)_Click **Install**_
   
4. Select **Release connector**. Alternatively, select **Review code** to review and modify the connector code before releasing it to the workspace.
   
   ![Release connector](/assets/release-and-review.kWToLwmF.png)_Release the connector_
   
5. Summarize any changes you made to the connector, then click **Release** to allow workspace collaborators to use the connector in recipes.
   
   ![The Confirm release dialog](/assets/release.CpEhhA-6.png)_The **Confirm release** dialog_
   

### Complete setup in Workato

Complete the following steps to establish a connection to SAP Fieldglass in Workato:

1. Click **Create > Connection** or press C+C.
   
2. Search for and select `SAP Fieldglass` as your connection on the New connection page.
   
3. Provide a unique name for your connection in the **Connection name** field.
   
4. Enter the **Username** for your SAP Fieldglass.
   
5. Enter the **Password** for your SAP Fieldglass.
   
6. Provide the **API Key** generated on the SAP Fieldglass tenant.
   
7. Provide the **Client ID** generated on the SAP Fieldglass tenant.
   
8. Provide the **Client Secret** generated on the SAP Fieldglass tenant.
   
9. Enter the **Server URL** for your SAP Fieldglass instance.
   
10. Click **Connect**.
    
    ![Connection to SAP Fieldglass](/assets/sap-fieldglass-connection.bmKfeyHS.png)_Connection to SAP Fieldglass_

---
