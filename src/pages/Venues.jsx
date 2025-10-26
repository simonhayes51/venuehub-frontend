import Navbar from '../components/Navbar'; import Footer from '../components/Footer';
import Filters from '../components/Filters'; import VenueCard from '../components/VenueCard';
import { api } from '../lib/api'; import { useEffect, useState } from 'react';
export default function Venues(){
  const [rows,setRows]=useState([]), [filtered,setFiltered]=useState([]);
  useEffect(()=>{ api.get('/venues').then(r=>{setRows(r.data);setFiltered(r.data)}) },[]);
  const onChange=({q,location,type,premium})=>{
    const qx=(q||'').toLowerCase();
    setFiltered(rows.filter(v=>{
      const okQ=!qx||(v.name?.toLowerCase().includes(qx)||(v.style||'').toLowerCase().includes(qx));
      const okL=!location||(v.location||'').toLowerCase().includes((location||'').toLowerCase());
      const okP=!premium||!!v.premium;
      return okQ&&okL&&okP;
    }))
  };
  return(<div><Navbar/><div className='container-2xl py-8'>
    <h1 className='text-3xl mb-4'>All Venues</h1>
    <Filters onChange={onChange}/>
    <div className='grid md:grid-cols-3 gap-5 mt-5'>{filtered.map(v=><VenueCard key={v.id} venue={v}/>)}</div>
  </div><Footer/></div>);
}