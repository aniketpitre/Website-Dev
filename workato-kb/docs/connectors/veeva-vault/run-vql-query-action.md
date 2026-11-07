<!-- source: https://docs.workato.com/en/connectors/veeva-vault/run-vql-query-action | lastmod: 2026-08-04 -->
> The Run VQL query action submits a raw Vault Query Language (VQL) query against documents, objects, or system tables in Veeva Vault.

# Veeva Vault - Run VQL query action

The **Run VQL query** action submits a raw Vault Query Language (VQL) query against documents, objects, or system tables in Veeva Vault.

## Input

| Input field | Description |
| --- | --- |
| VQL query | Enter the VQL query to run. |
| Include query describe metadata | Select `Yes` or `No` to set the `X-VaultAPI-DescribeQuery: true` header on the request. Defaults to `No`. |
| Record properties | Select `All`, `Hidden`, `Redacted`, or `Weblink` to indicate how to apply the `X-VaultAPI-RecordProperties` header. Omit to skip the header. |
| Record schema | Optional. Enter the schema for the records returned by the query. Define fields to expose them as typed datapills downstream. Leave blank to return the records as raw JSON objects. |

## Output

| Output field | Description |
| --- | --- |
| Total | The total number of records matching the query. |
| Size | The number of records returned. |
| Page size | The page size used for this query. |
| Page offset | The page offset used for this query. |
| Next page | The URL to fetch the next page of results, if any. |
| Previous page | The URL to fetch the previous page of results, if any. |
| Records | An array of records. If you defined a **Record schema**, each record has the fields you defined. Otherwise, each record is returned as raw JSON. |

---
