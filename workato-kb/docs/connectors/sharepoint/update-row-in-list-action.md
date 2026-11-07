<!-- source: https://docs.workato.com/en/connectors/sharepoint/update-row-in-list-action | lastmod: 2026-06-29 -->
> The update row action in the SharePoint connector lets you update a single row in a list you specify by its row ID and field values.

# SharePoint - Update row in SharePoint list action

This action updates a row in a specified SharePoint list.

## Input

| Field | Description |
| --- | --- |
| Site name | Provide the name of the SharePoint site to which you plan to connect. If left blank, Workato connects to your default home site, as specified in your connection settings. The site name is located in the URL of the site page. For example, if the URL is `https://company-name.sharepoint.com/sites/product`, the site name is `product`. If you plan to connect to a different site, you can provide the absolute URL to override the base URL. For example, if the input is `https://company-name.sharepoint.com/teams/product`, Workato connects to the provided input. Alternatively, you can provide the absolute URL to connect to a different site. For example, entering `https://company-name.sharepoint.com/teams/product` connects Workato to the specified site directly. |
| List | Specify the specific list where you plan to update a row. |
| Row ID | Provide the ID of the row to be updated. |
| **{List fields}** | Provide input for the list fields you plan to update. These fields are dynamic and are determined by the list you select. For example, a list of employees could include fields for the employee name, title, and contact information. |

## Output

The output datatree contains the status of the update operation.

| Field | Description |
| --- | --- |
| Success | The status of the update operation. |

---
