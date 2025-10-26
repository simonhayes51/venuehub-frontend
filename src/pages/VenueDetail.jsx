import Navbar from '../components/Navbar'; import Footer from '../components/Footer';
import { api } from '../lib/api'; import { useEffect, useState } from 'react'; import { useParams } from 'react-router-dom';
export default function VenueDetail(){
  const { id }=useParams(); const [v,setV]=useState(null); const [reviews,setReviews]=useState([]);
  useEffect(()=>{ api.get('/venues/'+id).then(r=>setV(r.data)); api.get('/reviews?venue_id='+id).then(r=>setReviews(r.data)).catch(()=>{}) },[id]);
  if(!v) return <div><Navbar/><div className='container-2xl py-10'>Loading…</div></div>;
  return(<div><Navbar/><div className='container-2xl py-8 grid md:grid-cols-12 gap-6'>
    <div className='md:col-span-7 card overflow-hidden'><img src={v.image_url} alt={v.name}/></div>
    <div className='md:col-span-5'>
      <h1 className='text-3xl font-display'>{v.name}</h1>
      <div className='mt-2 flex items-center gap-3'><span className='pill'>{v.style||'Venue'}</span><span className='text-white/70 text-sm'>{v.location}</span></div>
      <div className='mt-3 text-white/80'>{v.price_from?rom £:''}</div>
      <p className='mt-4 text-white/80'>{v.amenities}</p>
      <div className='mt-5 flex items-center gap-3'><a className='btn btn-primary' href={'/enquire/venue/'+v.id}>Enquire</a><a className='btn btn-ghost' href='/shortlist'>Save</a></div>
      <div className='mt-8'><h2 className='text-xl mb-2'>Reviews</h2>
        {reviews.length? <div className='space-y-3'>{reviews.map((r,i)=><div key={i} className='card p-3'><div className='text-amber-300'>{'★'.repeat(r.rating||0)}</div><div className='text-white/80 mt-1'>{r.comment}</div></div>)}</div> : <div className='text-white/70'>No reviews yet.</div>}
      </div>
    </div>
  </div><Footer/></div>);
}