<!-- source: https://docs.workato.com/en/connectors/email-custom-opa/send-email-action | lastmod: 2026-10-07 -->
> Send an email using SMTP through the Email (Custom) OPA on-prem agent extension.

# Email (Custom) OPA - Send email action

The **Send email** action sends an email using the **SMTP** protocol through your on-prem agent extension.

## Input

| Input field | Description |
| --- | --- |
| From | Enter the sender's email address. |
| To | Enter the recipients of the email. |
| Email (To) | Enter the recipient's email address. |
| CC | Optional. Enter the recipients to include as CC. CC recipients see all recipients in **To** and **CC**. |
| BCC | Optional. Enter the recipients to include as BCC. BCC recipients are hidden from other recipients. |
| Subject | Enter the subject of the email. |
| Body type | Select whether the email body contains plain text or HTML content. Defaults to **Plain text**. |
| Body | Enter the email body content. Use HTML tags if **Body type** is **HTML**. |

## Output

| Output field | Description |
| --- | --- |
| Result | A message confirming the email was sent, for example `Email sent successfully`. |

---
