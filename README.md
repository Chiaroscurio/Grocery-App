# Market List

A grocery list + recipe box that runs entirely in the browser. Your list and
recipes are saved on the device (browser storage), not on any server.

## Adding recipes

**Recipe library (recommended).** Recipes live in `src/recipes.js`. Send links
or PDFs to Claude Code and ask for them to be added; after a rebuild and push,
they appear in the app on every device. Deleting a library recipe in the app
hides it on that device for good.

**In the app.** Recipes tab → **+ Add** → **Paste a link** reads the recipe
data many sites embed (title, ingredients, steps, time, servings, nutrition).
Many recipe sites block automated reading, though, and then the app falls back
to saving a titled link. **Write it yourself** is always available.

Recipes added in the app are stored only in that browser.

## Hosting

GitHub Pages from a public repo works. `functions/api/fetch.js` only runs
on Cloudflare Pages, which can also host from a private repo:

### Cloudflare Pages (free, private repo OK)

1. Sign in at dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub and pick this repo (private is fine).
3. Build settings: framework **None**, build command empty, output directory `/`.
4. Deploy. You get `https://<name>.pages.dev`; every push to `main` redeploys.
5. Optional lock: **Zero Trust → Access → Applications** → add the `pages.dev`
   hostname and allow only your email (free one-time-code login).
6. On your phone, open the URL in Chrome → ⋮ → **Add to Home screen**.

## Editing

Edit `src/app.js` (logic) or `src/template-before.html` (markup), then run:

    python3 build.py

which rebuilds the self-contained `index.html`.
