<!-- source: https://docs.workato.com/en/connectors/jira/download-attachment-action | lastmod: 2026-06-17 -->
> This action downloads an attachment from a Jira issue.

# Jira - Download attachment action

The **Download attachment** action downloads an attachment from a Jira issue.

You can use this action to sync files, such as screenshots attached to tickets, between Jira and another ticket management application (for example, [ServiceNow](/en/connectors/servicenow) or [Freshdesk](/en/connectors/freshdesk)).

## Input

| Input field | Description |
| --- | --- |
| Attachment URI | Enter the URI of an attachment. You can retrieve this value from the output of other steps. For example, the Self datapill from the [Get issue](/en/connectors/jira/get-issue-action) action. |

## Output

| Output field | Description |
| --- | --- |
| Attachment content | The content of the attachment. |
| Size | The size of the attachment in bytes. |

---
