<!-- source: https://docs.workato.com/en/connectors/sap-successfactors-lms | lastmod: 2026-07-07 -->
> The SAP SuccessFactors LMS connector enables you to automate learning management workflows, delivering employee training and tracking course progress.

# SAP SuccessFactors LMS

[SAP SuccessFactors LMS](https://www.sap.com/india/products/hcm/corporate-lms/features.html) is a platform designed for managing and delivering online employee training, enabling businesses to create training content and track employee progress and completion.

## Prerequisites

To establish a connection to SAP SuccessFactors LMS you must have an active sandbox or general instance.

### Obtain an SAP SuccessFactors LMS sandbox instance

You can request a sandbox instance directly from SAP. This connector only supports instances with admin accesses. Refer to [Generate a client secret from SAP Successfactors LMS](#secret-generate) to learn how to generate a client secret.

## Connection setup

### Supported authentication

SAP SuccessFactors LMS supports the following authentication type:

- [Client credentials-based Authentication](#client-credentials), supported by SAP S/4HANA Cloud, public edition.

## Client credentials-based authentication

Complete the following steps to establishing a connection to SAP SuccessFactors LMS in Workato:

- [Generate a client secret from SAP Successfactors LMS](#secret-generate)
- [Complete setup in Workato](#workato-setup)

### Generate a client secret from SAP Successfactors LMS

To connect to SAP SuccessFactors LMS using client credentials-based authentication, you must generate an admin-level system client secret or retrieve an existing client secret. Refer to [SAP's documentation](https://help.sap.com/doc/cd753f29622244df98e335af737b5422/2405/en-US/SF_LRN_Web_Svc_Integ.pdf) for more information on generating a client secret.

Complete the following steps to generate a client secret from SAP SuccessFactors LMS:

1. Go to Learning **Administration > System Administration Security > Administrator Management**.
   
2. To generate a new client secret, you must either create a new administrator or select an existing administrator.
   
3. If you do not yet have an administrator to call Learning APIs, then you must create a new administrator by clicking **Add New**. Complete the **Add New Admin** form to create a new administrator.
   
   Contact your app administrator for assistance in obtaining the required values to complete this form.
   
4. If you have an existing administrator, you must select that administrator from the **Administrators** page.
   
5. Click **Generate a new Client Secret** to generate a new client secret. SAP SuccessFactors LMS generates a client secret, and its corresponding hash value.
   
6. Copy the newly-generated client secret value and store it in a secure place for later use in Workato.
   

### Complete setup in Workato

Complete the following steps to establish your SAP SuccessFactors LMS connection in Workato using client credentials authentication.

1. Install the SAP SuccessFactors LMS connector from the community library
   
   Complete the following steps to install the SAP SuccessFactors LMS connector from the [community library](https://www.workato.com/browse/connectors):
   
   1. Open the recipe editor and search for a connector. Alternatively, you can search for a connector in the [community library](https://www.workato.com/browse/connectors).
      
      ![Search for recipe editor](/assets/search-on-recipe-editor.VrZpf8zl.png)_Search for community connectors in the recipe editor_
      
   2. Select the community connector you plan to install.
      
   3. Click **Install** to install the connector from the community library.
      
      ![Click install](/assets/install-connector.BXpGZP9K.png)_Click **Install**_
      
   4. Select **Release connector**. Alternatively, select **Review code** to review and modify the connector code before releasing it to the workspace.
      
      ![Release connector](/assets/release-and-review.kWToLwmF.png)_Release the connector_
      
   5. Summarize any changes you made to the connector, then click **Release** to allow workspace collaborators to use the connector in recipes.
      
      ![The Confirm release dialog](/assets/release.CpEhhA-6.png)_The **Confirm release** dialog_
      
   
2. Click **Create > Connection** or press C twice.
   
3. Search for and select `SAP SuccessFactors LMS` as your connection in the **New connection** page.
   
4. Provide a name for your connection in the **Connection name** field.
   
5. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
6. Provide your **Subdomain**. Your subdomain is provided by your SAP SuccessFactors LMS application administrator. If your SuccessFactors LMS URL is `https://abc.successfactors.com`, the subdomain is `abc.successfactors.com`.
   
7. Supply the **Client ID** and **Client secret** for your app into their corresponding fields in Workato.
   
8. Supply the **Username** for your app into its corresponding field in Workato. This is the **User ID** associated with your newly created SuccessFactors LMS instance.
   
9. Supply the **Company ID** for your app into its corresponding field in Workato. This is generally the same as your client ID.
   
10. Click **Connect**.
    
    ![Connect SAP SuccessFactors LMS on Workato](/assets/connection.CdJiyqc3.png)_Configure SAP SuccessFactors LMS connection in Workato_
    

### Supported resources

The SAP SuccessFactors LMS connector supports all the entities associated with **Learning administration** present in your instance.

---
