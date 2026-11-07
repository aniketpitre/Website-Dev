<!-- source: https://docs.workato.com/en/connectors/recipeops | lastmod: 2026-11-03 -->
> Use RecipeOps by Workato to monitor and manage active recipes, automating responses to stopped recipes and failed jobs.

# RecipeOps by Workato

The RecipeOps connector enables you to build recipes to monitor and manage active recipes.

Stopped recipes and failed jobs can have automated responses and notifications to mitigate their impact on critical business processes. You can also retrieve account, recipe, and job details using the RecipeOps connector.

> **FEATURE AVAILABILITY**
> 
> RecipeOps by Workato is included in specific pricing plans. Refer to your pricing plan and contract to learn more.

* * *

## Usage inspiration

Need some inspiration? The RecipeOps connector can help you achieve the following:

- Notify designated workspace members when a key recipe is stopped. Workato sends notifications through Gmail, SMS, Twilio phone call or IVR, Slack, and more.
- Schedule on-call workspace members and build escalation policies.
- Flag low transaction counts and notify workspace members.
- Build job history report logs or audit reports in Google Sheets.
- Build recipe reports for an overview of automations and connected apps.

* * *

## Connection setup

You can use RecipeOps to monitor your workspace or someone else's.

Complete the following steps to set up your RecipeOps connection:

1. Click **Create > Connection** or press C twice.
   
2. Search for and select `RecipeOps` on the **New connection** page.
   
3. Provide a name for your connection in the **Connection name** field.
   
   ![RecipeOps connection setup](/assets/connect.CK_MBk8V.png)_RecipeOps connection setup_
   
4. Use the **Location** drop-down menu to select the project where you plan to store the connection.
   
5. Use the **Whose account are you managing?** drop-down menu to select the workspace you plan to monitor. Available options include:
   
   - **My account**: Monitor your own workspace.
   - **Someone else's account**: Monitor someone else's workspace. An admin from this workspace must create an [API client](/en/workato-api/api-clients) and share its API token with you to establish the connection.
   
   > **CONNECTION PRIVILEGES**
   > 
   > RecipeOps connections configured to monitor **My account** have admin privileges and access to all RecipeOps actions and triggers in your workspace, regardless of the role of the user creating the connection.
   
6. If you selected **Someone else's account**, enter the **API key** for the workspace you plan to monitor.
   
7. Click **Connect**.
   

> **EMBEDDED PARTNER WORKSPACE TRIGGERS**
> 
> The [Usage threshold reached](/en/connectors/recipeops/triggers/customer-usage-threshold-reached) trigger only works in Embedded partner workspaces. Although the trigger appears in other workspace types, jobs fail with an error if you add it to a recipe. Enter an API token from the Embedded partner workspace when you set up the RecipeOps connection. API tokens from Embedded customer workspaces result in an insufficient permissions error.

## Triggers

The RecipeOps connector supports the following recipe triggers:

- [Account connected](/en/connectors/recipeops/triggers/account-connected)
- [Account credentials refresh failed](/en/connectors/recipeops/triggers/account-credentials-refresh-failed)
- [Account disconnected](/en/connectors/recipeops/triggers/account-disconnected)
- [API concurrency threshold exceeded](/en/connectors/recipeops/triggers/concurrency-exceeded)
- [API policy quota violation](/en/connectors/recipeops/triggers/api-policy-violation)
- [API policy rate limit violation](/en/connectors/recipeops/triggers/rate-limit-violation)
- [Deployment approved](/en/connectors/recipeops/triggers/deployment-approved)
- [Deployment complete](/en/connectors/recipeops/triggers/deployment-complete)
- [Deployment failed](/en/connectors/recipeops/triggers/deployment-failed)
- [Deployment rejected](/en/connectors/recipeops/triggers/deployment-rejected)
- [Deployment re-opened for review](/en/connectors/recipeops/triggers/deployment-re-opened-for-review)
- [Job failed](/en/connectors/recipeops/triggers/new-failed-job)
- [Member invitation accepted](/en/connectors/recipeops/triggers/member-invitation-accepted)
- [New deployment submitted for review](/en/connectors/recipeops/triggers/new-deployment-submitted-for-review)
- [On-prem agent disconnected](/en/connectors/recipeops/triggers/opa-disconnected)
- [Package deployed](/en/connectors/recipeops/triggers/package-deployed)
- [Recipe started](/en/connectors/recipeops/triggers/recipe-started)
- [Recipe stopped by user](/en/connectors/recipeops/triggers/recipe-stopped-by-user)
- [Recipe stopped by Workato](/en/connectors/recipeops/triggers/recipe-stopped-by-workato)
- [Usage threshold reached](/en/connectors/recipeops/triggers/customer-usage-threshold-reached) (_Embedded partner workspaces only_)

* * *

## Actions

The RecipeOps connector supports the following recipe actions:

- [Get account details](/en/connectors/recipeops/actions/get-account-details)
- [Get recipe details](/en/connectors/recipeops/actions/get-recipe-details)
- [List connections](/en/connectors/recipeops/actions/list-connections)
- [List recipes](/en/connectors/recipeops/actions/list-recipes)
- [Rerun jobs](/en/connectors/recipeops/actions/rerun-jobs)
- [Search job history](/en/connectors/recipeops/actions/search-job-history)
- [Search recipes](/en/connectors/recipeops/actions/search-recipes)
- [Start recipe](/en/connectors/recipeops/actions/start-recipe)
- [Stop recipe](/en/connectors/recipeops/actions/stop-recipe)

---
