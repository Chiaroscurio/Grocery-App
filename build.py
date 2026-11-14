#!/usr/bin/env python3
"""Rebuild index.html from src/.

The app is a self-contained bundle: index.html carries the fonts and React
inline, plus a JSON-encoded page template. This script swaps in the template
assembled from src/template-before.html + src/recipes.js + src/app.js + src/template-after.html.
Run:  python3 build.py
"""
import json, pathlib, sys

root = pathlib.Path(__file__).parent
src = root / 'src'
template = ''.join((src / n).read_text() for n in ('template-before.html', 'recipes.js', 'app.js', 'template-after.html'))
# Stamp the build date so the app can show which version is installed.
import datetime
template = template.replace('__APP_BUILD__', datetime.datetime.now().strftime('%b %-d, %Y %H:%M UTC'))
for n in ('recipes.js', 'app.js'):
    if '</script>' in (src / n).read_text():
        sys.exit(f'src/{n} must not contain a literal </script>')

page = root / 'index.html'
lines = page.read_text().split('\n')
idx = next(i for i, l in enumerate(lines) if l.strip() == '<script type="__bundler/template">') + 1
# Same escaping the bundler uses so the template can sit inside a <script>.
lines[idx] = json.dumps(template, ensure_ascii=False).replace('</', '<\\u002F')
page.write_text('\n'.join(lines))
print('built', page, len(template), 'chars of template')
