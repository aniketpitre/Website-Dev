# Workato working notes (learned from the live workspace)

Keep this file short and factual. Add a line whenever something is learned the hard way.

## Workspace
- Host: `app.trial.workato.com` (trial data center, free self-service plan). The US host `app.workato.com` rejects this token.
- MCP endpoint: `https://app.trial.workato.com/mcp` (official Developer API MCP server, ~250 tools).
- Projects: `Home` (id 50878, folder 74742), `Test` (id 50879, folder 74743).
- Existing recipes are exported to `examples/recipes/` — use them as templates for recipe `code`.

## MCP server quirks
- Every tool has constant `verb` and `path` args that must be sent; `tools/workato.py` fills them in.
- Path ids are strings: `get_recipes_` takes `{"recipe_id": "372899"}`, not an integer or `id`.
- Responses are often Ruby `inspect` text (`"key" => value`, `nil`), not JSON. Strings inside use Ruby
  escapes (`\#`, `\e`, ...). Parse by regex + a proper unescape, not `json.loads` on the whole thing.
- Tool names: `get_X` list, `get_X_` get one, `post_X` create, `put_X_` update, `delete_X_` delete.
  Recipes: `post_recipes`, `put_recipes_`, `put_recipes_start`, `put_recipes_stop`, `get_recipes_jobs`.
  Genies: `post_agentic_genies`, `post_agentic_genies_assign_skills`, `post_agentic_genies_start`.
- Not supported by the server: event streams, lookup tables.

## Recipe code format (from exported recipes)
- `code` is one JSON tree. Root step: `{"number":0,"keyword":"trigger","provider":"clock","name":"scheduled_event","as":"<8-hex>","input":{...},"block":[ ...actions... ]}`.
- Child steps: `keyword` = `action` | `if` | `elsif` | `else` | `foreach` | `repeat` | `try` | `catch` | `stop`; nested under `block`.
- `as` is a unique 8-hex id per step; datapills reference it, e.g. `#{_dp('{"pill_type":"output","provider":"google_drive","line":"0d404fc4","path":["content"]}')}`.
- `config` lists each app used: `{"keyword":"application","provider":"google_drive","name":"google_drive","account_id":<connection id or null>}`.
- Create via `post_recipes` with `recipe.code` and `recipe.config` as JSON **strings**, plus `folder_id`.
- Build flow: search docs for the connector's trigger/action names → copy a similar example → create stopped →
  ask the user to connect apps in the UI → start.
