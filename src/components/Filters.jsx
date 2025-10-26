import { useState } from 'react';
export default function Filters({onChange, initial={}}){
  const [q,setQ]=useState(initial.q||''); const [loc,setLoc]=useState(initial.location||''); const [type,setType]=useState(initial.type||''); const [premium,setPremium]=useState(!!initial.premium);
  const submit=e=>{e?.preventDefault(); onChange?.({q,location:loc,type,premium});};
  return(<form onSubmit={submit} className='card p-4 grid md:grid-cols-5 gap-3'>
    <input className='btn-ghost' placeholder='Search by name/genre…' value={q} onChange={e=>setQ(e.target.value)}/>
    <input className='btn-ghost' placeholder='Location' value={loc} onChange={e=>setLoc(e.target.value)}/>
    <select className='btn-ghost' value={type} onChange={e=>setType(e.target.value)}><option value=''>Any type</option><option>Band</option><option>DJ</option><option>Magician</option><option>Singer</option></select>
    <label className='text-sm flex items-center gap-2'><input type='checkbox' checked={premium} onChange={e=>setPremium(e.target.checked)}/>Premium only</label>
    <div className='md:col-span-5 flex justify-end'><button className='btn btn-primary'>Apply Filters</button></div>
  </form>);
}