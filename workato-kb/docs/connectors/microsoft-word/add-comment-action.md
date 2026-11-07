<!-- source: https://docs.workato.com/en/connectors/microsoft-word/add-comment-action | lastmod: 2026-10-16 -->
> The Add comment action adds a comment to a Word document, optionally anchored to a specific block.

# Microsoft Word - Add comment action

The **Add comment** action adds a comment to a Word document, optionally anchored to a specific block. The action creates the comment under the authenticated user's identity.

## Input

| Input field | Description |
| --- | --- |
| File source | Select where the document is stored. Options are **OneDrive** and **SharePoint**. |
| Document | Select the Word document from a folder-tree list scoped to the file source you selected. |
| Comment text | Enter the text of the comment to add. |
| Anchor text | Optional. Anchor the comment to the paragraph that contains this text, instead of an element ID. The comment anchors to the block in **Element ID** if you leave this field blank, or to the first paragraph if you leave both blank. The **Anchor text** field is required when **Occurrence** is greater than `1`. |
| Element ID | Optional. Anchor the comment to a specific content block by its element ID. The action scopes the match to this element when you also provide **Anchor text**. |
| Occurrence | Optional. If the anchor text appears more than once in the document, specify which occurrence to anchor the comment to. Defaults to `1`. |

## Output

The following are a representative set of output fields. Refer to the output datapills in the recipe editor to view additional output.

| Output field | Description |
| --- | --- |
| Comment ID | The comment's unique identifier. |
| Author | The display name of the user the comment was created under. |
| Initials | The comment author's initials. |
| Content | The comment text. |
| Date | The date and time the comment was created. |
| Resolved | A boolean response (`true` or `false`) that indicates whether the comment is resolved. |
| Referenced text | The paragraph text the comment is anchored to. |
| Replies | The comment thread's replies. Returns one entry per reply. |
| Author (Replies) | The display name of the user the reply was created under. |
| Content (Replies) | The reply text. |
| Date (Replies) | The date and time the reply was created. |

---
