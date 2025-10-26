<<<<<<< HEAD
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ActCard from '../components/ActCard'
import VenueCard from '../components/VenueCard'
import { useEffect, useState } from 'react'
=======
﻿import React from "react";
import { Link } from "react-router-dom";
>>>>>>> c62559c4a343a38bf8b0ad21830b253dc5cca718

const API = import.meta.env.VITE_API_BASE

export default function Home(){
  const [acts,setActs] = useState([])
  const [venues,setVenues] = useState([])
  useEffect(()=>{
    fetch(`${API}/acts`).then(r=>r.json()).then(setActs).catch(()=>{})
    fetch(`${API}/venues`).then(r=>r.json()).then(setVenues).catch(()=>{})
  },[])
  return (
<<<<<<< HEAD
    <div>
      <Navbar/>
      <section className="section">
        <div className="container-2xl text-center">
          <div className="inline-flex items-center gap-2 pill mb-4 animate-pulse-slow">
            <span className="w-2 h-2 rounded-full bg-brand.secondary"></span>
            <span>Book talent • Find venues • No platform fees</span>
          </div>
          <h1 className="font-display text-5xl font-semibold">Your <span className="text-brand.primary">show</span> starts here</h1>
          <p className="mt-3 text-white/75 max-w-2xl mx-auto">Discover premium entertainers and venues with a vibe. Compare, shortlist and enquire directly.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a className="btn-primary" href="/acts">Find Acts</a>
            <a className="btn-ghost" href="/venues">Explore Venues</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-2xl">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-2xl">Featured Acts</h2>
            <a href="/acts" className="text-sm text-white/70 hover:text-white">View all →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {acts.slice(0,6).map(a => <ActCard key={a.id} act={a}/>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-2xl">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-2xl">Popular Venues</h2>
            <a href="/venues" className="text-sm text-white/70 hover:text-white">Browse →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {venues.slice(0,6).map(v => <VenueCard key={v.id} venue={v}/>)}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
=======
    <main className="max-w-6xl mx-auto px-4">
      <section className="py-14 text-center">
        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          Book incredible <span className="text-brand-primary">entertainers</span> &{" "}
          <span className="text-brand-secondary">venues</span>
        </h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto">
          A modern, fast, entertainment-first hub. Find bands, DJs, magicians, and stunning venues — all in one place.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/acts" className="btn">Find Acts</Link>
          <Link to="/venues" className="btn">Explore Venues</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold text-xl mb-2">🔥 Trending Acts</h3>
          <ul className="space-y-2 text-white/80">
            <li>Neon Nights Band — 4.8★ — From £800</li>
            <li>DJ Vortex — 4.6★ — From £500</li>
            <li>The Close-Up Magician — 4.9★ — From £350</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-bold text-xl mb-2">🏛️ Featured Venues</h3>
          <ul className="space-y-2 text-white/80">
            <li>The Grand Hall — Newcastle — From £1500</li>
            <li>Coastal View Barn — Sunderland — From £900</li>
            <li>City Lights Loft — Leeds — From £600</li>
          </ul>
        </div>
      </section>
    </main>
  );
>>>>>>> c62559c4a343a38bf8b0ad21830b253dc5cca718
}
