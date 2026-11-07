<!-- source: https://docs.workato.com/en/workbot-for-teams/workbot-ms-faqs | lastmod: 2026-07-07 -->
> Answers to common questions about Workbot for Microsoft Teams, including how it works with Workato recipes and runs business workflows.

# Workbot for Microsoft Teams FAQs

Get answers to frequently asked questions about Workbot for Microsoft Teams.

How does Workbot for Microsoft Teams work with Workato?

[Workbot for Microsoft Teams](/en/workbot-for-teams/workbot#workbot-for-microsoft-teams) is a bot platform built on top of the Workato integration platform. This allows you to run business workflows directly from Microsoft Teams.

What are the main functions of Workbot for Microsoft Teams?

Workbot for Microsoft Teams allows you to execute [business workflows](/en/workbot-for-teams/using-workbot-for-teams#using-workbot-for-microsoft-teams) from within Microsoft Teams using Workbot commands. For example, you can use Workbot commands to:

- Initiate workflows
- Create ServiceNow tickets
- List Salesforce opportunities

How do Workato recipes work with Workbot for Microsoft Teams?

Workato recipes are automated workflows that span multiple apps. When integrated with Workbot for Microsoft Teams, these recipes can be triggered by specific Workbot commands within Microsoft Teams, allowing you to perform tasks across different apps.

What are Workbot commands and how do they function?

Workbot commands are instructions given to Workbot in Microsoft Teams to execute specific tasks or workflows. When a command is sent to Workbot, it triggers the corresponding recipe in Workato to execute the workflow steps.

What are the requirements to use Workbot for Microsoft Teams?

To use Workbot for Microsoft Teams, a Microsoft work or school account is [required](/en/workbot-for-teams/getting-started#prerequisites). These accounts are typically set up by an organization’s administrator. Personal Microsoft accounts aren't supported.

What Microsoft Graph permissions are required for Workbot for Microsoft Teams?

Workbot for Microsoft Teams requires various [Microsoft Graph permissions](/en/workbot-for-teams/getting-started#microsoft-graph-permissions), including:

- `User.Read`
- `Channel.ReadBasic.All`
- `Team.ReadBasic.All`

These permissions allow Workbot to retrieve necessary user and team information without admin consent.

Who can install Workbot into a Microsoft organization and what roles are required?

The following [roles](/en/workbot-for-teams/getting-started#required-roles) are required to install Workbot within a Microsoft organization:

- Application administrator
- Cloud application administrator
- Global administrator
- Privileged role administrator

Note that Global administrators have the additional ability to consent on behalf of the organization during installation.

How do I set up Workbot for Microsoft Teams in Workato?

Complete the following steps to [set up Workbot](/en/workbot-for-teams/getting-started#connection-setup) for Microsoft Teams:

1. Navigate to the top search bar in Microsoft Teams, search for `Workbot`, and then select the **Workbot** app. Alternatively, you can go to **Apps** in the left navigation bar, search for `Workbot`, and select **Add for me**.
   
2. Type `help` and press **Send** to start a conversation with Workbot. You should see a welcome message with setup instructions.
   
3. Select the **Login** link in the welcome message to log in to your Workato account. If you don't have a Workato account, select [create a new one](https://www.workato.com/users/sign_up?_gl=1*1se4dfj*_gcl_au*MjA0Nzk3OTE4Ny4xNzA2Mjg0Njg1) instead.
   
4. Click **App Connection > create a new connection** and then search for Workbot for `Microsoft Teams`.
   
5. Click **Connect** and log in using your Microsoft credentials.
   
6. Click **Yes** when prompted to allow Workato to access your information. If you are a Global administrator, you can optionally Consent on behalf of your organization. This allows users to perform reconnection in Workato without requiring an administrator during reauthorization. Teams app permission policies must allow the Workbot app for your user.
   

How do I create and start my first Workbot recipe?

Basic steps to start your [first Workbot recipe](/en/workbot-for-teams/getting-started#use-workbot-in-a-recipe) include:

- Select a pre-built recipe from the Workato community, such as **View open opportunities in Salesforce**.
- Link your Microsoft Teams and Salesforce accounts to Workbot.
- Start the recipe.

How do I add Workbot to a team in Microsoft Teams?

To [add Workbot to a team](/en/workbot-for-teams/getting-started#add-workbot-to-a-team) in Microsoft Teams:

1. Search for `Workbot` in the **Apps** section of Microsoft Teams.
   
2. Select **Workbot** and click **Add to a team**. Team members can then interact with Workbot by mentioning it in commands.

---
