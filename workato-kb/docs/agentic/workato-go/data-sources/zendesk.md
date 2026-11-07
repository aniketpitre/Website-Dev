<!-- source: https://docs.workato.com/en/agentic/workato-go/data-sources/zendesk | lastmod: 2026-06-30 -->
> Configure Zendesk as a Workato GO data source to index and search Help Center articles while following user-level article permissions.

# Add a Zendesk data source to Workato GO

You must configure Zendesk to allow Workato GO to search across Zendesk Help Center articles, follow user-level article permissions, and sync content and permission updates multiple times per hour after initial indexing.

> **INDEXED DATA**
> 
> Workato GO indexes only Zendesk Help Center articles.

## Enable API access in Zendesk

You must enable API access to allow Workato GO to access your Zendesk instance.

> **PRIVILEGE REQUIREMENTS**
> 
> You must be a Zendesk admin to complete this configuration.

Complete the following steps to enable API access within Zendesk:

1. Sign in to your Zendesk Admin Center.
   
2. Go to **Apps and Integrations > APIs > Zendesk API**.
   
3. Enable **Token Access**.
   
4. Generate a new API token.
   
5. Store the API token in a secure location. Your API token is required when you add Zendesk as a data source.
   

## Add Zendesk as a data source

You must complete the following steps to add Zendesk as a data source in Workato GO:

1. Sign in to your Workato GO account.
   
2. Expand the **Admin** menu in the sidebar and click **Data sources**.
   
   ![Data sources](/assets/data-sources.D6kxvMoA.png)_Go to **Admin > Data sources**_
   
3. Click **Add Data Source**. The **Add Data Source** page displays.
   
4. Select the Zendesk app.
   
   ![Select Zendesk](/assets/add-a-data-source.CtpmQXk_.png)_Select Zendesk_
   
5. Enter a name for your data source in the **Name** field.
   
6. Enter the domain for your data source in the **Zendesk Domain** field. For example: `https://acme.zendesk.com`
   
7. Enter your API token from your data source in **API Token** field.
   
8. Enter the email associated with the data source in the **Email** field. For example: `admin@acme.com`
   
9. Click **Next**. The **Crawl** configuration page displays.
   
10. Optional. Click the **Allow ticket crawl** and **Allow article crawl** toggles to disable ticket and article crawling. Ticket and article crawling are enabled by default.
    
    > **CRAWLING IS NECESSARY TO BUILD A SEARCH INDEX**
    > 
    > Workato builds a search index by crawling your data source and parsing its contents, metadata, and permissions.
    
11. Click **Create**. Your data source is now listed on the **Data Sources** page.

---
