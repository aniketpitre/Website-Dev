<!-- source: https://docs.workato.com/en/recipes/design-time-errors/opa-errors | lastmod: 2026-11-02 -->
> Troubleshoot common Workato on-prem agent (OPA) errors covering setup, upgrades, runtime behavior, connections, and how to locate and read OPA logs.

# On-prem agent (OPA) error troubleshooting

Use this guide to troubleshoot common issues with the Workato on-prem agent (OPA). These guides cover setup, upgrades, runtime behavior, and extensions.

> **REVIEW LOGS**
> 
> Refer to the following sections to locate and investigate errors in OPA logs:
> 
> - [OPA log generation and retention](#understanding-opa-logs): Learn where to find logs and how to interpret them.
> - [Job-level troubleshooting](#job-specific-troubleshooting): Use job IDs to trace failures in logs.

Choose a guide based on the issue you plan to troubleshoot:

- [Setup and installation issues](/en/on-prem/agents/opa-troubleshooting/troubleshoot-setup): Agent startup failures, permission errors, directory creation problems, and proxy-related SSL errors.
- [Upgrade and configuration issues](/en/on-prem/agents/opa-troubleshooting/troubleshoot-upgrade): Post-upgrade failures, service account resets, and connection profile changes.
- [Runtime and performance issues](/en/on-prem/agents/opa-troubleshooting/troubleshoot-runtime): Heap space errors, logging errors, long query errors, and stuck jobs.
- [Connection issues](/en/on-prem/agents/opa-troubleshooting/troubleshoot-opa-connections): Java extension errors and connection errors for SFTP and Kafka.

## OPA log generation and retention

You can use OPA logs to identify agent behavior and system issues during execution. The OPA generates a new log file daily based on the on-premise system time. If a log file exceeds 20 MB within a day, a new one is created and numbered sequentially. For example, if `/agent-2019-11-01.0.log` is the first log of the day, additional logs for the same day are `/agent-2019-11-01.1.log` and `/agent-2019-11-01.2.log`. The OPA retains the latest 60 log files or a maximum of 20 GB of logs.

### Locate OPA logs

You must locate the log files to troubleshoot OPA issues. Depending on your operating system, complete the following instructions for Windows or Linux:

**Windows**

Log files are stored in `%SYSTEMROOT%\System32\LogFiles\Workato` by default for on-prem agents operating as a Windows service. You can navigate to this file manually or use the shortcut in the **Start** menu under **All apps > Workato**.

Complete the following steps to change the log storage location:

1. Open the Windows **Start** menu.
   
2. Go to **All apps > Workato**.
   
3. Open the **Service Wrapper Configuration** app for the agent you plan to configure.
   
4. Go to the **Logging** tab.
   
5. Enter a new log storage location in the **Log path** field. This field locates the Windows service wrapper's lifecycle log (`Agent.<date>.log`), its stdout and stderr capture files (`<service-name>-stdout.<date>.log` and `<service-name>-stderr.<date>.log`), and the service's PID file (`workato.pid`).
   
6. Go to the **Startup** tab.
   
7. Go to the **Arguments** field and update the `--logs=` argument to point to the new log storage location. This argument configures the OPA's application log (`agent.log`).
   
8. Click **Apply**.
   
9. Restart the agent for the change to take effect. Refer to [Run an on-prem agent](/en/on-prem/agents/run) for more information.
   

> **OPA LOG CONTENTS**
> 
> The level of detail included in your OPA logs depends on your agent configuration. Refer to the [Workato logging levels](/en/on-prem/agents/logging#logging-opa-activity) section for more information.

**Linux**

Log files are stored in `/var/log/messages` by default for on-prem agents operating as a Linux service through `systemd`. Because this file also contains logs from other Linux services, you must use the `journalctl` command to access OPA specific logs.

```shell
journalctl -u [name of the OPA service].service
```

The `-u` switch filters the logs returned by the service that created them. Replace `[name of the OPA service]` with the name you set for the OPA during installation.

You can further refine your log search using the following commands:

- `> [output-file]`: Exports the result of `journalctl` to a file.
- `--since`: Limits the generated logs to after a specific date and time.
- `--until`: Limits the generated logs to before a specific date and time.

For example:

```shell
journalctl -u workato.service --since "2020-07-26 23:15:00" --until "2020-08-5 23:20:00" > OPALogs.txt
```

Refer to Loggly's [Using journalctl](https://www.loggly.com/ultimate-guide/using-journalctl/) guide for additional journalctl information.

> **OPA LOG CONTENTS**
> 
> The level of detail included in your OPA logs depends on your agent configuration. Refer to the [Workato logging levels](/en/on-prem/agents/logging#logging-opa-activity) section for more information.

## Job-specific troubleshooting

Use the job ID to search OPA logs and trace job execution across all stages. This allows you to isolate OPA-specific operations within a single job. For example: `j-AHd9XdsW-JppW`.

![Locate jobs](/assets/find-job-id.DR5Ju-uo.png)_Locate jobs_

---
