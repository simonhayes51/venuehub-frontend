let _acts = [
  { id:"a1", title:"Neon Nights Band", city:"Leeds", price:"£1,200", blurb:"High-energy party band with 90s bangers." },
  { id:"a2", title:"DJ Vortex", city:"Newcastle", price:"£600", blurb:"Club-ready sets with smooth transitions." },
  { id:"a3", title:"The Sparkle Trio", city:"York", price:"£900", blurb:"Acoustic pop with harmonies for receptions." },
];
let _venues = [
  { id:"v1", title:"City Lights Loft", city:"Manchester", capacity:200, blurb:"Skyline views and flexible staging." },
  { id:"v2", title:"Coastal View Barn", city:"Sunderland", capacity:150, blurb:"Rustic chic with great acoustics." },
  { id:"v3", title:"The Grand Hall", city:"Newcastle", capacity:400, blurb:"Iconic city centre venue." },
];

let _shortlist = [];

export const getActs = () => [..._acts];
export const getVenues = () => [..._venues];
export const addAct = (a) => { a.id = crypto.randomUUID(); _acts = [a,..._acts]; return a; }
export const addVenue = (v) => { v.id = crypto.randomUUID(); _venues = [v,..._venues]; return v; }

export const shortlist = {
  list: () => [..._shortlist],
  add: (item) => { if(!_shortlist.find(x=>x.id===item.id)) _shortlist=[item,..._shortlist]; },
  remove: (id) => { _shortlist = _shortlist.filter(x=>x.id!==id); },
  clear: ()=>{ _shortlist = [] }
};

export function searchAll(q){
  const s = (q||"").trim().toLowerCase();
  if(!s) return { acts:getActs(), venues:getVenues() };
  const acts = getActs().filter(x => (x.title+" "+(x.city||"")).toLowerCase().includes(s));
  const venues = getVenues().filter(x => (x.title+" "+(x.city||"")).toLowerCase().includes(s));
  return { acts, venues };
}
