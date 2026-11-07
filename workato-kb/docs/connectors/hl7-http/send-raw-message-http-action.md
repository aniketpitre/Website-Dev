<!-- source: https://docs.workato.com/en/connectors/hl7-http/send-raw-message-http-action | lastmod: 2026-06-17 -->
> The Send raw message action sends a raw message in HL7 HTTP.

# HL7 HTTP - Send raw message action

The **Send raw message** action sends a raw message in HL7 HTTP.

## Input

| Input field | Description |
| --- | --- |
| Raw HL7 message | Enter the raw HL7 message. You can separate segments by carriage returns or newlines. |
| Action headers | Enter additional HTTP headers. These headers are merged with connection headers. |

## Output

| Output field | Description |
| --- | --- |
| Status | The status of the request. |
| Message | The message contents. |
| HTTP status code | The code indicating the status of the response. |
| Response body | The response body for the request. |
| ACK received | An output confirming receipt of the message. |

---
