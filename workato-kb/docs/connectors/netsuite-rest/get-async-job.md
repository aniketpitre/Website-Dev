<!-- source: https://docs.workato.com/en/connectors/netsuite-rest/get-async-job | lastmod: 2026-07-01 -->
> The Get async job result action retrieves the status and result of an asynchronous job in NetSuite REST.

# NetSuite REST - Get async job result action

The **Get async job result** action retrieves the status and result of an asynchronous job in NetSuite REST.

Use this action to check the progress and outcome of jobs created by the [Create records (async)](/en/connectors/netsuite-rest/create-record-async), [Update records (async)](/en/connectors/netsuite-rest/update-records-async), [Upsert records (async)](/en/connectors/netsuite-rest/upsert-records-async), or [Delete records (async)](/en/connectors/netsuite-rest/delete-record-async) batch actions.

## Input

| Input field | Description |
| --- | --- |
| Async job ID | Enter the identifier of the asynchronous job to retrieve. Use the **Async job ID** returned by an async create, update, upsert, or delete action. |

## Output

| Output field | Description |
| --- | --- |
| Started at | The timestamp when the job started processing. |
| Completed at | The timestamp when the job completed. |
| Progress | The current progress of the job. |
| Task results | A list containing one entry per record submitted in the batch. Each entry reports the outcome for a single record. |

---
