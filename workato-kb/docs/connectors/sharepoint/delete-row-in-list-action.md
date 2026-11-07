<!-- source: https://docs.workato.com/en/connectors/sharepoint/delete-row-in-list-action | lastmod: 2026-06-29 -->
> The delete row action in the SharePoint connector lets you delete a row from a list you specify.

# SharePoint - Delete row in SharePoint list action

This action deletes a row in a SharePoint list you specify.

## Input

| Field | Description |
| --- | --- |
| Site name | Provide the name of the SharePoint site to which you plan to connect. If left blank, Workato connects to your default home site, as specified in your connection settings. The site name is located in the URL of the site page. For example, if the URL is `https://company-name.sharepoint.com/sites/product`, the site name is `product`. If you plan to connect to a different site, you can provide the absolute URL to override the base URL. For example, if the input is `https://company-name.sharepoint.com/teams/product`, Workato connects to the provided input. Alternatively, you can provide the absolute URL to connect to a different site. For example, entering `https://company-name.sharepoint.com/teams/product` connects Workato to the specified site directly. |
| List | Specify the list in which you plan to delete a row. |
| Row ID | Provide the ID of the row you plan to delete. |

## Output

The output datatree contains the status of the delete operation.

| Field | Description |
| --- | --- |
| Success | The status of the delete operation. |

---
