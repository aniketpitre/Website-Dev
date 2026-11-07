#!/usr/bin/env python3
"""Search the local Workato docs knowledge base without loading it all into context.

Pages are split into heading-level chunks and ranked with BM25 (title and
heading matches weigh more). Each hit prints file:line range so you can read
just that slice.

  python3 workato-kb/tools/search.py "recipe function formula to_date"
  python3 workato-kb/tools/search.py "genie skills" -n 5 --section agentic
  python3 workato-kb/tools/search.py "salesforce new record trigger" --show   # print chunk text
  python3 workato-kb/tools/search.py "error monitor" --pages                  # one hit per page
"""
import argparse
import math
import os
import pickle
import re
from collections import Counter

KB = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(KB, "docs")
CACHE = os.path.join(KB, ".search-cache.pkl")
TOKEN = re.compile(r"[a-z0-9_]+")
STOP = set("a an and are as at be by can for from has have how i if in into is it its of on or that the this to "
           "use used using was what when which with you your".split())


def toks(s):
    return [t for t in TOKEN.findall(s.lower()) if t not in STOP and len(t) > 1]


def chunks_of(rel, text):
    lines = text.split("\n")
    title = next((l[2:].strip() for l in lines if l.startswith("# ")), rel)
    out, start, head = [], 0, title
    in_code = False
    for i, l in enumerate(lines):
        if l.startswith("```"):
            in_code = not in_code
        if not in_code and re.match(r"^#{2,4} ", l) and i > start:
            out.append((rel, start + 1, i, title, head))
            start, head = i, l.lstrip("#").strip()
    out.append((rel, start + 1, len(lines), title, head))
    return out, lines


def build():
    stamp = max(os.path.getmtime(os.path.join(KB, "manifest.json")), 0)
    if os.path.exists(CACHE):
        try:
            with open(CACHE, "rb") as f:
                c = pickle.load(f)
            if c["stamp"] == stamp:
                return c
        except Exception:
            pass
    meta, tfs, dl = [], [], []
    df = Counter()
    for root, _, files in os.walk(DOCS):
        for fn in files:
            if not fn.endswith(".md"):
                continue
            path = os.path.join(root, fn)
            rel = os.path.relpath(path, KB)
            with open(path, encoding="utf-8") as f:
                text = f.read()
            chs, lines = chunks_of(rel, text)
            for (r, a, b, title, head) in chs:
                body = "\n".join(lines[a - 1:b])
                tf = Counter(toks(body))
                for t in toks(title) * 3 + toks(head) * 2 + toks(rel.replace("/", " ").replace("-", " ")) * 2:
                    tf[t] += 1
                meta.append((r, a, b, title, head))
                tfs.append(dict(tf))
                dl.append(sum(tf.values()))
                df.update(tf.keys())
    c = {"stamp": stamp, "meta": meta, "tfs": tfs, "dl": dl, "df": dict(df)}
    try:
        with open(CACHE, "wb") as f:
            pickle.dump(c, f)
    except OSError:
        pass
    return c


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("query")
    ap.add_argument("-n", type=int, default=8, help="number of hits")
    ap.add_argument("--section", help="limit to a top-level section, e.g. recipes, connectors/salesforce")
    ap.add_argument("--show", action="store_true", help="print the text of each hit (capped)")
    ap.add_argument("--pages", action="store_true", help="best chunk per page only")
    a = ap.parse_args()

    c = build()
    q = toks(a.query)
    N = len(c["meta"])
    avg = sum(c["dl"]) / N
    k1, b = 1.4, 0.75
    idf = {t: math.log(1 + (N - c["df"].get(t, 0) + 0.5) / (c["df"].get(t, 0) + 0.5)) for t in q}
    pref = f"docs/{a.section.strip('/')}" if a.section else None
    scored = []
    for i, tf in enumerate(c["tfs"]):
        if pref and not c["meta"][i][0].startswith(pref):
            continue
        s, hits = 0.0, 0
        for t in q:
            f = tf.get(t)
            if f:
                hits += 1
                s += idf[t] * f * (k1 + 1) / (f + k1 * (1 - b + b * c["dl"][i] / avg))
        if s:
            scored.append((s * (1 + hits / len(q)), i))
    scored.sort(reverse=True)
    seen, shown = set(), 0
    for s, i in scored:
        rel, ln_a, ln_b, title, head = c["meta"][i]
        if a.pages and rel in seen:
            continue
        seen.add(rel)
        print(f"[{s:5.1f}] {rel}:{ln_a}-{ln_b}  {title}" + (f"  §  {head}" if head != title else ""))
        if a.show:
            with open(os.path.join(KB, rel), encoding="utf-8") as f:
                lines = f.read().split("\n")[ln_a - 1:ln_b]
            body = "\n".join(lines)
            print("    " + body[:2500].replace("\n", "\n    ") + ("\n    …" if len(body) > 2500 else "") + "\n")
        shown += 1
        if shown >= a.n:
            break
    if not shown:
        print("no matches")


if __name__ == "__main__":
    main()
