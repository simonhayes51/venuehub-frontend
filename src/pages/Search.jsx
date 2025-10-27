import { useEffect, useState } from "react";
import { getJSON } from "../lib/api";

export default function Search(){
  const [tab, setTab] = useState("acts");
  const [acts, setActs] = useState([]);
  const [venues, setVenues] = useState([]);
  const [q, setQ] = useState("");

  useEffect(()=>{
    getJSON("/acts").then(setActs).catch(()=>setActs([]));
    getJSON("/venues").then(setVenues).catch(()=>setVenues([]));
  },[]);

  const filteredActs = acts.filter(a => (a.name||"").toLowerCase().includes(q.toLowerCase()));
  const filteredVenues = venues.filter(v => (v.name||"").toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-6">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search acts & venues"
               className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full outline-none"/>
        <div className="flex gap-2">
          <button onClick={()=>setTab("acts")} className={`px-4 py-2 rounded-xl ${tab==="acts"?"bg-emerald-500 text-black":"bg-white/5"}`}>Acts</button>
          <button onClick={()=>setTab("venues")} className={`px-4 py-2 rounded-xl ${tab==="venues"?"bg-emerald-500 text-black":"bg-white/5"}`}>Venues</button>
        </div>
      </div>

      {tab==="acts" ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredActs.map(a=>(
            <div key={a.id} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-lg font-semibold">{a.name}</div>
              <div className="text-sm opacity-70">{a.location || "—"}</div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm opacity-70">From £{a.price_from ?? "—"}</span>
                <a href={`/acts/${a.id}`} className="text-emerald-400">View</a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredVenues.map(v=>(
            <div key={v.id} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-lg font-semibold">{v.name}</div>
              <div className="text-sm opacity-70">{v.location || "—"}</div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm opacity-70">From £{v.price_from ?? "—"}</span>
                <a href={`/venues/${v.id}`} className="text-emerald-400">View</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
