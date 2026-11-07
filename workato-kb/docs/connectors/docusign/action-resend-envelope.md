<!-- source: https://docs.workato.com/en/connectors/docusign/action-resend-envelope | lastmod: 2026-08-31 -->
> The Resend envelope action in the Docusign connector lets you resend an envelope to recipients who have not yet completed their action.

# Docusign - Resend envelope action

The **Resend envelope** action resends an envelope to recipients who have not yet completed their action in Docusign. Refer to the Docusign [EnvelopeRecipients: update](https://developers.docusign.com/docs/esign-rest-api/reference/envelopes/enveloperecipients/update/) API reference for more information.

## Input

| Input field | Description |
| --- | --- |
| Envelope ID | Enter the ID of the envelope to resend. |

## Output

| Output field | Description |
| --- | --- |
| Recipient update results | The results of updating each recipient in the envelope. |
| Recipient ID (Recipient update results) | The ID of the recipient that was updated. |
| Recipient ID GUID (Recipient update results) | The globally unique identifier (GUID) for the recipient. |
| Error details (Recipient update results) | Information about any error that occurred while updating the recipient. |
| Error code (Error details) | The code that identifies the error. |
| Error message (Error details) | A description of the error. |

---
