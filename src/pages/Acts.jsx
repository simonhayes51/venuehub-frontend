import React, { useState } from 'react';
import Card from '../components/Card';

const data = [
  { title:'Neon Nights Band', city:'Manchester', capacity:6, price:850, rating:4.9, tag:'Band' },
  { title:'DJ Vortex', city:'Newcastle', capacity:1, price:450, rating:4.6, tag:'DJ' },
  { title:'Soul Sisters', city:'Leeds', capacity:4, price:780, rating:4.8, tag:'Band' },
];

export default function Acts(){
  const [q,setQ] = useState('');
  const filtered = data.filter(x => x.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className='wrapper'>
      <h2 className='section-title'>Top Acts</h2>
      <div className='filters'>
        <input className='input' placeholder='Search by name…' value={q} onChange={e=>setQ(e.target.value)}/>
        <select className='select'><option>All Types</option><option>Band</option><option>DJ</option></select>
        <select className='select'><option>Any City</option><option>Leeds</option><option>Newcastle</option><option>Manchester</option></select>
      </div>
      <div className='grid'>
        {filtered.map((x,i)=>(
          <Card key={i} title={x.title} city={x.city} capacity={x.capacity} price={x.price} rating={x.rating} tag={x.tag}/>
        ))}
      </div>
    </div>
  );
}
