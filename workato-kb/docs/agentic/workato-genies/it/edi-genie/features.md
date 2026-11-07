<!-- source: https://docs.workato.com/en/agentic/workato-genies/it/edi-genie/features | lastmod: 2026-06-22 -->
> Learn about EDI Genie's core and extended features, including transaction retrieval, partner health monitoring, proactive alerts, and knowledge ingestion.

# EDI Genie features

EDI Genie provides conversational access to Orderful transaction data and proactive monitoring for EDI operations. This page describes the core features available in every deployment and the extended features you can enable.

## Core features

Core features support the end-to-end EDI operations workflow, from transaction retrieval and monitoring through diagnostics, reporting, and proactive alerts.

### Transaction retrieval and analysis

EDI Genie retrieves and filters EDI transactions using natural language. You can query by date range, trading partner, transaction type, or status.

For a specific transaction, EDI Genie retrieves its details by ID, including error information for failed transactions.

### Poller diagnostics

EDI Genie identifies transactions stuck in a poller queue. You provide the poller ID, which you can retrieve from the Orderful UI, and EDI Genie returns the stuck transactions, how long each has been blocked, and suggested next steps.

### Trading partner health

EDI Genie summarizes success rates, latency trends, and error trends for a specific trading partner over a time window you specify.

### Audit report generation

EDI Genie generates a comprehensive audit trail report for all transactions processed over a date range you specify.

### Real-time dashboard monitoring

EDI Genie retrieves the current status of the Orderful EDI gateway and system health dashboard.

### Proactive alerts

EDI Genie sends summaries to your notification channel (Slack by default) covering successful and failed transactions, emerging error patterns, and partner-specific issues. Each summary identifies whether failures are concentrated around a specific trading partner and includes a generated report.

### Knowledge-based onboarding help

EDI Genie answers onboarding and setup questions using Orderful guides and customer-supplied FAQs stored in its knowledge base.

## Extended features

Extended features are optional and can be enabled after initial setup.

### Knowledge ingestion

You can ingest Orderful documentation and customer-specific content into the EDI Genie knowledge base. The packaged genie supports file storage by default. To ingest from Google Drive or another app, install the knowledge ingestion module for that specific app. Once ingested, EDI Genie uses this content to answer onboarding, configuration, and troubleshooting questions.

### Custom FAQ upload

You can add customer-specific troubleshooting FAQs, configuration guides, and escalation playbooks to the knowledge base. EDI Genie references this content alongside the standard Orderful guides.

### Custom alert notifications

You can configure when EDI Genie notifies you, such as sending a summary of failed transactions to your notification channel. The underlying alert thresholds aren't configurable.

### Custom skills

You can extend EDI Genie with custom skills built in the **Custom Extensions** folder. The **Core** folder is read-only and managed by Workato. Extensions can be used as-is or cloned into **Custom Extensions** as a starting point.

## Limitations

- **Transaction pagination**: The **Search transactions** skill returns up to 100 records per page due to Orderful API constraints. Use the `next_cursor` value returned in the response to retrieve the next page with the prompt: "Continue to the next page using the cursor `{next cursor value}`."
- **Cross-partner analysis**: EDI Genie supports partner analysis only when you provide a specific partner name or ID. Broad queries across all trading partners aren't supported.
- **Onboarding actions**: EDI Genie answers onboarding and setup questions from its knowledge base. It can't complete onboarding or configuration in Orderful on your behalf.
- **Ticketing**: EDI Genie can't create or escalate tickets automatically. If EDI Genie encounters an error or returns unexpected data, raise a ticket manually with your support or operations team.
- **Date filtering**: Orderful filters transactions inclusive of the start date and exclusive of the end date.

---
