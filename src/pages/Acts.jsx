import { useMemo, useState } from "react";
import { getActs, toggleShort, getShortlist } from "../data/store";

export default function Acts(){
  const acts = useMemo(()=>getActs(),[]);
  const [q,setQ] = useState("");
  const [short,setShort] = useState(getShortlist());

  const filtered = acts.filter(x =>
    `${x.title} ${x.city} ${(x.tags||[]).join(" ")}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="wrapper section">
      <h2>Acts</h2>
      <div className="row"><input className="input" placeholder="Search acts…" value={q} onChange={e=>setQ(e.target.value)} /></div>
      <div className="list" style={{marginTop:12}}>
        {filtered.map(a=>(
          <div className="item" key={a.id}>
            <h4>{a.title}</h4>
            <div className="sub">{a.city} • ⭐ {a.rating} • From £{a.priceFrom}</div>
            <div className="row" style={{marginTop:8}}>
              <button className="tape-btn" onClick={()=>setShort(toggleShort(a.id))}><span className="dot" />Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
