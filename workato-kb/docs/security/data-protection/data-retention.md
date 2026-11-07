<!-- source: https://docs.workato.com/en/security/data-protection/data-retention | lastmod: 2026-09-24 -->
> Learn how Workato data retention policies set the lifespan of job histories, trigger events, and reports, and how to customize them.

# Data retention policies

Workato retains specific recipe and usage data to power the [Dashboard](/en/features/admin-dashboard), display custom reports, repeat jobs, and troubleshoot errors. After the data retention period passes, this data is automatically and permanently deleted from the Workato platform.

> **SUMMARY**
> 
> - Workato's data retention policy determines the lifespan of data, such as job histories, trigger events, and custom reports. Workato deletes these data types after the specified time.
> - Default retention varies from 30 to 90 days from the job's completion date depending on your workspace type and platform plan. You can customize the retention time in certain cases.
> - You can set data retention at the workspace level or opt not to store data for specific recipes.
> - Store data beyond the default period by using audit log streaming to send data to supported applications.

The time data is retained is determined by a **data retention policy**. In this guide, we'll cover:

- [The basics of data retention policies in Workato](#basics)
- [The default retention periods in Workato](#workato-retention-policy)
- [What types of data are subject to the retention policy](#data-types)
- [How to customize your workspace's retention period](#configure-workspace-level)
- [How to selectively retain data at the recipe level](#configure-recipe-level)

* * *

## Basics

- [What is a data retention policy?](#what-is-it)
- [What is Workato's data retention policy?](#workato-retention-policy)
- [Can I customize the retention period for my workspace?](#customize-retention-period)
- [Can I customize retention at the recipe level?](#customize-recipe-level)
- [Can I store data for longer than the retention period?](#maximum-storage)
- [What types of data are subject to the data retention policy?](#data-types)
- [What happens if I change my data retention policy?](#policy-change)
- [Is job data retention retroactive?](#policy-retroactive)

### What is a data retention policy?

Workato's data retention policy specifies how long [specific types of data](#data-types) are stored for your account. The data retention period is 30 or 90 days from the job's completion date, depending on your workspace type and platform plan. Workato retains this data to support error recovery, duplicate detection, custom reports, and job re-runs.

Data subject to the retention policy is automatically and permanently deleted when the retention period passes. For example, if the retention period is 90 days, applicable data that is more than 90 days old is deleted.

### Retention policy duration

The retention period for a recipe job starts when the job ends.

For example, if your workspace's data retention policy is set to 30 days, the data from a recipe job is retained for 30 days starting from the job's completion date. This means that if a job begins on October 31st and completes on November 1st, the data associated with that job is retained until December 1st.

**Legacy plans**

For customers on legacy plans, the default data retention policy for your Workato account varies based on the type of workspace you use and any additional capabilities you select.

| Purchased? | Maximum retention | Customizable? |
| --- | --- | --- |
| None | 30 days | No |
| Enterprise Workspace | 90 days | Yes (1 hour minimum) |
| Data Monitoring capability | 90 days | Yes (1 hour minimum) |

**Usage-based pricing model**

For customers on our [usage-based pricing model](/en/pricing), the default data retention policy for your Workato account depends on your platform plan. Refer to your pricing plan and contract to learn more.

| Platform plan | Maximum retention | Customizable? |
| --- | --- | --- |
| Standard | 30 days | No |
| Business | 30 days | No |
| Enterprise | 90 days | Yes (1 hour minimum) |

  

> **MAXIMUM RETENTION AND CUSTOMIZATION OPTIONS**
> 
> The maximum retention period and the ability to customize it depends on your platform plan. Refer to your pricing plan and contract to learn more.

> **AGENT STUDIO GENIE CONVERSATION DATA**
> 
> These retention periods apply to job data. Agent Studio genie conversation data will soon follow a separate, fixed 90-day retention policy that isn't configurable. Refer to [Conversation data retention](/en/agentic/agent-studio/data#conversation-data-retention) for details.

### Can I customize the retention period for my workspace?

Yes, if you have an **Enterprise Workspace** or have the **Data Monitoring/Advanced Security & Compliance** capability.

Refer to the [Customization at the workspace level section](#configure-workspace-level) for more info.

### Can I customize retention at the recipe level?

Yes. The **Jobs data retention** recipe setting allows you to define whether Workato stores job data for the recipe:

![Recipe-level data retention policy](/assets/recipe-data-retention-policy.dsiUjwwn.png)_Recipe-level data retention policy_

See the [Defining data retention for recipes guide](/en/security/data-protection/data-retention/configure-retention-for-recipes) for more information.

### Can I store data for longer than the retention period?

To store data longer than the retention period, use [Audit log streaming](/en/features/activity-audit-log-streaming). Using this feature, you can send job and activity log data from Workato to your event management application of choice.

Workato supports the following applications:

- Amazon S3
- Data Dog
- Splunk
- Sumo Logic
- Any other application or service accessible over an HTTP endpoint

**Note**: Audit log streaming only includes data created **after** you configure the streaming. It does not apply to data created prior to the configuration.

### What types of data are subject to the data retention policy?

The following types of data are subject to your account's data retention policy:

- [Job history summaries](#job-history-summaries)
- [Job history details](#job-history-details)
- [Trigger events](#trigger-events)
- [Customized job reports](#customized-job-reports)

> **DATA TYPES EXEMPT FROM RETENTION POLICY**
> 
> The following types of data are not subject to your account's data retention policy:
> 
> - [Data tables](/en/data-tables) data, including data entered in [Workflow apps](/en/workflow-apps): Workato doesn't delete this data automatically. To delete this data, you must do so from the **Data tables** interface or programmatically.
> - [FileStorage](/en/features/workato-filestorage) data: Workato doesn't delete FileStorage data automatically. To delete this data, you must use the FileStorage delete action. Manually deleted data is purged from all backup drives within four days.
> - [SQL Transformations](/en/features/sql-transformations) data: Temporary contents received from different sources other than FileStorage, and the transformed output data are all automatically purged from primary and backup drives within 4 days.
> - [Agent Studio genie conversation data](/en/agentic/agent-studio/data#conversation-data-retention): Will soon follow a fixed 90-day retention policy instead of the job-based policy on this page, and won't be configurable.

### What happens if I change my data retention policy?

This varies, depending on whether you reduce or extend your data retention policy:

- **Reducing the data retention policy**: If you reduce the retention policy from 90 days to 60 days, the data for the reduced period (30 days) is not retroactive. For example, if the retention policy is changed on December 1, 2024, data from before October 2, 2024 is no longer retained by Workato.
- **Extending the data retention policy**: If you extend the retention policy from 30 days to 90 days, the additional data (30 days) is retroactive. For example, if the retention policy is changed on December 1, 2024, data from as far back as September 2, 2024, is retained.

### Is job data retention retroactive?

Retroactive job data retention varies depending on the job data type:

- **Job lines**: No, job lines are not retroactive.
- **Job history titles, errors, and custom columns**: Yes, these are retroactive and expire according to your current data retention settings.

#### Job history summary

Job history summary data provides job metadata on the **Job details** page. This includes information about the job such as:

- The job ID
- Status
- Description
- Starting time
- Duration

![Job history summary](/assets/job-summary-complete.CjRUrqxl.png)_Job history summary with successful job completion_

If the job resulted in an error, the summary would also contain details about the error:

![Job history summary](/assets/job-summary-error.Bo5bprY0.png)_Job history summary with error details_

#### Job history details

Job history detail data provides information about inputs and outputs for each action in the recipe:

![Action input and output](/assets/action-input-output.BEK8LjGI.gif)_Action input and output on the Job history details page_

After the data retention period has passed, only [job history summary](#job-history-summaries) data is retained. Action input and output data will be deleted.

#### Trigger events

Trigger event data is found on the **Job details** page in the **Output** tab of the trigger step:

![Trigger event data](/assets/trigger-event-data.5NX64ai8.png)_Trigger event data for a new issue in GitHub_

Trigger event data can be used to repeat a job without creating a new trigger event. After the retention period has passed and the trigger event data is deleted, this page's **Repeat this job** option is deactivated.

#### Customized job reports

Customized job reports are located in the [**Jobs** tab](/en/recipes/jobs) of the recipe. If a job report isn't customized, only the job's ID, status, and timestamp will display in the table.

A customized report is a quick, easy way to see data from a job without opening the **Job details** page. In the image below, for example, the job report has been customized to include the **GH issue**, **Team**, **Status**, **Priority**, and **Issue Type** columns:

![Custom job report](/assets/custom-report.Bu8QNnqT.png)_Custom job report showing data from the job execution_

After the retention period, only the job's **ID**, **status**, and **timestamp** will display in the job report. Data in customized columns will be deleted.

![Custom job report deleted](/assets/custom-report-deleted.ByqGGTds.png)_Custom job report after the retention period has passed_

* * *

## Customizing data retention

You can configure retention periods in the following ways:

- [At the workspace level](#configure-workspace-level)
- [At the recipe level](#configure-recipe-level)

> **FEATURE AVAILABILITY**
> 
> Configurable data retention is available to customers on specific pricing plans. Refer to your pricing plan and contract to learn more.
> 
> Additionally, you must have the [Environment admin](/en/user-accounts-and-teams/role-based-access/new-model/system-environment-roles#environment-admin) role, the legacy [Admin system role](/en/roles#system-roles), or be logged in as the [workspace owner](/en/roles#system-roles)/root login to make changes to your workspace's data retention policy.

> **DATA RETENTION POLICY CHANGES**
> 
> When you make changes to your workspace's data retention policy, Workato follows this logic:
> 
> If you reduce your workspace's data retention policy, the change is not retroactive. For example, if you change the retention policy from 90 days to 60 days on December 1, 2024, data from before October 2, 2024, is no longer retained by Workato. Conversely, if you extend the retention policy, the change is retroactive. For example, if you extend the retention policy from 30 days to 90 days on December 1, 2024, data from as far back as September 2, 2024, is retained.
> 
> For job data retention, job lines are not retroactive. However, job history titles, errors, and custom columns are retroactive and expire according to your current retention settings.

### Customization at the workspace level

1. Sign in to your Workato account and go to **Workspace admin > Settings > Data retention**.
   
2. Go to the **Data retention period unit** field and select `Hours` or `Days`.
   
3. Go to the **Data retention period** field and enter an integer to specify the duration of the retention period based on the selected **period unit**.
   
   For example, if the **period unit** is `Days` and you enter `45`, the retention period will be `45 days` from the job's completion date.
   
   ![Workspace-level data retention policy](/assets/account-data-retention-policy.CE3_LSRP.png)_Customized data retention policy of 45 days from the job's completion date_
   
   > **RETENTION PERIOD**
   > 
   > The retention period must be between **one (1) hour** and **90 days**. If set to a value outside this range, Workato will reset it to [the maximum for your workspace's plan type](#workato-retention-policy).
   
4. Click **Save**.
   

### Customization at the recipe level

Data retention can be configured on a recipe-by-recipe basis to use the [workspace retention policy](#configure-workspace-level) or to not store data at all.

Refer to the [Defining data retention for recipes](/en/security/data-protection/data-retention/configure-retention-for-recipes) guide for more info.

---
