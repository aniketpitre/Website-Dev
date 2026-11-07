<!-- source: https://docs.workato.com/en/connectors/aws-glue/start-run-a-glue-job-action | lastmod: 2026-03-02 -->
> The Start/run a Glue job action starts a new run of an AWS Glue job.

# AWS Glue - Start/run a Glue job action

The **Start/run a Glue job** action starts a new run of an AWS Glue job.

## Input

| Input field | Description |
| --- | --- |
| Job name | Enter the name of the job to start. |
| Job run ID | Enter the ID of the job run to start. |
| Job parameters | Enter key-value pairs for job parameters. These parameters override any default arguments. Refer to the [AWS Glue documentation](https://docs.aws.amazon.com/glue/latest/webapi/API_StartJobRun.html#API_StartJobRun_RequestParameters) for a complete list of parameters. |
| Allocated capacity (DPU) | This field is deprecated. Workato recommends using **Max capacity** instead. Enter the amount of data processing units (DPUs) to allocate to the job run to start. |
| Timeout | Enter the maximum amount of time in minutes that the job run can use resources before it terminates. The default is `2880` minutes, or 48 hours. |
| Max capacity | Enter the maximum amount of DPUs allocated to the job to start. |
| Security configuration | Enter the name of the security configuration structure to use with the job run. |
| Notification delay | Enter the number of minutes to delay notification after a job run starts. |
| Worker type | Enter the type of worker to use to define the capacity of the nodes processing the job run. |
| Number of workers | Enter the number of workers to use for the job. |

## Output

| Input field | Description |
| --- | --- |
| Job run ID | The ID assigned to the job run. |

---
