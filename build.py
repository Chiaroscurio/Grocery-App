#!/usr/bin/env python3
"""Rebuild index.html from src/.

The app is a self-contained bundle: index.html carries the fonts and React
inline, plus a JSON-encoded page template. This script swaps in the template
assembled from src/template-before.html + src/app.js + src/template-after.html.
Run:  python3 build.py
"""
import json, pathlib, sys

root = pathlib.Path(__file__).parent
src = root / 'src'
template = ''.join((src / n).read_text() for n in ('template-before.html', 'app.js', 'template-after.html'))
if '</script>' in (src / 'app.js').read_text():
    sys.exit('src/app.js must not contain a literal </script>')

page = root / 'index.html'
lines = page.read_text().split('\n')
idx = next(i for i, l in enumerate(lines) if l.strip() == '<script type="__bundler/template">') + 1
# Same escaping the bundler uses so the template can sit inside a <script>.
lines[idx] = json.dumps(template, ensure_ascii=False).replace('</', '<\\u002F')
page.write_text('\n'.join(lines))
print('built', page, len(template), 'chars of template')
