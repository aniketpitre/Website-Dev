# CLAUDE.md

## Workato

This repo carries a Workato setup: the official Workato MCP server (`.mcp.json`, server `workato`)
and a local knowledge base of the full Workato docs in `workato-kb/`.

### Knowledge: search, don't guess
- Before answering a Workato question or building anything, search the docs:
  `python3 workato-kb/tools/search.py "<query>" -n 8` (add `--section <name>` or `--show`).
- Then read only the hit's line range from the file it names. Never read whole sections or
  `manifest.json` into context; `workato-kb/INDEX.md` and `workato-kb/sections/*.md` are the maps.
- Read `workato-kb/NOTES.md` first for workspace facts and MCP quirks; append new lessons to it.
- If the docs look stale (check `workato-kb/CHANGELOG.md` date), refresh with
  `python3 workato-kb/tools/build.py`, then commit the result.

### Acting on the workspace
- Use the `workato` MCP tools when loaded; otherwise `python3 workato-kb/tools/workato.py <tool> '<json>'`
  (`--list <filter>`, `--schema <tool>`). Auth is injected by the session proxy; never print or commit tokens.
- Building recipes: base `code` on a similar file in `workato-kb/examples/recipes/` and the connector's
  docs; create recipes stopped, tell the user which app connections they must authorize, then start.
- Confirm with the user before deleting assets, stopping running recipes, or changing members/roles.
