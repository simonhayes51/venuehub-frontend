import Navbar from '../components/Navbar'; import Footer from '../components/Footer';
import { useState } from 'react'; import { api } from '../lib/api';
export default function Join(){
  const [step,setStep]=useState(1);
  const [form,setForm]=useState({ role:'act', name:'', location:'', price_from:'', genres:'', capacity:'', style:'', description:'' });
  const submit=async()=>{ const url=form.role==='act'?'/providers/acts':'/providers/venues'; await api.post(url,form); alert('Submitted! We will review and publish shortly.'); };
  return(<div><Navbar/><div className='container-2xl py-8 grid md:grid-cols-12 gap-6'>
    <div className='md:col-span-8 space-y-4'>
      <div className='flex gap-2 text-sm'><span className={'pill '+(step===1?'bg-white/20':'')}>1. Basics</span><span className={'pill '+(step===2?'bg-white/20':'')}>2. Details</span><span className={'pill '+(step===3?'bg-white/20':'')}>3. Media</span><span className={'pill '+(step===4?'bg-white/20':'')}>4. Review & Submit</span></div>
      {step===1&&(<div className='card p-5'><h2 className='text-xl mb-3'>What are you adding?</h2>
        <div className='grid md:grid-cols-2 gap-3'>
          <label className='pill'><input type='radio' name='role' checked={form.role==='act'} onChange={()=>setForm({...form,role:'act'})}/> Act / Entertainer</label>
          <label className='pill'><input type='radio' name='role' checked={form.role==='venue'} onChange={()=>setForm({...form,role:'venue'})}/> Venue</label>
        </div>
        <div className='grid md:grid-cols-2 gap-3 mt-3'>
          <input className='btn-ghost' placeholder='Name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
          <input className='btn-ghost' placeholder='Location' value={form.location} onChange={e=>setForm({...form,location:e.target.value})}/>
        </div>
        <div className='grid md:grid-cols-2 gap-3 mt-3'>
          {form.role==='act'
            ? <input className='btn-ghost' placeholder='Genres (comma separated)' value={form.genres} onChange={e=>setForm({...form,genres:e.target.value})}/>
            : <><input className='btn-ghost' placeholder='Capacity' value={form.capacity} onChange={e=>setForm({...form,capacity:e.target.value})}/>
               <input className='btn-ghost' placeholder='Style (e.g. Rustic, Modern)' value={form.style} onChange={e=>setForm({...form,style:e.target.value})}/></>}
          <input className='btn-ghost' placeholder='Price from' value={form.price_from} onChange={e=>setForm({...form,price_from:e.target.value})}/>
        </div>
        <div className='mt-3'><textarea className='btn-ghost w-full min-h-[120px]' placeholder='Description' value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/></div>
      </div>)}
      {step===2&&(<div className='card p-5'><h2 className='text-xl mb-3'>Details & Options</h2><div className='text-white/70'>Add availability later in your dashboard. You can also upload media in the next step.</div></div>)}
      {step===3&&(<div className='card p-5'><h2 className='text-xl mb-3'>Media</h2><div className='text-white/70'>Upload images/videos (placeholder). In production, use a signed upload.</div><div className='grid grid-cols-3 gap-3 mt-3'><div className='aspect-video bg-white/5 rounded'></div><div className='aspect-video bg-white/5 rounded'></div><div className='aspect-video bg-white/5 rounded'></div></div></div>)}
      {step===4&&(<div className='card p-5'><h2 className='text-xl mb-3'>Review & Submit</h2><pre className='text-xs bg-black/40 p-3 rounded'>{JSON.stringify(form,null,2)}</pre></div>)}
      <div className='flex justify-between'><button className='btn btn-ghost' disabled={step===1} onClick={()=>setStep(s=>s-1)}>Back</button>{step<4?<button className='btn btn-primary' onClick={()=>setStep(s=>s+1)}>Next</button>:<button className='btn btn-primary' onClick={submit}>Submit</button>}</div>
    </div>
    <div className='md:col-span-4'><div className='card p-4'><h3 className='text-lg'>Why join VenueHub?</h3><ul className='list-disc ml-5 mt-2 text-white/80 text-sm space-y-1'><li>No platform fees — connect directly</li><li>Premium placement for subscribers</li><li>Leads dashboard & messaging</li><li>Grow your reputation with reviews</li></ul></div></div>
  </div><Footer/></div>);
}