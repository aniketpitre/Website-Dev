<!-- source: https://docs.workato.com/en/connectors/microsoft-word/reopen-comment-action | lastmod: 2026-10-16 -->
> The Reopen comment action marks a resolved comment thread as unresolved in a Word document.

# Microsoft Word - Reopen comment action

The **Reopen comment** action marks a resolved comment thread as unresolved in a Word document.

## Input

| Input field | Description |
| --- | --- |
| File source | Select where the document is stored. Options are **OneDrive** and **SharePoint**. |
| Document | Select the Word document from a folder-tree list scoped to the file source you selected. |
| Comment ID | Enter the ID of the comment thread to reopen. |

## Output

| Output field | Description |
| --- | --- |
| Comment ID | The comment's unique identifier. |
| Author | The display name of the comment's original author. |
| Content | The comment text. |
| Date | The date and time the comment was created. |
| Resolved | A boolean response (`true` or `false`) that indicates whether the comment has been resolved. |

---
