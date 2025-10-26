<<<<<<< HEAD
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VenueCard from '../components/VenueCard'
import Filters from '../components/Filters'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_API_BASE

export default function Venues(){
  const [data,setData] = useState([])
  const [filtered,setFiltered] = useState([])

  useEffect(()=>{
    fetch(`${API}/venues`).then(r=>r.json()).then((rows)=>{ setData(rows); setFiltered(rows) }).catch(()=>{})
  },[])

  const onChange = ({q,location,type,premium}) => {
    const qx = (q||'').toLowerCase()
    setFiltered(data.filter(v=>{
      const okQ = !qx || (v.name?.toLowerCase().includes(qx) || (v.style||'').toLowerCase().includes(qx))
      const okL = !location || (v.location||'').toLowerCase().includes(location.toLowerCase())
      const okP = !premium || !!v.premium
      return okQ && okL && okP
    }))
  }

  return (
    <div>
      <Navbar/>
      <div className="container-2xl section">
        <h1 className="font-display text-3xl mb-4">All Venues</h1>
        <Filters onChange={onChange}/>
        <div className="grid md:grid-cols-3 gap-5 mt-5">
          {filtered.map(v => <VenueCard key={v.id} venue={v}/>)}
        </div>
      </div>
      <Footer/>
    </div>
  )
=======
﻿import React, { useEffect, useState } from "react";
import api from "../api";

export default function Venues() {
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    api.get("/api/venues").then((res) => setVenues(res.data));
  }, []);
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Venues</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {venues.map((v) => (
          <div key={v.id} className="card">
            <div className="text-lg font-semibold">{v.name}</div>
            <div className="text-white/70">{v.location} • {v.capacity || "?"} cap</div>
            <div className="mt-2 text-brand-secondary">
              {v.price_from ? `From £${v.price_from}` : "Price on request"}
            </div>
            {v.style && <div className="text-white/70">{v.style}</div>}
          </div>
        ))}
      </div>
    </main>
  );
>>>>>>> c62559c4a343a38bf8b0ad21830b253dc5cca718
}
