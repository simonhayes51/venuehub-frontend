import Navbar from '../components/Navbar'; import Footer from '../components/Footer'; import Rating from '../components/Rating';
import { api } from '../lib/api'; import { useEffect, useState } from 'react'; import { useParams } from 'react-router-dom';
export default function ActDetail(){
  const { id }=useParams(); const [act,setAct]=useState(null); const [reviews,setReviews]=useState([]);
  useEffect(()=>{ api.get('/acts/'+id).then(r=>setAct(r.data)); api.get('/reviews?act_id='+id).then(r=>setReviews(r.data)).catch(()=>{}) },[id]);
  if(!act) return <div><Navbar/><div className='container-2xl py-10'>Loading…</div></div>;
  return(<div><Navbar/><div className='container-2xl py-8 grid md:grid-cols-12 gap-6'>
    <div className='md:col-span-7 card overflow-hidden'><img src={act.image_url} alt={act.name}/></div>
    <div className='md:col-span-5'>
      <h1 className='text-3xl font-display'>{act.name}</h1>
      <div className='mt-2 flex items-center gap-3'><span className='pill'>{act.act_type}</span><span className='text-white/70 text-sm'>{act.location}</span><Rating value={act.rating||0}/></div>
      {act.price_from && <div className='mt-3 text-white/80'>from £{Math.round(act.price_from)}</div>}
      <p className='mt-4 text-white/80'>{act.description}</p>
      <div className='mt-5 flex items-center gap-3'><a className='btn btn-primary' href={'/enquire/act/'+act.id}>Enquire</a><a className='btn btn-ghost' href='/shortlist'>Save</a></div>
      <div className='mt-8'><h2 className='text-xl mb-2'>Reviews</h2>
        {reviews.length? <div className='space-y-3'>{reviews.map((r,i)=><div key={i} className='card p-3'><div className='text-amber-300'>{'★'.repeat(r.rating||0)}</div><div className='text-white/80 mt-1'>{r.comment}</div></div>)}</div> : <div className='text-white/70'>No reviews yet.</div>}
      </div>
    </div>
  </div><Footer/></div>);
}