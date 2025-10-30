import { useMemo, useState } from "react";
import { getVenues, toggleShort, getShortlist } from "../data/store";

export default function Venues(){
  const venues = useMemo(()=>getVenues(),[]);
  const [q,setQ] = useState("");
  const [short,setShort] = useState(getShortlist());

  const filtered = venues.filter(x =>
    `${x.title} ${x.city}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="wrapper section">
      <h2>Venues</h2>
      <div className="row"><input className="input" placeholder="Search venues…" value={q} onChange={e=>setQ(e.target.value)} /></div>
      <div className="list" style={{marginTop:12}}>
        {filtered.map(v=>(
          <div className="item" key={v.id}>
            <h4>{v.title}</h4>
            <div className="sub">{v.city} • Capacity {v.capacity} • From £{v.priceFrom}</div>
            <div className="row" style={{marginTop:8}}>
              <button className="tape-btn" onClick={()=>setShort(toggleShort(v.id))}><span className="dot" />Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
