<!-- source: https://docs.workato.com/en/connectors/microsoft-dynamics-great-plains | lastmod: 2026-09-04 -->
> Connect Microsoft Dynamics Great Plains to Workato to automate business management and ERP workflows for small and mid-sized organizations.

# Microsoft Dynamics Great Plains

[Microsoft Dynamics Great Plains](https://learn.microsoft.com/en-us/dynamics-gp/) is a business management solution for small and mid-sized organizations that automates and streamlines business processes and helps you manage your business.

## Prerequisites

Complete the following steps to enable integration between Microsoft Dynamics Great Plains (GP) and Workato:

1. Install Microsoft Dynamics GP and SQL Server. Ensure that Dynamics GP and its associated SQL Server database are installed and operational within your network environment.
   
2. Set up the Workato [on-prem agent](/en/on-prem/agents) if your Dynamics GP instance is hosted on-premise. Ensure the agent is on the same server that hosts both eConnect and the SQL Server running the Dynamics GP database to minimize configuration complexity and improve performance. Additionally, ensure the agent has network access to the SQL Server and the necessary eConnect libraries.
   
3. Create an SQL Server login for a Windows domain user and assign it to the `DYNGRP` database role within the **DYNAMICS** database to enable the necessary read and write access.
   
4. Optional (recommended). Install eConnect Libraries using the **Additional Products** section of the Dynamics GP installer. You do not need to install the full eConnect Runtime module, only the eConnect libraries.
   
5. Install the eConnect Integration Service. This service allows communication between Workato and Dynamics GP through eConnect APIs, which facilitates transactions such as creating and updating records.
   

> **ADVANCED AND UNSUPPORTED USE CASES**
> 
> eConnect APIs do not support all GP entities. Use the [SQL Server](/en/connectors/mssql/introduction) connector to query or write directly to the backend database for modules not exposed through eConnect, such as custom tables and certain third-party add-ons.

> **ECONNECT SCHEMAS**
> 
> Refer to the eConnect schema [documentation](https://learn.microsoft.com/en-us/previous-versions/dynamicsgp/developer/cc508691\(v=msdn.10\)) for more information about table structures and relationships.

### Add an HTTP endpoint to eConnect

The **Microsoft Dynamics Great Plains** connector requires an HTTP endpoint in eConnect to access your GP database.

Complete the following steps to connect Workato to the GP database:

1. Stop the eConnect service if it is currently running.
   
2. Go to the eConnect `Service` folder. The path to the `Service` folder varies based on your installation location and version. For example: `C:\Program Files\Microsoft Dynamics\eConnect12\Service`.
   
3. Open the `Microsoft.Dynamics.GP.eConnect.Service.exe.config` file.
   
4. Add a new `<basicHttpBinding>` element to the `<bindings>` element:
   
   ```xml
   <basicHttpBinding>
   	<binding name="eConnectBasicHttpConfig" closeTimeout="00:10:00"
   		sendTimeout="00:10:00" allowCookies="false" maxBufferSize="2147483647"
   		maxBufferPoolSize="2147483647" maxReceivedMessageSize="2147483647">
   		<security mode="TransportCredentialOnly">
   			<transport clientCredentialType="Basic" />
   		</security>
   	</binding>
   </basicHttpBinding>
   ```
   
5. Add a new `<endpoint>` element to the `Microsoft.Dynamics.GP.eConnect.service <service>` element:
   
   ```xml
   <endpoint address="EntityOperations" binding="basicHttpBinding"
   	bindingConfiguration="eConnectBasicHttpConfig" name="eConnectServiceBasicHttpEndpoint"
   	contract="Microsoft.Dynamics.GP.eConnect.IEconnect">
   	<identity>
   		<dns value="localhost" />
   	</identity>
   </endpoint>
   ```
   
6. Add a new `<add>` element to the `<baseAddresses>` element:
   
   ```xml
   <add baseAddress="http://localhost/Microsoft/Dynamics/GP/eConnect/" />
   ```
   
7. Save your changes to the configuration file.
   
8. Start the eConnect service.
   

## How to connect to Microsoft Dynamics Great Plains

Connecting to the Microsoft Dynamics Great Plains involves the following steps:

1. [Download the Microsoft Dynamics Great Plains connector from the community](#community-download)
2. [Complete setup in Workato](#workato-setup)

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

### Download Microsoft Dynamics Great Plains connector from the community

Complete the following steps to install the Microsoft Dynamics Great Plains connector from the [community library](https://www.workato.com/browse/connectors):

1. Open the recipe editor and search for a connector. Alternatively, you can search for a connector in the [community library](https://www.workato.com/browse/connectors).
   
   ![Search for recipe editor](/assets/search-on-recipe-editor.VrZpf8zl.png)_Search for community connectors in the recipe editor_
   
2. Select the community connector you plan to install.
   
3. Click **Install** to install the connector from the community library.
   
   ![Click install](/assets/install-connector.BXpGZP9K.png)_Click **Install**_
   
4. Select **Release connector**. Alternatively, select **Review code** to review and modify the connector code before releasing it to the workspace.
   
   ![Release connector](/assets/release-and-review.kWToLwmF.png)_Release the connector_
   
5. Summarize any changes you made to the connector, then click **Release** to allow workspace collaborators to use the connector in recipes.
   
   ![The Confirm release dialog](/assets/release.CpEhhA-6.png)_The **Confirm release** dialog_
   

> **DATA INTEGRITY**
> 
> Be cautious when interacting directly with Microsoft Dynamics GP tables to avoid compromising data integrity.

### Complete setup in Workato

1. Click **Create > Connection** or press C twice.
   
2. Search for and select **Microsoft Dynamics Great Plains** as your connection in the **New Connection** page.
   
3. Provide a **Connection name** that identifies which Microsoft Dynamics Great Plains instance Workato is connected to. ![Microsoft Dynamics Great Plains Connection](/assets/connection.agIMKrF9.png)_Microsoft Dynamics Great Plains Connection_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Select your **Connection type** from the drop-down menu.
   
6. Provide the Windows domain user's **Username** and **Password**. Ensure the domain user has access to the Microsoft Dynamics GP SQL Server database machine. The user name must be configured in the SQL Server database and granted the `DYNGRP` security role.
   
7. Provide the **Econnect service endpoint**, which you can find in your Econnect WSDL or infer from your Econnect WSDL endpoint. For example, if your WSDL endpoint is `http://10.11.12.1/Microsoft/Dynamics/GP/eConnect/mex?singleWsdl`, then your Econnect Service URL is likely `http://10.11.12.1/Microsoft/Dynamics/GP/eConnect/EntityOperations`.
   
   > **ON-PREM CONNECTIVITY**
   > 
   > Set the **Econnect service endpoint** URL to the internal domain name (localhost) or internal IP address for on-prem connections.
   
8. Provide the **DB connection string** for all actions. This will be used if the DB connection string is not provided in the action itself, for example: `Integrated Security=true;Persist Security Info=false;Database=WORKATO;Data Source=EC2AMAZ-DEMO\SQLEXPRESS`
   
9. Click **Connect** to establish the connection.

---
