<!-- source: https://docs.workato.com/en/connectors/bim360/get-folder-contents-action | lastmod: 2026-06-17 -->
> The get folder contents batch action retrieves the contents of a BIM 360 folder you specify.

# BIM 360 - Get folder contents action (batch)

The **Get folder contents** batch action retrieves the contents of a BIM 360 folder you specify.

## Input

| Input fields | Description |
| --- | --- |
| Hub name | Select the hub that contains the folder you plan to retrieve. |
| Project name | Select the project that contains the folder you plan to retrieve. |
| Folder | Select the folder you plan to retrieve. |
| Filters | Specify filters to refine the folder contents. Refer to BIM 360's [Filtering](https://aps.autodesk.com/en/docs/data/v2/developers_guide/filtering/) guide for more information about available filters. |

## Output

| Output fields | Description |
| --- | --- |
| Hub ID | The BIM 360 ID of the hub that contains the folder. |
| Project ID | The BIM 360 ID of the project that contains the folder. |
| Folder ID | The BIM 360 ID of the folder. |
| Data | Contains information about the folder contents, such as `Links` and `Attributes`. |

---
