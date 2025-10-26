import Rating from './Rating';
export default function ActCard({act}){
  return(<a href={'/acts/'+act.id} className='card overflow-hidden block'>
    <div className='relative aspect-[16/10] overflow-hidden'>
      <img src={act.image_url} alt={act.name} className='w-full h-full object-cover'/>
      {act.premium && <span className='pill absolute top-2 left-2' style={{borderColor:'#9b5cff66'}}>Premium</span>}
    </div>
    <div className='p-4'>
      <div className='flex items-center justify-between'><div className='font-medium'>{act.name}</div><span className='pill'>{act.act_type||'Act'}</span></div>
      <div className='text-white/70 text-sm mt-1'>{act.location}</div>
      <div className='mt-2 flex items-center justify-between'><Rating value={act.rating||0}/>{act.price_from && <div className='text-white/80 text-sm'>from £{Math.round(act.price_from)}</div>}</div>
    </div>
  </a>);
}