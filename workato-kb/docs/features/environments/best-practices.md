<!-- source: https://docs.workato.com/en/features/environments/best-practices | lastmod: 2026-06-30 -->
> Learn best practices for using Workato Environments, including asset organization, connection management, and collaborator access.

# Best practices for using Environments

This guide provides tips on the following topics when working with [Environments](/en/features/environments):

> **FEATURE AVAILABILITY**
> 
> This guide is applicable to accounts with the [Environments](/en/features/environments) feature enabled. Environments is available for direct and Embedded users. Learn more about [Environments for Embedded customers](/en/oem/embedded-environments).

* * *

## Asset organization

We recommend organizing assets that you want to release together - such as recipes and connections - together into projects.

As it's only possible to deploy a single project at a time, this approach reduces the likelihood of missing dependencies.

Check out the [Recipe Functions (Dependency) Management section](#recipe-function-dependency-management) for guidance on managing reusable recipe dependencies.

* * *

## Connection management

When working in the Development and Test environments, we strongly recommend using a sandbox version of your applications to create connections. Using a sandbox ensures that live data isn't altered by accident.

Workato keeps recipe logic intact between environments even after deployment. When you deploy a connection to an environment for the first time or when the connection changes, you'll be prompted to re-connect the connection in the environment.

This allows you to use test data for development and testing, ensuring production data is touched after recipes have been vetted.

* * *

## Collaborator access

One of the key benefits of environments is that it securely enables collaboration while ensuring mission-critical recipes don't change without notice.

To get this benefit, we recommend a tiered approach to collaborator access:

- **Development** access for **all** collaborators
- **Test** access for **some** collaborators
- **Production** access for a **few** collaborators

By limiting access, you can allow your team to build and collaborate without risking accidental changes to production.

Refer to the [Managing Environment access guide](/en/user-accounts-and-teams/role-based-access/managing-environment-access) for more info about granting environment access.

* * *

## Recipe function (dependency) management

While we recommend [organizing assets as a unit into top-level projects](#asset-organization), you can still develop recipes that use re-use recipes with some best practices.

If using [Recipe functions](/en/connectors/recipe-functions), we recommend organizing the recipes into their own project. This approach to organization allows you to easily manage the lifecycle of these recipes independent of the recipes that depend on them.

To deploy these assets, you can:

1. Create a project to contain all Recipe functions.
   
2. Build and develop Recipe functions within this project.
   
3. Deploy the Recipe functions project to the target environment.
   
4. Deploy the dependent projects to the same target environment. Once the dependent projects are deployed, errors from missing dependencies will be automatically resolved.
   

* * *

## Resources

- [Environments overview](/en/features/environments)
- [Managing environment access](/en/user-accounts-and-teams/role-based-access/managing-environment-access)
- [Understanding project deployment](/en/features/environments/deployment)

---
