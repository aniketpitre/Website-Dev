<!-- source: https://docs.workato.com/en/connectors/ukg-pro-recruiting | lastmod: 2026-06-29 -->
> The UKG Pro (Recruiting) connector enables you to automate recruiting and onboarding workflows, simplifying hiring for recruiters and managers.

# UKG Pro (Recruiting)

[UKG Pro™ Recruiting](https://www.ukg.com/resources/product-info/ukg-pro-recruiting) is a recruiting system that simplifies recruiting for both recruiters and hiring managers. This connector automates key recruitment tasks, allowing your team to focus on creating a more engaging and immersive employee experience.

## Prerequisites

Before using the UKG Pro (Recruiting) connector in Workato, ensure you have an active UKG Pro (Recruiting) account with appropriate permissions to access APIs. The following information is required to establish a connection in Workato to the UKG Pro Recruiting and Onboarding APIs:

- Identity Host – Domain name of the instance of identity associated with the tenant.
  
- Tenant Alias – A tenant name. It may be seen in the browser bar when signed into UKG Pro Recruiting.
  
- Client ID – Unique identifier of the identity client provided to you by UKG.
  
- Client Secret – A client secret associated with the client ID provided to you by UKG.
  
- Grant Type – Method for obtaining an access token.
  

Contact the UKG support team or the UKG Identity team if you require community library access. Refer to [UKG's permissions documentation](https://developer.ukg.com/hcm/docs/onboarding-and-recruiting-authorization-and-permissions) for more information. Access to the community library is required to view UKG's permissions documentation.

## Connection Setup

Workato supports OAuth authentication to connect to UKG Pro (Recruiting). Complete the following steps to establish a connection to UKG Pro (Recruiting) in Workato:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select **UKG Pro (Recruiting)** as your connection on the **New Connection** page.
   
3. Provide a unique name for your connection in the **Connection name** field.
   
   ![UKG Pro (Recruiting) connection setup](/assets/connection-setup.kckgN4eU.png)_UKG Pro (Recruiting) connection setup_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Enter the **Client ID**, **Client Secret**, and **Tenant** for your UKG Pro (Recruiting) account, which are provided by the UKG team.
   
6. Select the necessary **Environment** and **OAuth scopes** required for your integration.
   
7. Click **Connect**.

---
