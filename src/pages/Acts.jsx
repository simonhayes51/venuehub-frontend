import Navbar from '../components/Navbar'; import Footer from '../components/Footer';
import Filters from '../components/Filters'; import ActCard from '../components/ActCard';
import { api } from '../lib/api'; import { useEffect, useState } from 'react';
export default function Acts(){
  const [rows,setRows]=useState([]), [filtered,setFiltered]=useState([]);
  useEffect(()=>{ api.get('/acts').then(r=>{setRows(r.data);setFiltered(r.data)}) },[]);
  const onChange=({q,location,type,premium})=>{
    const qx=(q||'').toLowerCase();
    setFiltered(rows.filter(a=>{
      const okQ=!qx||(a.name?.toLowerCase().includes(qx)||(a.genres||'').toLowerCase().includes(qx));
      const okL=!location||(a.location||'').toLowerCase().includes((location||'').toLowerCase());
      const okT=!type||(a.act_type||'')===type;
      const okP=!premium||!!a.premium;
      return okQ&&okL&&okT&&okP;
    }))
  };
  return(<div><Navbar/><div className='container-2xl py-8'>
    <h1 className='text-3xl mb-4'>All Acts</h1>
    <Filters onChange={onChange}/>
    <div className='grid md:grid-cols-3 gap-5 mt-5'>{filtered.map(a=><ActCard key={a.id} act={a}/>)}</div>
  </div><Footer/></div>);
}