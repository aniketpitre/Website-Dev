<!-- source: https://docs.workato.com/en/recipe-development-lifecycle | lastmod: 2026-07-07 -->
> Learn how recipe lifecycle management (RLCM) lets teams export and import packages to move recipes and dependencies across Workato environments.

# Recipe lifecycle management

Organizations typically plan, test, and deploy new integrations with a recipe development lifecycle. This may involve moving recipes from a development environment to a testing environment, or from a testing environment to a production/deployment environment.

> **EXPLORE ENVIRONMENTS FOR ENHANCED FUNCTIONALITY**
> 
> Enhance your recipe development experience by integrating Recipe Lifecycle Management (RLCM) with Environments.
> 
> Environments are built on the same principles as RLCM and offer a seamless deployment experience across unified workspaces. Learn more about [Environments](/en/features/environments).

Recipe lifecycle management (RLCM) is one of the features that enables teams to collaborate concurrently in a planned and controlled recipe development effort. This tool allows the export and import of packages which contain recipes and their dependencies (lookup tables, message templates, and more). This allows teams to maintain their integration recipes across their different teams' environments.

Check out this video to learn about recipe lifecycle management!

[Video](https://www.youtube.com/embed/WfehKT5nnGo?rel=0&rel=0)

* * *

## Packages

Users can export and import their recipes as packages. RLCM supports exporting the following assets in a package:

- Recipes in a chosen folder
- Sub-folders and recipes in those sub-folders
- Associated skills
- Associated genies
- Associated MCP servers
- Associated connections
- Associated custom connectors (SDK connectors)
- Associated [recipe functions](/en/connectors/recipe-functions) or [callable recipes (deprecated)](/en/features/callable-recipes)
- Associated lookup tables
- Associated shared schemas
- Associated message templates
- Associated environment properties
- Associated common data models
- Associated API endpoints
- Associated API collections
- Associated Event topics
- Associated Workflow app configuration
- Associated data tables
- Associated test cases

Importing and exporting packages is useful when teams are collaborating across different Workato workspaces. For example, the development team can use RLCM to move recipes over to the QA team's workspace, or to the production team's workspace. Consultants can also utilize this feature to move comprehensive integrations into their clients' workspaces.

Go to **Tools > Recipe lifecycle management** to access this tool.

![Recipe lifecycle management](/assets/rlcm.CykvMyyK.png)_Recipe lifecycle management_

* * *

## Process walkthrough

Learn more about the process of using the Recipe lifecycle management feature in the following documents:

- [Planning for lifecycle management](/en/recipe-development-lifecycle/rdlc-guide-planning)
- [Exporting: Packaging recipes and dependencies](/en/recipe-development-lifecycle/export)
- [Importing: Deployment](/en/recipe-development-lifecycle/import)
- [Working with external source control systems](/en/recipe-development-lifecycle/rdlc-guide-source-control)

* * *

## Recipe lifecycle management automation

You can automate the process of importing and exporting package with our [Recipe lifecycle management APIs](/en/workato-api/recipe-lifecycle-management).

---
