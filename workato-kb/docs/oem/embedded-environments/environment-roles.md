<!-- source: https://docs.workato.com/en/oem/embedded-environments/environment-roles | lastmod: 2026-06-30 -->
> Assign collaborator roles and deployment permissions for each Embedded Environment to control access across Development, Test, and Production.

# Collaborator roles and Environments

You can assign specific permissions to each collaborator and customize roles for each environment as needed after you provision Environments for a customer. A collaborator's permission level determines which elements are visible to them. There are two permissions most relevant for Environments, both of which can be independent:

- Access to an environment
- Deployment permissions within an environment

For example, a collaborator could have access to an environment without having the ability to deploy a project. The following image displays the UI for a collaborator with deployment permission for the Development and Production environments, but no deployment permission for the Test environment.

![No deploy permission](/assets/deployment-two-environments.Ba_fB57z.png)_Deployment permission in two environments_

> **CUSTOMER MANAGER ASSIGNED ROLES**
> 
> The role you assign applies to this customer manager in all customer workspaces and across all three environments (Development, Test, and Production) by default.
> 
> If you plan to provide different collaborator roles for each environment, you must add the collaborator individually to each Customer workspace (not as a Customer manager), and then specify the collaborator role for each environment. You can assign these roles in the user interface or through the Workato API.

## Deployments tab

The **Deployments** tab is only visible to collaborators that have access to two or more environments with deployment permission in at least two environments they have access to.

![No deployments tab](/assets/deployments-tab-not-visible.8Hcww8fM.png)_Deployments tab not visible_

![Deployments tab](/assets/deployments-tab.2iT_WOuC.png)_Deployments tab visible_

## Add deployment permission to a project role

Complete the following steps to grant deployment permission to a project role:

1. Log in to your Workato account and select the workspace where you plan to manage deployment permissions.
   
2. Click **Workspace admin > Access control > Project roles**.
   
3. Select an existing role or click the **Add project role** to create a new role.
   
4. Scroll down to the **Project settings** privileges and enable the appropriate permissions:
   
   - **Approve deployment**: Grants the ability to approve deployment requests.
   - **Review deployment**: Grants the ability to review deployment requests before approval.
5. Click **Save changes** when finished.
   

> **LEGACY PERMISSIONS MODEL**
> 
> In workspaces using the legacy permissions model, deployment access is granted by default to the **Admin** and **Analyst** system roles.

---
