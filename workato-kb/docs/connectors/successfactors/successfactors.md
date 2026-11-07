<!-- source: https://docs.workato.com/en/connectors/successfactors/successfactors | lastmod: 2026-09-04 -->
> Set up and connect SAP SuccessFactors in Workato, including creating an integration system user and registering an OAuth 2.0 client application.

# SAP SuccessFactors

[Video](https://www.youtube.com/embed/0chBqyOWpZo)

[SAP SuccessFactors](https://www.sap.com/products/hcm.html) provides cloud-based human capital management software. The SAP SuccessFactors connector enables you to create integrations with the following products:

- SuccessFactors Employee Central Core HR
- SuccessFactors Performance & Goals
- SuccessFactors Recruiting
- SuccessFactors Onboarding
- SuccessFactors Learning
- SuccessFactors JAM Social Collaboration
- SuccessFactors Succession and Development
- SuccessFactors Workforce Planning
- SuccessFactors Workforce Analytics
- SuccessFactors Compensation

The SAP SuccessFactors connector has successfully passed the Application Readiness Check (ARC) required by SAP PartnerEdge. Read the [SAP Application Readiness Check Guide](https://www.sap.com/documents/2018/05/e282ab65-077d-0010-87a3-c30de2ffd8ff.html) to learn more about the ARC.

## API version

The SAP SuccessFactors connector supports both [OData API v2](https://help.sap.com/docs/successfactors-platform/sap-successfactors-api-reference-guide-odata-v2/about-sap-successfactors-odata-apis-v2) and [OData API v4](https://help.sap.com/docs/successfactors-platform/sap-successfactors-api-reference-guide-odata-v4/about-odata-api-reference-guide-v4).

## Prerequisites

To connect to SAP SuccessFactors, you must complete the following prerequisite steps:

1. [Create an integration system user (ISU)](#create-isu)
2. [Register an OAuth 2.0 client application](#register-oauth-app)

### Create an integration system user

Complete the following steps to create an integration system user (ISU) in SAP SuccessFactors:

1. Sign in to your SAP SuccessFactors instance.
   
2. Configure an integration service user (ISU). This is a unique user, whose sole purpose is connecting to Workato.
   
3. Assign the ISU a role that includes the following permissions:
   
   - **General User Permission**
     
     - User login – _describe_
     - SFAPI user login – _describe_
     - Login method (password) – _describe_
   - **Manage System Properties**
     
     - Picklist management – _describe_
     - Picklists mappings set up – _describe_
   - **Employee Central API**
     
     - Employee central foundation SOAP API – _describe_
     - Employee central HRIS SOAP API – _describe_
     - Employee central foundation OData API (read-only) – _describe_
     - Employee central HRIS OData API (read-only) – _describe_
     - Employee central foundation OData API (editable) – _describe_
     - Employee central HRIS OData API (editable) – _describe_
   - **Manage Integration Tools**
     
     - Allow admin to access OData API through basic authentication – _describe_
   - **Recruiting Permissions**
     
     - OData API job requisition create – _describe_
   - **Manage User**
     
     - User account OData entity – _describe_

Refer to [Role-based permissions in SAP](https://help.sap.com/docs/SAP_SUCCESSFACTORS_PLATFORM/d599f15995d348a1b45ba5603e2aba9b/1411316651974a7dae4b09a104172dc2.html) for more information on configuring permission roles and groups.

### Register an OAuth 2.0 client application

Complete the following steps to register Workato as an OAuth 2.0 client application:

1. Go to **Admin Center > API Center > OAuth Configuration for OData**. You can also access the tool by searching **Manage OAuth2 Client Applications** in the action search.
   
2. Click **Register Client Application**.
   
3. Provide a callback URL in the **Application URL** field. Use one of the following URLs:
   
   - `https://www.workato.com/oauth/callback`
   - `https://app.workato.com/oauth/callback`
4. Select **Bind to user**, then enter the ISU user ID.
   
5. Click **Generate X.509 Certificate** and complete the required fields.
   
6. Click **Generate**, then download and save the certificate.
   
7. Click **Register** to save your registration. Save the **API Key**, which serves as the client ID.
   

Refer to [Registering Your OAuth 2.0 Client Application](https://help.sap.com/docs/SAP_SUCCESSFACTORS_PLATFORM/d599f15995d348a1b45ba5603e2aba9b/6b3c741483de47b290d075d798163bc1.html) for more information.

> **OAUTH 2.0**
> 
> These steps are required if you plan to connect to SAP SuccessFactors using [OAuth 2.0 authentication](#oauth-2).

## How to connect to SAP SuccessFactors

The SAP SuccessFactors connector supports the following authentication methods:

- [OAuth 2.0](#oauth-2) (recommended)
- [Basic](#basic)

### OAuth 2.0 authentication

Complete the following steps to connect to SAP SuccessFactors using OAuth 2.0 authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `SAP SuccessFactors` as your connection on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Connect to SAP SuccessFactors](/assets/oauth-2.DUXE_jI2.png)_Connect to SAP SuccessFactors_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Specify whether to use a cloud or on-prem connection in the **Connection type** drop-down menu.
   
6. Select **OAuth 2.0** from the **Authentication type** drop-down menu.
   
7. Select an API version to use from the **OData version** drop-down menu. Options include **OData V2** and **OData V4**. Defaults to **OData V2** if left blank.
   
   > **ODATA V4 REQUIRES OAUTH 2.0**
   > 
   > **OData V4** is only available when you select **OAuth 2.0** as the authentication type.
   
8. Enter the company ID in the **Company ID** field. You can find the company ID by selecting **Show version information** under the profile drop-down menu, or by looking for the term `company=` in the URL.
   
9. Enter the SAP SuccessFactors user ID in the **User ID** field.
   
10. Enter the [OAuth client ID](#register-oauth-app) in the **Client ID** field.
    
11. Enter the X.509 private key used to sign SAML assertion in the **Private key** field. It can be the private key of a self-signed X.509 certificate or the private key of an X.509 certificate generated by SAP SuccessFactors. The private key is a base64-encoded string enclosed between `-----BEGIN ENCRYPTED PRIVATE KEY-----` and `----- END ENCRYPTED PRIVATE KEY-----`. Enter only the enclosed string without the beginning and ending lines to prevent errors.
    
12. Select your corresponding SAP SuccessFactors environment from the **Environment** drop-down menu.
    
    Alternatively, you can click the **Environment** field's toggle and provide the endpoint URL for accessing the OData API. For example, `https://api4.successfactors.com`.
    
13. Optional. Fill in the **Application interface key** field. Defaults to Workato's application interface key when left blank.
    
14. Optional. Select the API server standard UTC timezone in the **API server timezone** field. For example, `-0500` for DC8 Production environment. Alternatively, you can click this field's toggle to enter the timezone manually.
    
    Refer to the SAP documentation for more information on [tenant and server time zones](https://help.sap.com/docs/SAP_SUCCESSFACTORS_RELEASE_INFORMATION/8e0d540f96474717bbf18df51e54e522/d5e86fa8bb564058820592217d3a21d4.html?locale=en-US).
    
15. Click **Connect**.
    

### Basic authentication

Complete the following steps to connect to SAP SuccessFactors using basic authentication:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `SAP SuccessFactors` as your connection on the **New connection** page.
   
3. Enter a name for your connection in the **Connection name** field.
   
   ![Connect to SAP SuccessFactors](/assets/basic-auth.CkN-WEFB.png)_Connect to SAP SuccessFactors_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Specify whether this connection is a cloud or on-prem connection in the **Connection type** field.
   
6. Select **Basic** from the **Authentication type** drop-down menu.
   
7. Enter the company ID in the **Company ID** field. You can find it in **Show version information** under the profile drop-down menu or by looking for the term `company=` in the URL.
   
8. Enter the SAP SuccessFactors user ID in the **User ID** field.
   
9. Enter the password for your SAP SuccessFactors account in the **Password** field.
   
10. Select your corresponding SAP SuccessFactors environment from the **Environment** drop-down menu.
    
    Alternatively, you can click the **Environment** field's toggle and provide the endpoint URL for accessing the OData API. For example, `https://api4.successfactors.com`.
    
11. Optional. Fill in the **Application interface key** field. Defaults to Workato's application interface key when left blank.
    
12. Optional. Select the API server standard UTC timezone in the **API server timezone** field. For example, `-0500` for DC8 Production environment. Alternatively, you can click this field's toggle to enter the timezone manually.
    
    Refer to the SAP documentation for more information on [tenant and server time zones](https://help.sap.com/docs/SAP_SUCCESSFACTORS_RELEASE_INFORMATION/8e0d540f96474717bbf18df51e54e522/d5e86fa8bb564058820592217d3a21d4.html?locale=en-US).
    
13. Click **Connect**.

---
