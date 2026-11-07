<!-- source: https://docs.workato.com/en/connectors/assemblyai/search-records-action | lastmod: 2026-09-29 -->
> List transcripts in AssemblyAI, with filters for status, creation date, and pagination.

# AssemblyAI - Search records action

The **Search records** action lists records, such as transcripts, in AssemblyAI.

> **PAGE BY CHAINING IDS**
> 
> AssemblyAI paginates with **Before ID** / **After ID** instead of with page numbers. Copy a transcript ID from **Records**, or parse the `after_id` value from **Page details**' **Next URL**, and pass it as this action's **After ID** input to paginate through search results.

## Input

| Input field | Description |
| --- | --- |
| Object | Select the object, such as **Transcript**. |
| Limit | Optional. Enter the maximum number of transcripts to return. Valid values are 1-200. The default is **10**. |
| Status | Optional. Select a status to filter by, such as **Completed**. |
| Created on | Optional. Enter a date (`YYYY-MM-DD`) to only return transcripts created on that date. |
| Before ID | Optional. Enter a transcript ID to return transcripts created before it. Don't use this together with **After ID**. |
| After ID | Optional. Enter a transcript ID to return transcripts created after it. Don't use this together with **Before ID**. |
| Throttled only | Optional. Select **Yes** or **No** to only return throttled transcripts. This field overrides **Status**. |

## Output

The following are a representative set of output fields. Refer to the AssemblyAI [List transcripts](https://www.assemblyai.com/docs/api-reference/transcripts/list) documentation for more information on available output fields.

| Output field | Description |
| --- | --- |
| Records | A list of matching transcripts. |
| ID (Records) | The transcript's unique identifier. Use this to paginate with **Before ID** or **After ID**. |
| Status (Records) | The transcript's status, for example `completed`. |
| Created (Records) | The date and time the transcript was created. |
| Completed (Records) | The date and time the transcript finished processing. The **Completed** field is only available when **Status** is `completed`. |
| Page details | Pagination information. |
| Limit (Page details) | The **Limit** value used for this request. |
| Result count (Page details) | The number of records returned on this page. |
| Next URL (Page details) | The URL to fetch the next page of results. Parse its `after_id` value to paginate with **After ID**. |

Each record in **Records** also includes **Resource URL**, **Audio URL**, **Error**, and **Region**. **Page details** also includes **Current URL** and **Prev URL**. Refer to the AssemblyAI [List transcripts](https://www.assemblyai.com/docs/api-reference/transcripts/list) documentation for more information on these fields.

---
