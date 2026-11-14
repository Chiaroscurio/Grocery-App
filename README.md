# Market List

A grocery list + recipe box that runs entirely in the browser. Your list and
recipes are saved on the device (browser storage), not on any server.

## Features

- **Recipes**: search by name, tag or ingredient; tag chips; *Surprise me* opens a random recipe.
- **Worth knowing**: standing recommendations on each recipe, labelled either
  *what reviewers say* or *from reading the recipe*. Ones with a concrete change
  can be applied, which creates a new version; others can be pinned as a note
  or dismissed.
- **History**: every recipe keeps its original. Applying a recommendation,
  pinning a note or saving cook-log fixes adds a version; tap any version to
  view it, or make it current again (that adds a new entry, nothing is erased).
  Ingredients and steps that differ from the original are tagged REVISED / ADDED.
- **Week**: seven dinner slots; pick, shuffle, or fill empty days at random.
  *Shop the week* adds every ingredient to the list, merging repeats and adding
  matching amounts (2 cloves + 3 cloves = 5 cloves). The nutrition card compares
  the average planned dinner with rough targets (~35% of a day) and suggests
  swaps when protein or fiber run low.
- **Import** warns when a link or title is already in your recipes.

## Adding recipes

**Recipe library (recommended).** Recipes live in `src/recipes.js`. Send links
or PDFs to Claude Code and ask for them to be added; after a rebuild and push,
they appear in the app on every device. Recommendations and tags for library
recipes refresh on every load; deleting a library recipe hides it on that
device for good. Some sites block automated reading; those are saved as
link-only until you send a PDF of the page.

**In the app.** Recipes tab → **+ Add** → **Paste a link** reads the recipe
data many sites embed. When a site blocks it, the app falls back to saving a
titled link. **Write it yourself** is always available.

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
