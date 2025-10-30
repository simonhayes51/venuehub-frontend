// src/data/store.js
// Demo data + localStorage-backed CRUD + shortlist helpers.
// Everything is SSR-safe: localStorage is only touched inside functions.

// ---------- Defaults ----------
const DEFAULT_ACTS = [
  { id: "act-001", title: "Neon Nights Band", rating: 4.9, priceFrom: 600, tags: ["band","party"] },
  { id: "act-002", title: "DJ Vortex",        rating: 4.7, priceFrom: 350, tags: ["dj","club"] },
  { id: "act-003", title: "Boogie Test",      rating: 4.5, priceFrom: 400, tags: ["band"] },
];

const DEFAULT_VENUES = [
  { id: "ven-001", title: "City Lights Loft",   city: "Leeds",      capacity: 80,  priceFrom: 600 },
  { id: "ven-002", title: "Coastal View Barn",  city: "Sunderland", capacity: 120, priceFrom: 900 },
  { id: "ven-003", title: "The Grand Hall",     city: "Newcastle",  capacity: 300, priceFrom: 1500 },
];

// ---------- Storage helpers ----------
const AK = "vh.acts";
const VK = "vh.venues";
const SK = "vh.shortlist";

function hasLS() { try { return typeof localStorage !== "undefined"; } catch { return false; } }

function readJSON(key, fallback) {
  if (!hasLS()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

function writeJSON(key, value) {
  if (!hasLS()) return;
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

// ---------- Public getters ----------
export function getActs()   { return readJSON(AK, DEFAULT_ACTS).slice(); }
export function getVenues() { return readJSON(VK, DEFAULT_VENUES).slice(); }

// ---------- CRUD (Admin uses these) ----------
export function addAct(partial) {
  const list = getActs();
  const act = { id: uid("act"), title: "", rating: 0, priceFrom: 0, tags: [], ...partial };
  list.push(act);
  writeJSON(AK, list);
  return act;
}

export function addVenue(partial) {
  const list = getVenues();
  const venue = { id: uid("ven"), title: "", city: "", capacity: 0, priceFrom: 0, ...partial };
  list.push(venue);
  writeJSON(VK, list);
  return venue;
}

export function deleteAct(id) {
  const list = getActs().filter(x => x.id !== id);
  writeJSON(AK, list);
  return list.length;
}

export function deleteVenue(id) {
  const list = getVenues().filter(x => x.id !== id);
  writeJSON(VK, list);
  return list.length;
}

// (Optional) updates if you wire them later
export function updateAct(id, patch) {
  const list = getActs();
  const i = list.findIndex(x => x.id === id);
  if (i >= 0) { list[i] = { ...list[i], ...patch }; writeJSON(AK, list); return list[i]; }
  return null;
}
export function updateVenue(id, patch) {
  const list = getVenues();
  const i = list.findIndex(x => x.id === id);
  if (i >= 0) { list[i] = { ...list[i], ...patch }; writeJSON(VK, list); return list[i]; }
  return null;
}

// ---------- Search ----------
export function searchAll(q) {
  const needle = (q || "").trim().toLowerCase();
  if (!needle) return { acts: getActs(), venues: getVenues() };

  const acts = getActs().filter(x =>
    `${x.title}`.toLowerCase().includes(needle) ||
    (x.tags || []).some(t => `${t}`.toLowerCase().includes(needle))
  );

  const venues = getVenues().filter(x =>
    `${x.title}`.toLowerCase().includes(needle) ||
    `${x.city}`.toLowerCase().includes(needle)
  );

  return { acts, venues };
}

// ---------- Shortlist ----------
function readShort()  { return readJSON(SK, []); }
function writeShort(a){ writeJSON(SK, a); }

export function getShortlist() { return readShort(); }

export function isShort(id) {
  return readShort().includes(id);
}

export function toggleShort(id) {
  const s = readShort();
  const i = s.indexOf(id);
  if (i >= 0) s.splice(i, 1);
  else s.push(id);
  writeShort(s);
  return s;
}
