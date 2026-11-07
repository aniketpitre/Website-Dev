<!-- source: https://docs.workato.com/en/api-mgmt/api-collections/recipe-collection | lastmod: 2026-08-10 -->
> Create an API recipe collection in Workato to expose business logic through secure, customizable endpoints powered by individual API recipes.

# API recipe collection

An API recipe collection is a set of endpoints, each powered by a single [API recipe](/en/api-mgmt/api-recipes/). Each API recipe maps to one endpoint.

You can use recipe collections to expose business logic through secure, customizable API endpoints. These endpoints are available to internal users, such as teammates, and external users, such as customers or third-party systems, even if they don't have Workato accounts.

You can also use API recipe collections to allow other recipes in your workspace to call endpoints and share logic. Group related API recipe endpoints into a collection to manage access and control more effectively.

> **COLLECTION TYPES**
> 
> Refer to [Collection types](/en/api-mgmt/api-collections#collection-types) to determine whether an API proxy collection, API recipe collection, SOAP API recipe collection, or AI gateway collection fits your use case.

## Prerequisites

Complete the following before you create an API recipe collection:

- [Create a project](/en/projects#create-a-project-and-folder) or select an existing one.
- Create a folder in the project and add one or more [API recipes](/en/api-mgmt/api-recipes/). New API recipes you add to this folder are included in the collection automatically. We recommend that you group related API recipes together.

## Create an API recipe collection

Complete the following steps to create an API recipe collection:

1. Sign in to your Workato account.
   
2. Go to **Platform > API platform > API collections**.
   
3. Select **\+ Create new collection**.
   
4. Use the **Choose collection type** drop-down menu to select **API recipe collection**.
   
   ![Select API recipe collection](/assets/api-recipe-collection-choose-type.o15cDWmr.png)_Select API recipe collection_
   
5. Use the **Choose a configuration type** drop-down menu to specify the configuration you plan to use for your recipe collection:
   
   - **Use existing recipes**: Select a **Recipe folder**. Workato creates one endpoint for each API recipe in the folder.
     
   - **Import OpenAPI Specification**: Upload a JSON or UTF-8 encoded YAML [OpenAPI 3.0](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md) file, or enter its URL. Enclose time values in quotes. For example, use `"2024-07-18T10:00:00Z"` instead of `2024-07-18T10:00:00Z`.
     
6. Go to **Customize endpoints** and select the checkbox for each endpoint you plan to add to the collection.
   
7. Optional. Select **Edit details** next to an endpoint to configure its settings:
   
   1. Select the **HTTP method** for the endpoint.
      
      ![Customize API recipe collection endpoints](/assets/api-recipe-collection-customize-endpoints.DRnbutMI.png)_Customize API recipe collection endpoints_
      
   2. Enter an **Endpoint name**.
      
   3. Define the **Endpoint path**. It can include [path parameters](/en/api-mgmt/api-endpoints#path-templating). Ensure that you follow the [endpoint path guidelines](/en/api-mgmt/api-endpoints#endpoint-path-guidelines).
      
   4. Enter an **Endpoint description**.
      
   5. Required when you toggle **Customize timeout**. Customize the time that a request is given to complete in the **Request timeout** field. The default value is 30 seconds and the maximum value is 240 seconds.
      
   6. Enable **Schema validation** to validate all requests made to this endpoint.
      
   7. Enforce additional authorization logic using formulas in the **Request authorization** field.
      
   8. Required when you toggle **Cache response**. Use seconds to specify how long to store a response in cache before it's refreshed or deleted in the **Time-to-live period** field. The maximum is 3600 seconds.
      
8. Go to **Set collection details** and configure the following:
   
   1. Enter a **Collection name** for the API collection.
      
   2. Enter a **Version**. Use a unique identifier between 1–10 characters. Collections with the same name but different versions are treated as distinct.
      
   3. Enter a **Description** for the API collection.
      
9. Select **Create collection**. Workato adds the collection and displays the number of endpoints created.
   
   ![Create API recipe collection](/assets/api-recipe-collection-create.DHjUEV4V.png)_Create API recipe collection_
   
10. Select **View API collection**.
    
11. Toggle the **Inactive** button activate the endpoints you plan to use.
    
    > **NEW ENDPOINTS INACTIVE BY DEFAULT**
    > 
    > All new endpoints are inactive by default. You must activate each one before other recipes or apps can call it.
    
    ![Activate API endpoint in a collection](/assets/api-collection-activate-endpoint.Cqgx2E9m.png)_Activate API endpoint in a collection_
    
    Refer to [Activating or deactivating an endpoint](/en/api-mgmt/api-endpoints#activating-or-deactivating-an-endpoint) for more information about activating endpoints.
    
12. Assign the collection to a client's API key to enable access for specific users or apps. [Learn how to create a new API key.](/en/api-mgmt/api-client-mgmt#create-a-new-application)

---
