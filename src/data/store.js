const LS_ACTS = 'vh_acts_v1';
const LS_VENUES = 'vh_venues_v1';
const LS_SHORT = 'vh_shortlist_v1';

const seedActs = [
  { id:'a1', title:'Neon Nights Band', type:'Band', city:'Manchester', price:850, rating:4.9, capacity:6, img:'', about:'High-energy party band covering 80s–now.' },
  { id:'a2', title:'DJ Vortex',        type:'DJ',   city:'Newcastle',  price:450, rating:4.6, capacity:1, img:'', about:'Club-ready DJ with seamless mixes & MC skills.' },
  { id:'a3', title:'Soul Sisters',     type:'Band', city:'Leeds',       price:780, rating:4.8, capacity:4, img:'', about:'Soul, Motown & pop — big harmonies, big vibes.' },
];

const seedVenues = [
  { id:'v1', title:'City Lights Loft',  city:'Leeds',      capacity:80,  price:600,  rating:5,   img:'' },
  { id:'v2', title:'Coastal View Barn', city:'Sunderland', capacity:120, price:900,  rating:4.7, img:'' },
  { id:'v3', title:'The Grand Hall',    city:'Newcastle',  capacity:300, price:1500, rating:4.9, img:'' },
];

function read(key, fallback){
  try { const v = JSON.parse(localStorage.getItem(key)); return (Array.isArray(v) || typeof v === 'object') ? v : fallback; }
  catch { return fallback; }
}
function write(key, value){ localStorage.setItem(key, JSON.stringify(value)); }

export function initStore(){
  if(!localStorage.getItem(LS_ACTS))   write(LS_ACTS, seedActs);
  if(!localStorage.getItem(LS_VENUES)) write(LS_VENUES, seedVenues);
  if(!localStorage.getItem(LS_SHORT))  write(LS_SHORT, []);
}

export function getActs(){ return read(LS_ACTS, []); }
export function getAct(id){ return getActs().find(a => a.id === id); }
export function addAct(act){
  const acts = getActs();
  acts.push({ id: cryptoRandomId(), rating:5, img:'', ...act });
  write(LS_ACTS, acts);
  return acts;
}

export function getVenues(){ return read(LS_VENUES, []); }

export function shortlist(){ return read(LS_SHORT, []); }
export function addShort(item){
  const s = shortlist();
  if(!s.find(x => x.kind === item.kind && x.id === item.id)){
    s.push(item); write(LS_SHORT, s);
  }
  return s;
}
export function removeShort(kind,id){
  const s = shortlist().filter(x => !(x.kind === kind && x.id === id));
  write(LS_SHORT, s); return s;
}
export function clearShort(){ write(LS_SHORT, []); return []; }

export function searchAll(q){
  const needle = (q || '').trim().toLowerCase();
  if(!needle) return { acts: getActs(), venues: getVenues() };

  const acts = getActs().filter(x =>
    \\ \ \\.toLowerCase().includes(needle)
  );
  const venues = getVenues().filter(x =>
    \\ \\.toLowerCase().includes(needle)
  );
  return { acts, venues };
}

// tiny id
function cryptoRandomId(){
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID().slice(0,8);
  return Math.random().toString(36).slice(2,10);
}
