<!-- source: https://docs.workato.com/en/connectors/veeva-vault/get-document-action | lastmod: 2026-08-04 -->
> The Get document action retrieves full metadata for a single document, including its renditions and version history, in Veeva Vault.

# Veeva Vault - Get document action

The **Get document** action retrieves full metadata for a single document, including its renditions and version history, in Veeva Vault. Refer to the [Veeva Vault](https://developer.veevavault.com/api/26.1/#retrieve-document) documentation for more information.

## Input

| Input field | Description |
| --- | --- |
| Document ID | Enter the internal Vault document ID, for example `776`. |

## Output

| Output field | Description |
| --- | --- |
| Response status | The status of the request. |
| Document | An object containing the document's metadata fields. |
| Renditions | An object with **Viewable rendition** and **Imported rendition**. |
| Versions | An array of the document's versions, each with a **Version number** and **Version URL**. |
| Attachments | An array of the document's attachments. |

---
