import { useEffect, useState } from "react";
import SEO from "../components/SEO.jsx";
const API = import.meta.env.VITE_API_BASE || "";
export default function Leads(){
  const [items,setItems] = useState(null), [err,setErr] = useState(null);
  useEffect(()=>{ fetch(`${API}/admin/leads`,{credentials:"include"}).then(r=>r.ok?r.json():Promise.reject()).then(setItems).catch(setErr); },[]);
  return (
    <main className="container-h py-10 space-y-6">
      <SEO title="Lead Inbox" description="Incoming enquiries." />
      <h1 className="text-3xl font-semibold">Lead Inbox</h1>
      {!items && !err && <div className="skeleton h-20" />}
      {err && <div className="text-rose-300">Could not load leads (implement /api/admin/leads).</div>}
      {Array.isArray(items) && (items.length? items.map(l=>(
        <div key={l.id} className="card p-4">
          <div className="font-medium">{l.customer_name} • {l.customer_email}</div>
          <div className="text-white/60 text-sm">{l.message || "—"}</div>
          <div className="text-white/50 text-xs mt-2">Date: {l.date || "—"} • For: {l.act_id?`Act #${l.act_id}`:l.venue_id?`Venue #${l.venue_id}`:"—"}</div>
        </div>
      )) : <div className="text-white/60">No leads yet.</div>)}
    </main>
  );
}