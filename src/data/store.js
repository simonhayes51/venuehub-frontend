// src/data/store.js
// Minimal in-memory demo data + localStorage shortlist helpers

// ---------- Demo data ----------
const _acts = [
  { id: "act-001", title: "Neon Nights Band", rating: 4.9, priceFrom: 600, tags: ["band","party"] },
  { id: "act-002", title: "DJ Vortex",        rating: 4.7, priceFrom: 350, tags: ["dj","club"] },
  { id: "act-003", title: "Boogie Test",      rating: 4.5, priceFrom: 400, tags: ["band"] },
];

const _venues = [
  { id: "ven-001", title: "City Lights Loft",   city: "Leeds",      capacity: 80,  priceFrom: 600 },
  { id: "ven-002", title: "Coastal View Barn",  city: "Sunderland", capacity: 120, priceFrom: 900 },
  { id: "ven-003", title: "The Grand Hall",     city: "Newcastle",  capacity: 300, priceFrom: 1500 },
];

// Expose read-only copies
export const getActs = () => _acts.slice();
export const getVenues = () => _venues.slice();

// ---------- Search ----------
export function searchAll(q) {
  const needle = (q || "").trim().toLowerCase();
  if (!needle) return { acts: getActs(), venues: getVenues() };

  const acts = getActs().filter(x =>
    `${x.title}`.toLowerCase().includes(needle)
    || (x.tags || []).some(t => `${t}`.toLowerCase().includes(needle))
  );

  const venues = getVenues().filter(x =>
    `${x.title}`.toLowerCase().includes(needle)
    || `${x.city}`.toLowerCase().includes(needle)
  );

  return { acts, venues };
}

// ---------- Shortlist (localStorage) ----------
const SH_KEY = "vh.shortlist";

function readShort() {
  try {
    if (typeof localStorage === "undefined") return [];
    const raw = localStorage.getItem(SH_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeShort(arr) {
  try {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(SH_KEY, JSON.stringify(arr));
  } catch {
    // ignore
  }
}

// export the three helpers your pages expect
export function getShortlist() {
  return readShort();
}

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
