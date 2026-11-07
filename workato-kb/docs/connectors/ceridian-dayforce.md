<!-- source: https://docs.workato.com/en/connectors/ceridian-dayforce | lastmod: 2026-09-23 -->
> Ceridian Dayforce is a global human capital management (HCM) platform that combines payroll, HR, benefits, talent, and workforce management in a single application.

# Ceridian Dayforce

[Ceridian Dayforce](https://www.dayforce.com/) is a global human capital management (HCM) platform that combines payroll, HR, benefits, talent, and workforce management in a single application.

## Install Ceridian Dayforce from the community library

Complete the following steps to install the Ceridian Dayforce connector from the [community library](https://www.workato.com/browse/connectors):

1. Open the recipe editor and search for a connector. Alternatively, you can search for a connector in the [community library](https://www.workato.com/browse/connectors).
   
   ![Search for recipe editor](/assets/search-on-recipe-editor.VrZpf8zl.png)_Search for community connectors in the recipe editor_
   
2. Select the community connector you plan to install.
   
3. Click **Install** to install the connector from the community library.
   
   ![Click install](/assets/install-connector.BXpGZP9K.png)_Click **Install**_
   
4. Select **Release connector**. Alternatively, select **Review code** to review and modify the connector code before releasing it to the workspace.
   
   ![Release connector](/assets/release-and-review.kWToLwmF.png)_Release the connector_
   
5. Summarize any changes you made to the connector, then click **Release** to allow workspace collaborators to use the connector in recipes.
   
   ![The Confirm release dialog](/assets/release.CpEhhA-6.png)_The **Confirm release** dialog_
   

## Connection setup

The Ceridian Dayforce connector supports the following authentication types:

- [Basic authentication](#basic-auth)
- [Token-based authentication](#token-auth)

### Basic authentication

Use basic authentication when developing lightweight integrations, testing API endpoints, or performing server-to-server data transfers in Ceridian Dayforce.

#### Ceridian Dayforce setup

Complete the following steps to set up Ceridian Dayforce for basic authentication:

1. Enable web services for Ceridian Dayforce.
   
   1. Go to **System Admin > Roles**.
      
   2. Select the role associated with your Ceridian Dayforce user account.
      
   3. Go to **Features > HCM Anywhere > Web Services**.
      
   4. Select the checkboxes to enable **Web Services**, and minimally, **Read Data**.
      
   5. Click **Save**, and then **Refresh**.
      
2. Retrieve your company short name from Ceridian Dayforce.
   
   1. Log in to your Ceridian Dayforce account.
      
   2. Go to **Company > Settings > General**.
      
   3. Get your company short name from the **Client namespace** field.
      

## How to connect to Ceridian Dayforce

Complete the following steps to establish a Ceridian Dayforce connection in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select **Ceridian Dayforce** as your connection on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
4. Use the **Location** drop-down menu to select the project or folder where you plan to store the connection.
   
5. Select the **Basic authentication** from the **Authentication type** drop-down menu.
   
6. Enter the sub domain of your Dayforce account in the **sub domain** field. For example, if your Dayforce account URL is `sandbox.dayforcehcm.com`, the sub domain is `sandbox`.
   
7. Enter your client namespace in the **Client namespace** field.
   
8. Select the version of Ceridian Dayforce you plan to use in the **Version** field.
   
9. Select the time zone for the Dayforce application in the **Dayforce time zone** field.
   
10. Enter your Ceridian Dayforce web services account user name in the **User name** field.
    
11. Enter your Ceridian Dayforce web services account password in the **Password** field.
    
12. Click **Connect**.
    

### {Authentication method 2 name} authentication

Use token-based authentication when authenticating API integrations, setting up automated data transfers, or allowing third-party applications to access system data in Ceridian Dayforce.

#### Ceridian Dayforce setup

Complete the following steps to set up Ceridian Dayforce for token-based authentication:

1. Enable web services for Ceridian Dayforce.
   
   1. Go to **System Admin > Roles**.
      
   2. Select the role associated with your Ceridian Dayforce user account.
      
   3. Go to **Features > HCM Anywhere > Web Services**.
      
   4. Select the checkboxes to enable **Web Services**, and minimally, **Read Data**.
      
   5. Click **Save**, and then **Refresh**.
      
2. Identify your client namespace. The client namespace is the identifier associated with your organization in your Ceridian Dayforce login URL.
   
3. Determine your identity/token endpoint. The endpoint is different for production and test environments.
   
   - Production: [https://dfid.dayforcehcm.com/connect/token](https://dfid.dayforcehcm.com/connect/token)
   - Test: [https://dfidtst.np.dayforcehcm.com/connect/token](https://dfidtst.np.dayforcehcm.com/connect/token)

---
