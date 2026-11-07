<!-- source: https://docs.workato.com/en/agentic/agent-studio/limits | lastmod: 2026-09-10 -->
> Reference for Agent Studio quotas, including feature quotas and developer API endpoint quotas for building and managing genies in Workato.

# Agent Studio quotas

Agent Studio features have the following quotas:

> **DEFAULT QUOTAS**
> 
> The quotas on this page are defaults based on Workato best practices and are configured to enable optimal platform performance. Customers on Enterprise plans or above can contact their Customer Success Representative to request an extension of these quotas for their specific use cases.

| Description | Quota | Notes |
| --- | --- | --- |
| Maximum data storage per document in a knowledge base | 100 MB | NA |
| Sliding token context window | 64,000 | NA |
| Rate quota for genie task requests | 500 requests per second | No quota applies to genie tasks triggered from Slack or Microsoft Teams. |
| Rate quota for unauthenticated Headless API requests | 200 requests per second globally | 50 requests per second per genie and 50 requests per second per source IP also apply. |
| Rate quota for authenticated Headless API requests | 50 requests per second globally | 20 requests per second per workspace apply to all endpoints except **Send a message**. 5 requests per second per workspace apply to the **Send a message** endpoint. |
| Concurrent server-sent event (SSE) streams for authenticated Headless API requests | 1,000 concurrent streams globally | 100 concurrent SSE streams per workspace also apply. |
| Rate quota for business event requests | 16 requests per second | NA |

Additionally, Agent Studio developer API endpoints have the following quotas:

| Type | Resource | Quota |
| --- | --- | --- |
| GET | List genies: [/api/agentic/genies](https://docs.workato.com/workato-api/agent-studio.html#list-genies) | 1,000 requests per minute |
| GET | Get a genie by ID: [/api/agentic/genies/:id](https://docs.workato.com/workato-api/agent-studio.html#get-a-genie-by-id) | 1,000 requests per minute |
| GET | All [genie conversation](https://docs.workato.com/workato-api/agent-studio.html#conversations) endpoints | 10 requests per second |
| All | All other [genie](https://docs.workato.com/workato-api/agent-studio.html#genies) endpoints | 60 requests per minute |
| GET | List Knowledge bases: [/api/agentic/knowledge\_bases](https://docs.workato.com/workato-api/agent-studio.html#list-knowledge-bases) | 1,000 requests per minute |
| GET | Get a Knowledge base by ID: [/api/agentic/knowledge\_bases/:id](https://docs.workato.com/workato-api/agent-studio.html#get-a-knowledge-base-by-id) | 1,000 requests per minute |
| All | All other [Knowledge bases](https://docs.workato.com/workato-api/agent-studio.html#knowledge-bases) endpoints | 60 requests per minute |
| GET | List Skills: [/api/agentic/skills](https://docs.workato.com/workato-api/agent-studio.html#list-skills) | 1,000 requests per minute |
| GET | Get a skill by ID: [api/agentic/skills/:id](https://docs.workato.com/workato-api/agent-studio.html#get-a-skill-by-id) | 1,000 requests per minute |
| All | All other [Skills](https://docs.workato.com/workato-api/agent-studio.html#skills) endpoints | 60 requests per minute |

> **FURTHER READING**
> 
> Refer to the [Platform quotas](/en/limits) documentation for more information about Workato quotas.

---
