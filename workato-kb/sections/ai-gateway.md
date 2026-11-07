# Section: ai-gateway (12 pages)

- `docs/ai-gateway.md` — **Model Gateway**: Model Gateway gives you OpenAI-compatible and Anthropic-compatible APIs to authenticate LLM providers, route requests, and enforce policies across your applications.
- `docs/ai-gateway/access-keys.md` — **Access keys**: Create, edit, refresh, and delete the access keys applications use to authenticate with Model Gateway.
- `docs/ai-gateway/configure.md` — **Configure Model Gateway**: Set up Model Gateway by adding providers, creating routes, issuing access keys, and defining policies that control rate limits, token limits, and IP access.
- `docs/ai-gateway/connect-clients.md` — **Connect clients**: Configure Claude Desktop, Claude Code, and the Anthropic Python and TypeScript SDKs to send requests through Model Gateway.
- `docs/ai-gateway/fireworks.md` — **Connect Fireworks AI**: Use your own Fireworks AI API key with Model Gateway to route requests to open-weight models hosted on Fireworks AI.
- `docs/ai-gateway/gateways.md` — **Gateways**: Gateways are Workato's egress control point for enterprise AI traffic. Model Gateway, MCP Gateway, Agent Gateway, and API Gateway each govern a different kind of call through one policy, telemetry, and identity plane.
- `docs/ai-gateway/monitor.md` — **Model Gateway dashboard**: Use the Model Gateway dashboard to monitor request volume, token usage, and success rates across your workspace.
- `docs/ai-gateway/policies.md` — **Policies**: Create Model Gateway policies that apply rate limits, token limits, and IP access restrictions to routes and access keys.
- `docs/ai-gateway/providers.md` — **Providers**: Add, edit, and delete the LLM provider connections Model Gateway uses to authenticate with Anthropic, OpenAI, OpenAI Compatible, Azure OpenAI, AWS Bedrock, AWS Bedrock Mantle, Fireworks, and Gemini.
- `docs/ai-gateway/route-builder.md` — **Route builder**: Use the route builder to define rules that route LLM requests to a specific provider and model based on tags, keys, parameters, or complexity.
- `docs/ai-gateway/routes.md` — **Routes**: Create, edit, and delete the Model Gateway routes that determine which provider and model serves each request.
- `docs/ai-gateway/test-route.md` — **Test a route**: Send a test request to Model Gateway through the OpenAI-compatible or Anthropic-compatible API to confirm a route works.
