<!-- source: https://docs.workato.com/en/connectors/zscaler-digital-experience | lastmod: 2026-08-17 -->
> Zscaler Digital Experience (ZDX) is a cloud-native service that monitors application, device, and network performance.

# Zscaler Digital Experience (ZDX)

[Zscaler Digital Experience (ZDX)](https://www.zscaler.com/products-and-solutions/zscaler-digital-experience-zdx) is a cloud-native service that monitors application, device, and network performance. Use the Zscaler Digital Experience (ZDX) connector to retrieve and search application, user, device, software inventory, department, and location records.

## Install Zscaler Digital Experience (ZDX) from the community library

Complete the following steps to install the Zscaler Digital Experience (ZDX) connector from the [community library](https://www.workato.com/browse/connectors):

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

The Zscaler Digital Experience (ZDX) connector supports the following authentication types:

- [OneAPI (Zidentity client credentials)](#oneapi-authentication)
- [Legacy ZDX API key](#legacy-authentication)

### OneAPI authentication

Use OneAPI if your Zscaler tenant issues Zidentity client credentials.

#### Obtain OneAPI credentials

Complete the following steps to obtain OneAPI credentials in Zscaler Digital Experience (ZDX):

1. Sign in to the [Zidentity Admin Portal](https://console.zscaler.com).
   
2. Go to **Administration > API Configuration > OneAPI > API Clients**.
   
3. Click **Add API client**.
   
4. Enter a **Name**, **Description**, **Status**, and **ZDX API resource/role scope** to configure the API client.
   
5. Copy the **Client ID** and **Client Secret**.
   
6. Copy your Zidentity vanity domain. The vanity domain is the subdomain of your login URL. For example, if your login URL is `https://acme.zslogin.net`, your vanity domain is `acme`.
   

#### Connect to Zscaler Digital Experience using OneAPI

Complete the following steps to set up a OneAPI connection to Zscaler Digital Experience (ZDX) in Workato:

1. Click **Create > Connection**.
   
2. Search for and select Zscaler Digital Experience (ZDX) as your connection.
   
3. Provide a unique name for the connection in the **Connection name** field.
   
   ![Set up a ZDX connection.](/assets/zdx-connection-setup.DPZ4NcaO.png)_Set up a ZDX connection._
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Authentication type** drop-down menu to select **OneAPI (Zidentity client credentials)**.
   
6. Enter your **Client ID** and **Client secret**.
   
7. Enter your **Vanity domain**.
   
8. Optionally, enter your **Zidentity cloud** if your tenant uses a non-production Zidentity environment, such as `beta`, or a FedRAMP cloud (`gov` or `govus`). Leave this field blank for production.
   
9. Click **Connect**.
   

### Legacy ZDX API key authentication

Use legacy API key authentication if your tenant has an API Key ID and Secret pair generated from the ZDX Admin Portal.

#### Obtain a legacy API key

Complete the following steps to obtain a legacy API key:

1. Sign in to the [Zidentity Admin Portal](https://console.zscaler.com).
   
2. Go to **Administration > Authentication > API Keys** and generate an API key pair.
   
3. Click **Create new API key**.
   
4. Enter a **Name** and select a **Role** to configure the API key.
   
5. Click **Create key**.
   
6. Copy the **Key ID** and **Key Secret**. The key secret is shown only once. [Learn more](https://help.zscaler.com/zdx/about-api-keys).
   

#### Connect to Zscaler Digital Experience using a legacy API key

Complete the following steps to set up a legacy API key connection to Zscaler Digital Experience (ZDX) in Workato:

1. Click **Create > Connection**.
   
2. Search for and select Zscaler Digital Experience (ZDX) as your connection.
   
3. Provide a unique name for the connection in the **Connection name** field.
   
   ![Set up a ZDX connection.](/assets/zdx-connection-setup.DPZ4NcaO.png)_Set up a ZDX connection._
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Authentication type** drop-down menu to select **Legacy ZDX API key**.
   
6. Enter your **API key ID** and **API key secret**.
   
7. Optionally, enter your **ZDX cloud** name if your tenant is on a different cloud than the default `zdxcloud`.
   
8. Optionally, enter your tenant's **API version**. Defaults to `v1`.
   
9. Click **Connect**.

---
