// Cloudflare Pages Function: GET /api/fetch?url=<recipe page>
// Fetches a recipe page server-side so the app can read it (browsers block
// reading other sites directly). Returns the page HTML as text.
export async function onRequestGet({ request }) {
  const target = new URL(request.url).searchParams.get('url') || '';
  let u;
  try { u = new URL(target); } catch { return new Response('bad url', { status: 400 }); }
  if (!/^https?:$/.test(u.protocol)) return new Response('bad url', { status: 400 });

  const res = await fetch(u.toString(), {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    redirect: 'follow',
  });
  const type = res.headers.get('content-type') || '';
  if (!type.includes('html')) return new Response('not a web page', { status: 415 });
  const body = await res.text();
  return new Response(body.slice(0, 3_000_000), {
    status: res.ok ? 200 : 502,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
