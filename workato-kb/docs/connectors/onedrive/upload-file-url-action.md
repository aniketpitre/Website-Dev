<!-- source: https://docs.workato.com/en/connectors/onedrive/upload-file-url-action | lastmod: 2026-06-29 -->
> The Upload file from URL action in the OneDrive connector uploads a file from a public URL to Microsoft OneDrive, overwriting any file with the same name.

# OneDrive - Upload file from URL action (file)

The **Upload file from URL** action uploads a file from a public URL to Microsoft OneDrive. If a file with the same name exists, the action overwrites it with the new data.

## Input

| Input fields | Description |
| --- | --- |
| Folder | Specify the folder path to upload the file. For example, `folder-one/folder-two`. |
| Source URL | Provide the public URL of the file to upload. |
| File name | Provide the file name with its extension, such as `New-csv-file.csv`. If a file with the same name exists, the action overwrites it. |

## Output

| Output fields | Description |
| --- | --- |
| ID | The unique identifier of the uploaded file. |
| Name | The name of the uploaded file. |
| File size | The size of the uploaded file in bytes. |
| Web URL | The URL to view the file or folder in a web browser. |
| Download URL | The URL to download the file. |
| Kind | Indicates whether the item is a file or folder. |
| Created by | Information about the user who created the file or folder. |
| Created date time | The date and time when the file or folder was created. |
| Last modified by | Information about the user who last modified the file or folder. |
| Last modified date time | The date and time when the file or folder was last modified. |
| ETag | The ETag (entity tag) is a unique identifier assigned to a version of a file or resource in OneDrive. It serves as a way for the system to track whether the content of the file has changed. |
| CTag | The CTag (change tag) is a timestamp or identifier used to track changes in a folder in OneDrive. It is often used for synchronization of folder contents, rather than individual files. |

---
