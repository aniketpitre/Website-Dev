<!-- source: https://docs.workato.com/en/connectors/on-prem-files/append-csv-line-action | lastmod: 2026-06-29 -->
> The Append line to CSV file action in the On-prem files connector lets you add a new line to an existing on-prem CSV file.

# On-prem files - Append line to CSV file action

The **Append line to CSV file** action appends a new line to an existing on-prem CSV file.

> **AVOID CONCURRENT USAGE**
> 
> Using this action on the same CSV file from multiple recipes concurrently or with [a concurrency setting greater than 1](/en/features/batch-processing#maximize-data-throughput-with-batch-processing) may corrupt the file.

## Input

| Input field | Description |
| --- | --- |
| CSV file | Select or manually enter the [relative path](/en/connectors/on-prem-files#relative-path) to the CSV file to append lines to. |
| Column delimiter | Select the character used to separate column values within each CSV row. |
| Quote character | Select the character used to quote cell values. Set to **None** if no quote character is used. |
| File encoding | Select the encoding for the CSV file. This field defaults to **UTF-8**. |

## Output

| Output field | Description |
| --- | --- |
| File path | The path of the file, relative to the [base path](/en/connectors/on-prem-files#relative-path) defined in your connection profile. For example: `/my-profile/path/report.csv`. |
| File size (bytes) | The size of the file in bytes. |
| Last modified time | The time the file was last modified. This value is set by your OS. |

---
