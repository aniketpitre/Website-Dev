<!-- source: https://docs.workato.com/en/connectors/vercel/promote-deployment-action | lastmod: 2026-10-28 -->
> The Promote deployment action points production traffic at an existing Vercel deployment without rebuilding it.

# Vercel - Promote deployment action

The **Promote deployment** action points production traffic at an existing deployment without rebuilding it. Vercel promotes deployments asynchronously, so a successful output means Vercel accepted the request.

## Input

| Input field | Description |
| --- | --- |
| Project ID | Select a project or enter a project ID. |
| Deployment ID | Select a deployment or enter a deployment UID. |

## Output

| Output field | Description |
| --- | --- |
| Success | A boolean value (`true` or `false`) that indicates whether Vercel accepted the promote request. |

---
