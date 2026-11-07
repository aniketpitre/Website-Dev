<!-- source: https://docs.workato.com/en/connectors/docusign/trigger-new-document-event | lastmod: 2026-08-31 -->
> The New document event trigger in the Docusign connector fires when someone in your organization sends a document, tracking the full signing lifecycle.

# Docusign - New document event trigger

The **New document event** trigger allows you to listen for events where someone in your organization is a sender of a Docusign email. Use this trigger to track the full lifecycle of a contract signing from draft to completion and sync it to systems like your CRM.

## Input

| Input field | Description |
| --- | --- |
| When first started, this recipe should pick up events from | Set the date and time to start picking up trigger events. This lets your recipe capture past events. Refer to [Triggers](/en/recipes/triggers#since-from) to learn more about this input field. |
| Event | Select the event status. For example, **Created**, **Sent**, **Delivered**, **Signed**, **Completed**, **Declined**, **Voided**, or **Deleted**. If a status is not selected, the default value is **All**. |

> **TRIGGER CONDITIONS**
> 
> This trigger supports [Trigger conditions](/en/recipes/triggers#trigger-conditions) that you can use to filter incoming trigger events.

## Output

| Output field | Description |
| --- | --- |
| Status | The current status of the envelope, including the recipient's progress within that envelope. For example, **Created**, **Sent**, **Delivered**, **Signed**, **Completed**, **Declined**, **Voided**, **Deleted**, or **All**. |
| Documents URI | The URI of the document. |
| Recipients URI | The URI for retrieving the envelope's recipients. |
| Envelope URI | The URI of the envelope that contains one or more documents. |
| Envelope ID | The ID assigned to the envelope for tracking and managing the document lifecycle. |
| Custom fields URI | The URI of custom fields being reused in the document. |
| Notification URI | The URI used to redirect the browser after users have granted access to their Docusign account. |
| Status changed date time | The last time the status of the envelope changed. For example, when a document was signed or delivered. |
| Documents combined URI | The URI of the single PDF file with combined documents. |
| Certificate URI | The URI of the certificate used to verify the identity of the sender. |
| Templates URI | The URL of the template used for reusing envelopes. |
| Sign info | The data and details associated with a completed electronic signature, including the signer's identity, the timestamp of the signature, and other audit trail information. |

> **ADDITIONAL OUTPUT FIELDS**
> 
> This trigger provides a data tree with attributes and values for the specified object. Additional fields depend on the properties you select.

---
