<!-- source: https://docs.workato.com/en/connectors/sharepoint/rename-file-folder-action | lastmod: 2026-06-29 -->
> The rename a file or folder action in the SharePoint connector lets you give a file or folder a new name in SharePoint.

# SharePoint - Rename a file or folder in SharePoint action

This action renames a file or folder in SharePoint.

## Input

| Field | Description |
| --- | --- |
| Site name | Provide the name of the SharePoint site to which you plan to connect. If left blank, Workato connects to your default home site, as specified in your connection settings. The site name is located in the URL of the site page. For example, if the URL is `https://company-name.sharepoint.com/sites/product`, the site name is `product`. If you plan to connect to a different site, you can provide the absolute URL to override the base URL. For example, if the input is `https://company-name.sharepoint.com/teams/product`, Workato connects to the provided input. Alternatively, you can provide the absolute URL to connect to a different site. For example, entering `https://company-name.sharepoint.com/teams/product` connects Workato to the specified site directly. |
| Parent folder | Specify the parent folder containing the file. |
| File name | Specify the name of the file you plan to rename. |
| New file name | Provide a new name for the file or folder. |

## Output

The output datatree contains the status of the move operation.

| Field | Description |
| --- | --- |
| Status | Indicates the status of the operation. |

---
