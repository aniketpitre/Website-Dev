<!-- source: https://docs.workato.com/en/connectors/canva-connect/upload-asset-action | lastmod: 2026-09-08 -->
> The Upload asset action uploads a file to a user's content library in Canva Connect and returns the uploaded asset.

# Canva Connect - Upload asset action

The **Upload asset** action uploads a file to a user's content library in Canva Connect and returns the uploaded asset. The action waits for the upload to complete and times out after `30` minutes.

## Input

| Input field | Description |
| --- | --- |
| Name | Enter the name of the asset. Maximum length is `50` characters. Can include emojis and other special characters. |
| File content | Enter the file you plan to upload. |

## Output

| Output field | Description |
| --- | --- |
| Asset ID | The unique ID of the uploaded asset. |
| Name | The name of the asset. |
| Tags | The tags attached to the asset. |
| Type | The asset type. |
| Import status | The state of the import (`in_progress`, `success`, or `failed`), and the error code and message if it failed. |
| Created at | The date and time the asset was created. |
| Updated at | The date and time the asset was last updated. |
| Thumbnail | The width, height, and URL of the asset's thumbnail image. |

---
