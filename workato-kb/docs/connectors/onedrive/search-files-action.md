<!-- source: https://docs.workato.com/en/connectors/onedrive/search-files-action | lastmod: 2026-06-29 -->
> The Search files action in the OneDrive connector searches a folder and its subfolders in Microsoft OneDrive by file name, metadata, or content.

# OneDrive - Search files action (batch)

The **Search files** action searches for files in Microsoft OneDrive. The search supports partial matches using keywords in the file name, metadata, or content. For an exact match, provide the full file name with its extension. The action searches across the specified folder and its subfolders.

## Input

| Input fields | Description |
| --- | --- |
| Folder | Specify the folder to search in, including its subfolders. Provide the folder path, such as `folder 1/folder 2`. |
| Search query | Provide a query to search for files. For an exact match, provide the full file name with its extension. For example, `New_file.csv`. |

## Output

| Output field | Description |
| --- | --- |
| Files | An array of files matching the search query. Each file contains information including the file name, size, and download URL. |

---
