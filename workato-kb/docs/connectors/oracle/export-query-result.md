<!-- source: https://docs.workato.com/en/connectors/oracle/export-query-result | lastmod: 2026-10-28 -->
> The Export query result action in the Oracle connector runs a SQL query and exports the results as a CSV file to a local directory or cloud storage.

# Oracle - Export query result action

## Export query result

This action executes a SQL query and exports the results as a CSV file. The CSV file is uploaded to a local directory or a cloud storage like an S3 bucket.

If the CSV file is uploaded to a local directory, the query results are processed and stored locally. This means that your data doesn't leave your secure network.

> **On-prem profile configuration**
> 
> Remember to configure a staging area in your on-prem agent profile. Learn how to set up a staging area in the [OPA server profile](/en/on-prem/agents/connection/profile#server-profile).

![Export query result action](/assets/export-query-result.B03K1tO_.png)_Export query result action_

## Input

| Input field | Description |
| --- | --- |
| SQL | A valid SQL query. for example, `SELECT * FROM PUBLIC.ACCOUNTS` |
| Column delimiter | Choose a delimiter character. CSV files typically use comma. |
| Upload URL | Export the CSV file to this URL. Generate this url using [On-prem files](/en/connectors/on-prem-files/generate-on-prem-file-url) or [Amazon S3](/en/connectors/s3/action-presign-url). |

## Output

The output of this action contains metadata about the export action.

| Output field | Description |
| --- | --- |
| Number of rows exported | The number of rows exported. |
| Column names | Column headers in the CSV file. |
| File Contents (**Cloud connection only**) | CSV stream of the file contents. |

---
