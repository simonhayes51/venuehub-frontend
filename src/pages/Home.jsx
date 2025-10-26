import Navbar from '../components/Navbar'; import Footer from '../components/Footer';
import ActCard from '../components/ActCard'; import VenueCard from '../components/VenueCard';
import { api } from '../lib/api'; import { useEffect, useState } from 'react';
export default function Home(){
  const [acts,setActs]=useState([]), [venues,setVenues]=useState([]);
  useEffect(()=>{ api.get('/acts').then(r=>setActs(r.data)).catch(()=>{}); api.get('/venues').then(r=>setVenues(r.data)).catch(()=>{}); },[]);
  return(<div>
    <Navbar/>
    <section className='py-12 hero-grad'>
      <div className='container-2xl text-center'>
        <div className='pill inline-flex mb-3'>Book entertainers & venues</div>
        <h1 className='text-4xl md:text-6xl font-semibold tracking-tight'>Book incredible <span className='text-brand-secondary'>entertainers</span> & <span className='text-brand-secondary'>venues</span></h1>
        <p className='text-white/75 mt-3 max-w-2xl mx-auto'>A modern hub for acts and venues. Compare, shortlist, and enquire directly.</p>
        <div className='mt-6 flex justify-center gap-3'><a className='btn btn-primary' href='/acts'>Find Acts</a><a className='btn btn-ghost' href='/venues'>Explore Venues</a></div>
      </div>
    </section>
    <section className='container-2xl py-10'>
      <div className='flex items-center justify-between mb-3'><h2 className='text-2xl font-display'>Featured Acts</h2><a className='text-sm text-white/70' href='/acts'>View all →</a></div>
      <div className='grid md:grid-cols-3 gap-5'>{acts.slice(0,6).map(a=><ActCard key={a.id} act={a}/>)}</div>
    </section>
    <section className='container-2xl py-10'>
      <div className='flex items-center justify-between mb-3'><h2 className='text-2xl font-display'>Popular Venues</h2><a className='text-sm text-white/70' href='/venues'>Browse →</a></div>
      <div className='grid md:grid-cols-3 gap-5'>{venues.slice(0,6).map(v=><VenueCard key={v.id} venue={v}/>)}</div>
    </section>
    <Footer/>
  </div>);
}