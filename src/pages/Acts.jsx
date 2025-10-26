import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import Loading from "../components/Loading.jsx";
import ErrorPanel from "../components/ErrorPanel.jsx";

const API = import.meta.env.VITE_API_BASE || "";

export default function Acts(){
  const [items,setItems] = useState(null);
  const [err,setErr] = useState(null);

  useEffect(()=>{
    fetch(`${API}/acts`)
      .then(r => r.ok ? r.json() : Promise.reject(new Error(r.status+" "+r.statusText)))
      .then(setItems).catch(setErr);
  },[]);

  return (
    <main className="container-h py-10 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">Discover</p>
          <h2 className="text-2xl font-semibold">Top Acts</h2>
        </div>
      </div>

      {!items && !err && <Loading/>}
      {err && <ErrorPanel error={err}/>}
      {Array.isArray(items) &&
        <div className="grid-cards">
          {items.map(a=>(
            <Card key={a.id}
              image={a.image_url}
              title={a.name ?? "Untitled Act"}
              subtitle={a.genre || a.location}
              meta={a.rating ? `★ ${a.rating} • from £${a.price_from ?? 0}` : (a.price_from ? `from £${a.price_from}` : null)}
            />
          ))}
        </div>
      }
    </main>
  );
}