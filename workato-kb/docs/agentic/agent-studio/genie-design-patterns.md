<!-- source: https://docs.workato.com/en/agentic/agent-studio/genie-design-patterns | lastmod: 2026-10-28 -->
> Learn the eleven genie design patterns in Agent Studio and use the decision matrix to choose the right architecture for your build.

# Genie design patterns

Every genie has one or more design patterns. Building with patterns intentionally means you can explain and maintain your architecture.

This page provides information on the eleven design patterns available for genie builds and explains how to use the decision matrix to select the right design pattern.

### What is a design pattern

A design pattern is a reusable architectural approach that solves a recurring problem in a known context. Patterns are architectural choices you make at design time before you write a [job description](/en/agentic/agent-studio/ai-model/ai-model#job-description), build a [skill](/en/agentic/skills#getting-started-with-skills), and ingest data into a [knowledge base](/en/agentic/agent-studio/knowledge-bases/knowledge-bases).

### Eleven genie design patterns

| Pattern | Description |
| --- | --- |
| **Deterministic flow** | The skill sequence is fixed in the job description before execution. The LLM processes output between steps and converses with the user, but the overall flow doesn't vary. |
| **Event router** | A central genie receives events from multiple sources and routes each one to the appropriate skill or skill chain based on pre-defined criteria in the prompt. |
| **Guided skill chaining** | Each skill output determines which skill runs next. The flow is conditional and runtime-determined rather than pre-specified in the job description. |
| **Dynamic input builder** | A single skill adapts to variable input schemas at runtime by fetching the schema definition before building the payload. This eliminates the need for one skill per ticket category or form type. |
| **Query generation** | Object definitions and relationships are loaded into the knowledge base. The LLM generates the required query at runtime from user intent rather than using a pre-defined query. |
| **Persistent state and data enrichment** | The genie stores and retrieves domain-specific data beyond conversational history, enabling reporting over time, stateful workflows, and consistent scoring across sessions. |
| **Information summarization** | The genie collects data from multiple sources and synthesizes it into a single, structured response. |
| **Controlled data volume** | The genie applies filters, aggregation, and pagination before returning data to the LLM to prevent context window overflow when working with large datasets. |
| **Record system** | The genie acts as a lightweight record system using [Data tables](/en/data-tables) for CRUD operations when an external system is unavailable or unnecessary. |
| **App Event-triggered** | An external business event triggers a genie workflow. Two modes: continue an existing conversation or start a new one. |
| **Genie as MCP server** | A [genie exposed as an MCP server](/en/mcp/genies-as-mcp-clients) can be called from Claude, ChatGPT, custom UIs, or other agents. |

### Genie design pattern decision matrix

Find the row that matches your use case across all four dimensions to select your starting pattern:

| Pattern | Workflow characteristics | Decision making | Human interaction | Skill input characteristics |
| --- | --- | --- | --- | --- |
| Deterministic flow | Pre-defined, fixed steps | Not required for steps. Validation may apply. | User reviews step input and output | Derived. Can be dynamic. |
| Event router | Initiated from events. Multiple subscribers. | Pre-defined criteria for routing | Any | Any |
| Guided skill chaining | Pre-defined steps. Complex branching may apply. | Dynamic. Driven from skill outputs. | User reviews step input and output | Any |
| Dynamic input builder | Any | Uses knowledge bases or skills to resolve schema | User reviews step input and output | Dynamic and derived at runtime |
| Query generation | Any | Uses knowledge bases or skills to generate query | User reviews step input and output | Dynamic and derived at runtime |
| Persistent state and data enrichment | Any | Uses knowledge bases or skills before persisting | Any | Any |
| Information summarization | Multiple sources. Pre-defined criteria. | Uses knowledge bases or skills | No intermediate review. Summarize only. | Any |
| Controlled data volume | Multiple sources. Pre-defined criteria to filter data. | Uses knowledge bases or skills | No intermediate review. Summarize only. | Required filters applied to limit output |
| Record system | Pre-defined definition and scope of application | Uses knowledge bases or skills before persisting | User reviews step input and output | Any |
| App Event-triggered | Initiated from external events | Steps decided based on events and criteria | Any | Any |
| Genie as MCP server | Initiated from external events or client calls | Uses knowledge bases or skills | Any | Any |

### Combine patterns for real-world use cases

Most genies use more than one pattern. The patterns are composable. A single genie might use Guided skill chaining as the primary flow, Controlled data volume when a skill returns a large dataset, and Persistent state to store the workflow outcome for reporting.

Identify your primary pattern first. The primary pattern determines the job description structure and the overall skill sequencing logic. Secondary patterns influence how specific skills are designed and how data is handled at specific points in the flow.

---
