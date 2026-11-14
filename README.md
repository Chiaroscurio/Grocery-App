# Market List

A grocery list + recipe box that runs entirely in the browser. Your list and
recipes are saved on the device (browser storage), not on any server.

## Adding recipes

Recipes tab → **+ Add** → **Paste a link**. The app reads the recipe data most
sites embed for Google (title, ingredients, steps, time, servings, nutrition),
sorts the ingredients into aisles, and keeps the link so you can tap
**Open original** while cooking. If a site can't be read, you can still save
it as a link with your own title.

Reading another site from a web page needs a small helper on the server, which
is `functions/api/fetch.js`. It runs automatically when the app is hosted on
Cloudflare Pages (below). Elsewhere the app falls back to a public relay that
is often unreliable.

## Hosting from a private repo (Cloudflare Pages, free)

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
