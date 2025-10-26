export default function VenueCard({venue}){
  return(<a href={'/venues/'+venue.id} className='card overflow-hidden block'>
    <div className='relative aspect-[16/10] overflow-hidden'>
      <img src={venue.image_url} alt={venue.name} className='w-full h-full object-cover'/>
      {venue.premium && <span className='pill absolute top-2 left-2' style={{borderColor:'#9b5cff66'}}>Premium</span>}
    </div>
    <div className='p-4'>
      <div className='flex items-center justify-between'><div className='font-medium'>{venue.name}</div><span className='pill'>{venue.style||'Venue'}</span></div>
      <div className='text-white/70 text-sm mt-1'>{venue.location} • cap {venue.capacity||'-'}</div>
      <div className='mt-2 text-white/80 text-sm'>{venue.price_from?rom £:''}</div>
    </div>
  </a>);
}