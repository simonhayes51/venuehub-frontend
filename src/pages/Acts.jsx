<<<<<<< HEAD
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ActCard from '../components/ActCard'
import Filters from '../components/Filters'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_API_BASE

export default function Acts(){
  const [data,setData] = useState([])
  const [filtered,setFiltered] = useState([])

  useEffect(()=>{
    fetch(`${API}/acts`).then(r=>r.json()).then((rows)=>{ setData(rows); setFiltered(rows) }).catch(()=>{})
  },[])

  const onChange = ({q,location,type,premium}) => {
    const qx = (q||'').toLowerCase()
    setFiltered(data.filter(a=>{
      const okQ = !qx || (a.name?.toLowerCase().includes(qx) || a.genres?.toLowerCase().includes(qx))
      const okL = !location || (a.location||'').toLowerCase().includes(location.toLowerCase())
      const okT = !type || (a.act_type||'')===type
      const okP = !premium || !!a.premium
      return okQ && okL && okT && okP
    }))
  }

  return (
    <div>
      <Navbar/>
      <div className="container-2xl section">
        <h1 className="font-display text-3xl mb-4">All Acts</h1>
        <Filters onChange={onChange}/>
        <div className="grid md:grid-cols-3 gap-5 mt-5">
          {filtered.map(a => <ActCard key={a.id} act={a}/>)}
        </div>
      </div>
      <Footer/>
    </div>
  )
=======
﻿import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Acts() {
  const [acts, setActs] = useState([]);
  useEffect(() => {
    api.get("/api/acts").then((res) => setActs(res.data));
  }, []);
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Acts</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {acts.map((a) => (
          <Link key={a.id} to={`/acts/${a.id}`} className="card block">
            <div className="text-lg font-semibold">{a.name}</div>
            <div className="text-white/70">{a.act_type} • {a.location}</div>
            <div className="mt-2 text-brand-primary">
              {a.price_from ? `From £${a.price_from}` : "Price on request"}
            </div>
            {a.rating && <div className="text-white/70">⭐ {a.rating}</div>}
          </Link>
        ))}
      </div>
    </main>
  );
>>>>>>> c62559c4a343a38bf8b0ad21830b253dc5cca718
}
