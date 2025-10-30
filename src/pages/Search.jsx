import { useState } from "react";
import { searchAll, toggleShort, getShortlist } from "../data/store";

export default function Search(){
  const [q,setQ] = useState("");
  const [short,setShort] = useState(getShortlist());
  const { acts, venues } = searchAll(q);

  return (
    <div className="wrapper section">
      <h2>Search</h2>
      <input className="input" placeholder="Search acts & venues…" value={q} onChange={e=>setQ(e.target.value)} />
      <h3 className="section-title" style={{marginTop:18}}>ACTS</h3>
      <div className="list">
        {acts.map(a=>(
          <div className="item" key={a.id}>
            <h4>{a.title}</h4>
            <div className="sub">{a.city} • ⭐ {a.rating} • From £{a.priceFrom}</div>
            <button className="tape-btn" onClick={()=>setShort(toggleShort(a.id))}><span className="dot" />Save</button>
          </div>
        ))}
      </div>

      <h3 className="section-title" style={{marginTop:22}}>VENUES</h3>
      <div className="list">
        {venues.map(v=>(
          <div className="item" key={v.id}>
            <h4>{v.title}</h4>
            <div className="sub">{v.city} • Capacity {v.capacity} • From £{v.priceFrom}</div>
            <button className="tape-btn" onClick={()=>setShort(toggleShort(v.id))}><span className="dot" />Save</button>
          </div>
        ))}
      </div>
    </div>
  )
}
