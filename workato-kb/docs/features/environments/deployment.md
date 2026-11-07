<!-- source: https://docs.workato.com/en/features/environments/deployment | lastmod: 2026-07-07 -->
> Learn how to deploy Workato projects across Development, Test, and Production environments, including dependencies and deployment details.

# Understanding project deployment with environments

With just a few clicks, you can easily deploy projects to different environments. For example, when a recipe is ready for testing, you can deploy it from the **Development** (DEV) to the **Test** environment.

This guide covers the following topics:

- [Deployment basics](#deployment-basics)
- [Deploying projects](#deploying-projects)
- [Viewing deployment details](#viewing-deployment-details)
- [Resources](#resources)

Video guide: Build, test, and deploy with Environments

[Video](https://www.youtube.com/embed/xQ86ngn1rok)

  

> **FEATURE AVAILABILITY**
> 
> Environments are available to customers on specific pricing plans. Refer to your pricing plan and contract to learn more.
> 
> Learn more about [enablement for Embedded partners](/en/features/environments#how-do-i-get-it) and [Environments for Embedded customers](/en/oem/embedded-environments).

* * *

## Deployment basics

- [How does deployment work?](#how-does-deployment-work)
- [Who can perform deployments?](#who-can-perform-deployments)
- [What can be deployed?](#what-can-be-deployed)
- [Where can I deploy projects?](#where-can-i-deploy-projects)
- [How are recipe dependencies handled?](#how-are-recipe-dependencies-handled)
- [How do deployment updates affect the target environment?](#how-are-updates-made-in-the-target-environment)

### How does deployment work?

In Workato, deployment is a process that pushes recipes and other assets from one [environment](/en/features/environments) to another as part of recipe lifecycle management (RLCM). Recipes are typically developed in the **Development** environment, deployed to the **Test** environment for validation, and then deployed to the **Production** environment directly from the **Development** environment following testing and approval.

When deploying a project, you can either deploy to an environment or [download a ZIP file version as a package](#downloading-a-project-package).

### Who can perform deployments?

To deploy a project to an environment, a collaborator needs:

- Access to the project to be deployed
- The [deployment privilege](/en/user-accounts-and-teams/role-based-access/new-model/privileges-reference#project-settings) enabled in the environment containing the project.
- The [deployment privilege](/en/user-accounts-and-teams/role-based-access/new-model/privileges-reference#project-settings) enabled in the environment you plan to deploy the project to.

For example, to deploy a project named **HRBot** from **Development** to **Test**, you must have access to the **HRBot** project in **Development**, and the deployment privilege must be enabled in both the **Development** and **Test** environments.

> **ENVIRONMENT ACCESS RESTRICTION**
> 
> A collaborator with access to only one environment can't deploy projects.

### What can be deployed?

Deployment occurs at the **project** level. You can deploy any type of asset, but only from a single project at a time. These assets include:

- Recipes
- Connections
- Folders
- Lookup tables
- Data tables
- Workflow apps
- Pages
- Genies
- Skills
- Knowledge bases
- Knowledge recipes
- App events

### Where can I deploy projects?

You can only deploy projects from the **Development** environment. The **Test** and **Production** environments serve specific purposes:

- Use the **Test** environment to test recipes.
- Use the **Production** environment to run finalized recipes.

This restriction ensures consistency, prevents conflicts, and records a complete deployment history in your project's **Deployments** tab.

![Structure of standard environments in a workspace: Dev, Test, and Production](/assets/environments-structure.CPhsUs9H.png)

For guidance on structuring your workspace and planning recipe development using environments, see [Environment structure and planning](/en/features/environments#environment-structure-and-planning).

### How are recipe dependencies handled?

When a project is deployed to an environment, dependent relationships are deployed and maintained:

- **If the dependency exists in the target environment**, the reference will be automatically resolved.
  
  For example: A lookup table used by a recipe already exists in the target environment prior to deployment. In this case, the reference would be automatically resolved.
  
- **If the dependency doesn't exist in the target environment**, then the reference must be resolved by you.
  
  For example: A lookup table used by a recipe already doesn't exist in the target environment prior to deployment. In this case, you'd have to deploy the lookup table from the source environment to resolve the reference.
  

> **RE-ESTABLISH CONNECTIONS AFTER DEPLOYMENT**
> 
> Reconnect connections after deploying them to an environment for the first time. Recipes cannot run until you re-establish the connections.

### How do deployment updates affect the target environment?

Workato makes deployment updates in the target environment based on the project’s status:

- **If the project doesn't exist in the target environment**, all recipes and assets deploy as new.
  
- **If the project exists in the target environment**, Workato overwrites existing recipes and assets and adds new recipes and assets. However, if you move a recipe or asset to a different folder in the source environment, the target environment does not recognize this as an update. Instead, a new instance of the recipe or asset is created in a new folder within the target environment, keeping the original instance in its previous folder. This results in two copies of the recipe or asset in the target environment, one in the original folder and one in the new folder.
  

Workato does not delete recipes or assets removed from the source environment. For example, if you delete a Slack connection in **Development** and deploy to **Test**, the Slack connection remains in **Test**.

## Deploying projects

- [Deploying to an environment](#deploying-to-an-environment)
- [Downloading a project package](#downloading-a-project-package)

### Deploying to an environment

Ready to start deploying projects to environments? Check out the [Deploying a Project to an Environment guide](/en/features/environments/deploying-projects-to-an-environment) for step-by-step instructions.

### Downloading a project package

Similar to [exporting a package using RLCM](/en/recipe-development-lifecycle/export), you can download a ZIP file package of a project. You can download the entire project or customize which recipes and other assets to include.

After the download is complete, you can [upload the package to a version control system](/en/recipe-development-lifecycle/rdlc-guide-source-control) or [import it](/en/recipe-development-lifecycle/import) to another Workato instance.

* * *

## Viewing deployment details

You can view deployment details in a project's **Deployments** tab.

> **DEPLOYMENT PERMISSIONS**
> 
> Only users with deployment permissions can see this tab. Project deployment logs are only available in the **Development** environment.

![Deployments tab](/assets/deployments-tab.DC9WJSmI.png)_Deployments tab_

To see what was deployed, click an entry in the history list of past deployments. This action opens a new page displaying the deployment details.

![Deployments tab](/assets/view-deployments.Dy80fhgy.png)_View deployment details_

In addition to the deployment activity log, all deployments are included in your account's [Activity audit log](/en/features/activity-audit-log) (**Operations hub > Activity audit**).

* * *

## Resources

- [Environments overview](/en/features/environments)
- [Environments best practices](/en/features/environments/deployment)
- [Deploying a project to an environment](/en/features/environments/deploying-projects-to-an-environment)
- [Managing environment access](/en/user-accounts-and-teams/role-based-access/managing-environment-access)

---
