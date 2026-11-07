<!-- source: https://docs.workato.com/en/connectors/outlook/send-email-action | lastmod: 2026-06-29 -->
> The Send email action in the Outlook connector lets you send a plain text or HTML email to specified recipients from Outlook Mail.

# Outlook - Send email action

This action sends a plain text or HTML formatted email to specified recipient from Outlook Mail.

## Input

| Field | Description |
| --- | --- |
| From | Defaults to email address of connected account if left blank. |
| To | Email addresses of recipients. Separate multiple emails with commas. |
| CC | Email addresses of recipients to CC. Separate multiple emails with commas. |
| BCC | Email addresses of recipients to BCC. Separate multiple emails with commas. |
| Subject | The subject of the email. |
| Email type | Type of content to send. |
| Message | Email message to send. Plain text if selected email type is Text, HTML formatted if selected email type is HTML. |
| Attachment URL | Provide a public URL leading to the file to attach. |
| File name of URL attachment | Filename should include extension, e.g. New file.csv. If blank, filename will be automatically obtained from source URL. Use filename only when uploading a new file. |
| Attachments | List of attachments to send in the email. |
| Attachments source list | The attachments source list. |
| Attachment binary content | Specify the binary content of the file you want to attach to the email. |
| Attachment name | The name of the attachment. The file name should include an extension. For example, `newfile.csv`. |
| Importance | The importance of the message. Default is Normal if not specified. |
| Is delivery receipt requested | Indicates whether a delivery receipt is requested for the message. Default is false. |
| Is read receipt requested | Indicates whether a read receipt is requested for the message. Default is false. |

## Output

This action doesn't return output.

---
