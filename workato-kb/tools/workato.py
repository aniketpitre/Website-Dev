#!/usr/bin/env python3
"""Call the official Workato Developer API MCP server from the shell.

Useful when the `workato` MCP tools from .mcp.json are not loaded in a session.
Auth: in Claude Code cloud sessions the network proxy injects the API token for
the host; locally, set WORKATO_API_TOKEN. Set WORKATO_MCP_URL to use another
data center (default: the trial workspace).

  python3 workato-kb/tools/workato.py --list [filter]       # list tool names
  python3 workato-kb/tools/workato.py --schema post_recipes  # show a tool's input schema
  python3 workato-kb/tools/workato.py get_recipes '{"per_page": 50}'
  python3 workato-kb/tools/workato.py get_recipes_ '{"id": 372903}'

Each tool needs constant `verb` and `path` arguments; they are filled in from
the schema automatically. Responses often come back as Ruby-hash text
(`"key" => value`); they are printed as-is unless they parse as JSON.
"""
import json
import os
import sys
import urllib.request

URL = os.environ.get("WORKATO_MCP_URL", "https://app.trial.workato.com/mcp")
HDR = {"Content-Type": "application/json", "Accept": "application/json, text/event-stream"}
if os.environ.get("WORKATO_API_TOKEN"):
    HDR["Authorization"] = "Bearer " + os.environ["WORKATO_API_TOKEN"]
_sid = None
_schemas = {}


def post(body):
    global _sid
    h = dict(HDR)
    if _sid:
        h["Mcp-Session-Id"] = _sid
    req = urllib.request.Request(URL, json.dumps(body).encode(), h, method="POST")
    with urllib.request.urlopen(req, timeout=120) as r:
        _sid = _sid or r.headers.get("Mcp-Session-Id")
        txt = r.read().decode()
    for line in txt.splitlines():
        if line.startswith("data: "):
            return json.loads(line[6:])
    return json.loads(txt) if txt.strip() else None


def init():
    post({"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {
        "protocolVersion": "2025-06-18", "capabilities": {}, "clientInfo": {"name": "workato-kb", "version": "1.0"}}})
    post({"jsonrpc": "2.0", "method": "notifications/initialized"})
    for t in post({"jsonrpc": "2.0", "id": 2, "method": "tools/list", "params": {}})["result"]["tools"]:
        _schemas[t["name"]] = t


def call(name, args=None):
    if not _schemas:
        init()
    if name not in _schemas:
        raise SystemExit(f"unknown tool {name}; try --list")
    args = dict(args or {})
    for k, v in _schemas[name]["inputSchema"].get("properties", {}).items():
        if "const" in v and k not in args:
            args[k] = v["const"]
    r = post({"jsonrpc": "2.0", "id": 3, "method": "tools/call", "params": {"name": name, "arguments": args}})
    if "error" in r:
        return {"error": r["error"]}
    text = "\n".join(c.get("text", "") for c in r["result"].get("content", []))
    try:
        return json.loads(text)
    except Exception:
        return text


def main():
    a = sys.argv[1:]
    if not a or a[0] in ("-h", "--help"):
        print(__doc__)
        return
    init()
    if a[0] == "--list":
        f = a[1] if len(a) > 1 else ""
        for n, t in _schemas.items():
            if f in n:
                print(f"{n}: {t.get('description', '')[:110]}")
        return
    if a[0] == "--schema":
        print(json.dumps(_schemas[a[1]], indent=1))
        return
    out = call(a[0], json.loads(a[1]) if len(a) > 1 else {})
    print(out if isinstance(out, str) else json.dumps(out, indent=1))


if __name__ == "__main__":
    main()
