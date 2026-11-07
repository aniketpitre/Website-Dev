<!-- source: https://docs.workato.com/en/connectors/recipe-functions/guides/walkthrough | lastmod: 2026-06-29 -->
> Walk through building a recipe function with Quickbooks and Salesforce in Workato so reusable logic can be called from other recipes.

# Recipe functions walkthrough

If your interest around **Recipe functions** is piqued but you're still a bit confused, this walkthrough can help.

In this guide, we'll walk you through creating a recipe function using Quickbooks and Salesforce.

- **What's our goal?** To automate invoice creation in Quickbooks when opportunities are **closed-won** in Salesforce.
  
- **What do we need to know?** Invoices in Quickbooks must be associated with a customer. To create an invoice, we'll also need to create a customer if one doesn't already exist.
  
  Customers can be created form multiple places such as a point-of-sale (POS) system, invoices from vendors, etc. This means that the logic for creating customers could be used in multiple places.
  

With Recipe functions, we can build a recipe that contains the steps required to create a Quickbooks customer and then call it from other recipes. This approach means logic doesn't have to be duplicated in multiple recipes.

* * *

## Step 1: Create A Recipe Function

1. Create a new recipe, using **Build a recipe function** as the **Starting point**.
   
2. Define the fields for the trigger. These fields determine:
   
   - The fields that are shown when a recipe action is used in a calling recipe, and
   - The data returned by the recipe for use as datapills in the calling recipe
   
   Refer to the [Recipe functions - New function call guide](/en/connectors/recipe-functions/triggers/new-function-call) for assistance.
   

* * *

## Step 2: Add Steps To The Recipe

Next, create the steps required to complete the action your recipe fulfills. In this case, our recipe needs to contain the steps necessary to:

- Check if a customer already exists in Quickbooks
- Based on the check, create a customer if one doesn't exist

* * *

## Step 3: Call The Recipe Function

Lastly, you'll create a recipe that calls the recipe function you created in [Step 1](#step-1-create-a-recipe-function).

1. Create a new recipe, setting the trigger to what you require.
   
2. When you're ready to call the recipe function:
   
   1. Add a new **Action in app** action.
      
   2. Search for the **Recipe functions** connector.
      
   3. From the **Actions** list, select the [Call recipe function (synchronous)](/en/connectors/recipe-functions/actions/call-recipe-function-synchronously) or [Call recipe function (asynchronous)](/en/connectors/recipe-functions/actions/call-recipe-function-asynchronously) action.
      
   4. In the action's **Recipe function** field, select the recipe you created in [Step 1](#step-1-create-a-recipe-function). The fields from the recipe function's **Input schema** will display as datapills.
      
3. Add additional steps to the recipe as needed.
   
4. When finished, click **Save**.

---
