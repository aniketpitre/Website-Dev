<!-- source: https://docs.workato.com/en/features/filestorage/delete-file-action | lastmod: 2026-06-30 -->
> Reference for the Workato FileStorage Delete file action, including the file path input field and the deleted file path output field.

# Workato FileStorage - Delete file action

This action deletes a file from [Workato FileStorage](/en/features/workato-filestorage).

![Delete file in FileStorage action](/assets/filestorage-delete-file.B6wwH6nm.png) _Delete file in FileStorage action_

> **FILE AND DIRECTORY ACCESS**
> 
> Currently, all users in a workspace can access all FileStorage files and directories in the workspace when they use the [FileStorage connector](/en/features/filestorage/filestorage-connector). Workato does not restrict access based on role unless the files are accessed from the [FileStorage UI](/en/features/filestorage/filestorage-console#rbac).

## Input

| Field | Description |
| --- | --- |
| File path/select file | Choose a file or enter the full path (for example, `samplepath/filename.csv`) of the file you plan to delete. |

## Output

| Field | Description |
| --- | --- |
| File path | The complete path of the deleted file. |

---
