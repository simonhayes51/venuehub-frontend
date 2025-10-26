import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import Loading from "../components/Loading.jsx";
import ErrorPanel from "../components/ErrorPanel.jsx";

const API = import.meta.env.VITE_API_BASE || "";

export default function Venues(){
  const [items,setItems] = useState(null);
  const [err,setErr] = useState(null);

  useEffect(()=>{
    fetch(`${API}/venues`)
      .then(r => r.ok ? r.json() : Promise.reject(new Error(r.status+" "+r.statusText)))
      .then(setItems).catch(setErr);
  },[]);

  return (
    <main className="container-h py-10 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">Browse</p>
          <h2 className="text-2xl font-semibold">Featured Venues</h2>
        </div>
      </div>

      {!items && !err && <Loading/>}
      {err && <ErrorPanel error={err}/>}
      {Array.isArray(items) &&
        <div className="grid-cards">
          {items.map(v=>(
            <Card key={v.id}
              image={v.image_url}
              title={v.name ?? "Untitled Venue"}
              subtitle={v.location}
              meta={v.capacity ? `Capacity ${v.capacity} • from £${v.price_from ?? 0}` : (v.price_from ? `from £${v.price_from}` : null)}
            />
          ))}
        </div>
      }
    </main>
  );
}