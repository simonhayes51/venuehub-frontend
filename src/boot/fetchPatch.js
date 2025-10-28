const API = import.meta.env.VITE_API_URL;

// Helper: turn possibly-relative URL into absolute API endpoint
function toApi(url) {
  try {
    const u = String(url);
    if (!API) return u;
    // Normalise any frontend-relative paths to the API
    if (u.endsWith('/providers/register') || u.includes('/providers/register')) {
      // Ensure '/api' prefix and absolute host
      const path = u.includes('/api/') ? u.replace(/^https?:\/\/[^/]+/, '') : u.replace(/^https?:\/\/[^/]+/, '').replace('/providers/register', '/api/providers/register');
      return API.replace(/\/$/, '') + path;
    }
    return u;
  } catch {
    return url;
  }
}

(function patchFetch(){
  if (window.__vhFetchPatched) return;
  const _fetch = window.fetch.bind(window);
  window.fetch = async (input, init = {}) => {
    const url = toApi(typeof input === 'string' ? input : input.url);
    const reqInit = { ...init };
    // default headers for JSON posts
    if (url.includes('/providers/register')) {
      reqInit.method = reqInit.method || 'POST';
      reqInit.headers = { 'Content-Type': 'application/json', ...(reqInit.headers || {}) };
    }
    try {
      const res = await _fetch(url, reqInit);
      if (!res.ok) {
        console.error('[VenueHub] Provider submit failed', res.status, res.statusText);
      }
      return res;
    } catch (e) {
      console.error('[VenueHub] Network error during provider submit', e);
      throw e;
    }
  };
  window.__vhFetchPatched = true;
})();
