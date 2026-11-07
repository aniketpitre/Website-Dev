<!-- source: https://docs.workato.com/en/features/activity-audit-log-streaming | lastmod: 2026-06-30 -->
> Set up audit log streaming in Workato to replicate and store log data in an external destination beyond standard retention periods.

# Audit log streaming

Audit log streaming replicates and stores log data in a destination you specify. This lets you maintain access to logs beyond the [audit log](/en/features/activity-audit-log#log-retention) and [Workato logging service](/en/features/logging-service#log-limits) retention periods and ensures you have ample time to review and analyze your activity logs for security and operational insights.

Each job or event is represented as a JSON file, which Workato sends to the log provider using the HTTP POST method. Workato supports the following destinations:

- [Amazon S3 Bucket](/en/features/activity-audit-log-streaming-destinations#amazon-s3-bucket)
- [Azure Monitor](/en/features/activity-audit-log-streaming-destinations#azure-monitor)
- [Azure Blob](/en/features/activity-audit-log-streaming-destinations#azure-blob-storage)
- A [cloud-based logging service](/en/features/activity-audit-log-streaming-destinations#cloud-based-logging-services), such as Sumo Logic, Datadog, Splunk, or [Google Cloud Storage Buckets](/en/features/activity-audit-log-streaming-destinations#google-cloud-storage-buckets)

Refer to [Audit log streaming destinations](/en/features/activity-audit-log-streaming-destinations) for more information.

> **FEATURE AVAILABILITY**
> 
> Audit log streaming is available on specific pricing plans. Refer to your pricing plan and contract to learn more.

## Audit log size

Log file size varies from 1 KB to 1 MB based on the details that are present in the logs.

The file size quota for logs is 40 MB.

When streaming full job details, the system does not send step-specific log lines if the overall file size exceeds 40 MB. If a file exceeds 40 MB, the system still sends contextual job information, such as `user_id`, `recipe_id`, and `time_executed`. However, the “lines” column displays the default text, `Log lines exceed size limit`.

## Set up audit log streaming

1. Sign in to your Workato account.
   
2. Go to **Workspace admin > Settings > [Log streaming](https://app.workato.com/members/settings/log_streaming)** and select **Set up audit log streaming**:
   
   ![Enable audit log streaming](/assets/enable-audit-log-streaming.DYpo11KE.png)
   
3. Select the audit log destination.
   
4. Configure the streaming connection and options.
   
5. Choose the events to include in your audit log stream.
   
   Consult [Audit log streaming types](/en/features/activity-audit-log-streaming-sample#audit-log-streaming-types) for more information about events.
   
6. Optional. [Customize a log message](/en/features/activity-audit-log-streaming-customize-log) if required.
   
7. Select **Save**.
   

## Does data masking apply to audit log streaming?

Yes. When data masking is enabled, Workato doesn't log or stream the input or output of any trigger or action. Instead, a placeholder replaces the data in both:

- **Workato UI logs**
- **Audit log streaming destinations**

Refer to the [Enable data masking](/en/features/data-masking#enable-data-masking) section for instructions on enabling this feature.

### How masked data appears in job logs

When job logs are streamed to an external logging service through audit log streaming, masked data remains hidden. Instead of displaying sensitive information, Workato replaces it with a `"masked"` placeholder.

The following example illustrates how masked data appears in a job details log:

```json
"lines": [
    {
        "input": {"data": "masked"},
        "output": {"data": "masked"},
        "adapter_name": "timer",
        "adapter_operation": "trigger_event",
        "line_stat": {
            "details": [
                {
                    "name": "execution_time",
                    "average": 0.002,
                    "total": 0.002,
                    "min": 0.002,
                    "max": 0.002,
                    "count": 1
                }
            ],
            "total": 0.002
        },
        "recipe_line_number": 1,
        "mask_data": true
    }
]
```

Refer to the [Activity audit log file details and sample data](/en/features/activity-audit-log-streaming-sample#full-job-details) section for a complete example of a job details log.

---
