<!-- source: https://docs.workato.com/en/connectors/gmail-custom/search-messages-action | lastmod: 2026-09-21 -->
> The Search messages action lists the messages in a Gmail mailbox.

# Gmail (Custom) - Search messages action

The **Search messages** action lists the messages in a Gmail mailbox. This action requires one of the following OAuth scopes: `https://www.googleapis.com/auth/gmail.metadata`, `https://mail.google.com/`, `https://www.googleapis.com/auth/gmail.modify`, or `https://www.googleapis.com/auth/gmail.readonly`.

## Input

| Input field | Description |
| --- | --- |
| User id | Enter the user's email address. |
| Query | Enter a query to use. Supports the same query format as the Gmail search box. For example, `from:someuser@example.com is:unread`. You can't use the query if the connection only has the `gmail.metadata` scope. |
| Label IDs | Enter any labels to return messages that match all of the specified label IDs. Provide label IDs separated by a comma. |
| Max results | Enter the maximum number of messages to return. |
| Page token | Enter the page token to retrieve a specific page of results. |
| Include spam trash | Select `Yes` to include messages from **SPAM** and **TRASH** in the results. |

## Output

| Output field | Description |
| --- | --- |
| Messages | Array of matching messages. Each entry includes a message ID and a thread ID. |
| Next page token | Token to retrieve the next page of results. |
| Result size estimate | Estimated total number of matching messages. |
| User id | The user's email address. |

---
