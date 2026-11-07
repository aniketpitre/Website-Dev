# Workato knowledge base

A local, searchable copy of the official Workato documentation plus working notes,
so Claude can answer and build with up-to-date Workato knowledge without loading
everything into its context window.

| Path | What it is |
|---|---|
| `docs/` | One markdown file per English page of docs.workato.com (4,500+ pages) |
| `INDEX.md` | Map of sections with page counts |
| `sections/<name>.md` | Table of contents for one section: path, title, one-line summary |
| `manifest.json` | url → file, title, description, lastmod, hash |
| `CHANGELOG.md` | What the last refresh added, changed or removed |
| `NOTES.md` | Lessons learned from the live workspace and MCP server |
| `examples/recipes/` | Exported code of the workspace's recipes, used as templates |
| `tools/search.py` | BM25 search returning `file:line-range` hits |
| `tools/build.py` | Downloads and rebuilds the docs from Workato |
| `tools/workato.py` | Shell client for the Workato MCP server |

## Use

```bash
python3 workato-kb/tools/search.py "how do recipe functions work" -n 5
```

```bash
python3 workato-kb/tools/search.py "new row trigger" --section connectors/google-sheets --show
```

## Refresh from docs.workato.com

```bash
python3 workato-kb/tools/build.py
```

Source: `https://docs.workato.com/llms-full.txt` (Workato's official LLM-ready export) and
`sitemap.xml` for last-modified dates. Needs network access to `docs.workato.com`.
