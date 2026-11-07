#!/usr/bin/env python3
"""Build (or refresh) the local Workato docs knowledge base.

Downloads Workato's official LLM-friendly doc dump (llms-full.txt) and sitemap
from docs.workato.com, then writes:

  workato-kb/docs/<path>.md      one markdown file per English doc page
  workato-kb/sections/<top>.md   per-section table of contents (title, path, summary)
  workato-kb/INDEX.md            top-level map of sections with page counts
  workato-kb/manifest.json       url -> path, title, description, lastmod, sha1
  workato-kb/CHANGELOG.md        pages added / changed / removed by the last refresh

Usage:
  python3 workato-kb/tools/build.py                # download + rebuild
  python3 workato-kb/tools/build.py --src DIR      # use already-downloaded files
"""
import argparse
import hashlib
import json
import os
import re
import shutil
import sys
import urllib.request
from collections import defaultdict
from datetime import datetime, timezone

BASE = "https://docs.workato.com"
KB = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(KB, "docs")
SECTIONS = os.path.join(KB, "sections")

# Front matter: url is either `url: '<u>'` or folded YAML (`url: >-` then the url indented on the next line).
PAGE_START = re.compile(
    r"^---\nurl: (?:'(https://docs\.workato\.com/en/[^']+)'|>-\n[ ]+(https://docs\.workato\.com/en/\S+))\n(.*?)^---\n",
    re.M | re.S,
)


def fetch(name, src):
    if src:
        with open(os.path.join(src, name), encoding="utf-8") as f:
            return f.read()
    req = urllib.request.Request(f"{BASE}/{name}", headers={"User-Agent": "workato-kb-builder/1.0"})
    with urllib.request.urlopen(req, timeout=300) as r:
        return r.read().decode("utf-8")


def parse_desc(front):
    m = re.search(r"^description:\s*(>-|\|)?\s*\n((?:[ ]{2,}.*\n?)+)", front, re.M)
    if m:
        return " ".join(l.strip() for l in m.group(2).splitlines()).strip()
    m = re.search(r"^description:\s*['\"]?(.*?)['\"]?\s*$", front, re.M)
    return m.group(1).strip() if m else ""


def url_to_rel(url):
    p = url[len(BASE) + len("/en/"):]
    p = re.sub(r"\.md$", "", p).replace(".html", "")
    p = re.sub(r"[^A-Za-z0-9/_\-.]", "_", p).strip("/") or "index"
    return p + ".md"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", help="directory containing llms-full.txt and sitemap.xml")
    a = ap.parse_args()

    full = fetch("llms-full.txt", a.src)
    sitemap = fetch("sitemap.xml", a.src)
    lastmod = {}
    for loc, mod in re.findall(r"<loc>([^<]+)</loc><lastmod>([^<]+)</lastmod>", sitemap):
        lastmod[loc.rstrip("/").removesuffix(".html")] = mod[:10]

    starts = list(PAGE_START.finditer(full))
    if len(starts) < 1000:
        sys.exit(f"Only {len(starts)} pages parsed; format may have changed. Aborting without changes.")

    old_manifest = {}
    mpath = os.path.join(KB, "manifest.json")
    if os.path.exists(mpath):
        old_manifest = json.load(open(mpath))["pages"]

    if os.path.isdir(DOCS):
        shutil.rmtree(DOCS)
    if os.path.isdir(SECTIONS):
        shutil.rmtree(SECTIONS)
    os.makedirs(DOCS)
    os.makedirs(SECTIONS)

    pages = {}
    for i, m in enumerate(starts):
        url = m.group(1) or m.group(2)
        end = starts[i + 1].start() if i + 1 < len(starts) else len(full)
        body = full[m.end():end].strip() + "\n"
        tm = re.search(r"^# (.+)$", body, re.M)
        title = tm.group(1).strip() if tm else url.rsplit("/", 1)[-1]
        desc = parse_desc(m.group(3))
        rel = url_to_rel(url)
        page_url = url.removesuffix(".md")
        mod = lastmod.get(page_url, "")
        header = f"<!-- source: {page_url} | lastmod: {mod or 'unknown'} -->\n"
        if desc:
            header += f"> {desc}\n\n"
        text = header + body
        out = os.path.join(DOCS, rel)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        with open(out, "w", encoding="utf-8") as f:
            f.write(text)
        pages[page_url] = {
            "path": f"docs/{rel}",
            "title": title,
            "description": desc,
            "lastmod": mod,
            "sha1": hashlib.sha1(body.encode()).hexdigest(),
        }

    # Per-section tables of contents
    by_top = defaultdict(list)
    for url, p in pages.items():
        top = p["path"].split("/")[1].removesuffix(".md")
        by_top[top].append((p["path"], p["title"], p["description"]))
    for top, items in by_top.items():
        items.sort()
        lines = [f"# Section: {top} ({len(items)} pages)\n"]
        for path, title, desc in items:
            lines.append(f"- `{path}` — **{title}**" + (f": {desc}" if desc else ""))
        with open(os.path.join(SECTIONS, f"{top}.md"), "w", encoding="utf-8") as f:
            f.write("\n".join(lines) + "\n")

    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    idx = [
        "# Workato docs knowledge base — index",
        "",
        f"Built {now} from {BASE}/llms-full.txt — {len(pages)} English pages.",
        "",
        "Search first (`python3 workato-kb/tools/search.py \"query\"`), then open the matching",
        "file or section TOC. Each section below links to its table of contents.",
        "",
        "| Section | Pages | TOC |",
        "|---|---|---|",
    ]
    for top in sorted(by_top, key=lambda t: -len(by_top[t])):
        idx.append(f"| {top} | {len(by_top[top])} | `sections/{top}.md` |")
    with open(os.path.join(KB, "INDEX.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(idx) + "\n")

    with open(mpath, "w", encoding="utf-8") as f:
        json.dump({"built": now, "source": f"{BASE}/llms-full.txt", "count": len(pages), "pages": pages},
                  f, indent=0, sort_keys=True)

    added = sorted(set(pages) - set(old_manifest))
    removed = sorted(set(old_manifest) - set(pages))
    changed = sorted(u for u in set(pages) & set(old_manifest) if pages[u]["sha1"] != old_manifest[u]["sha1"])
    log = [f"# Last refresh: {now}", "", f"- pages: {len(pages)}",
           f"- added: {len(added)}", f"- changed: {len(changed)}", f"- removed: {len(removed)}", ""]
    if old_manifest:
        for name, lst in (("Added", added), ("Changed", changed), ("Removed", removed)):
            if lst:
                log.append(f"## {name}")
                log += [f"- {u}" for u in lst[:500]]
                log.append("")
    with open(os.path.join(KB, "CHANGELOG.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(log) + "\n")

    print(f"{len(pages)} pages, {len(by_top)} sections | added {len(added)} changed {len(changed)} removed {len(removed)}")


if __name__ == "__main__":
    main()
