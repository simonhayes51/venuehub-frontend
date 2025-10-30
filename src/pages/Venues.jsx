import React, { useState } from 'react';
import Card from '../components/Card';

const data = [
  { title:'City Lights Loft', city:'Leeds', capacity:80, price:600, rating:5,  tag:'Loft' },
  { title:'Coastal View Barn', city:'Sunderland', capacity:120, price:900, rating:4.7, tag:'Barn' },
  { title:'The Grand Hall', city:'Newcastle', capacity:300, price:1500, rating:4.9, tag:'Hall' },
];

export default function Venues(){
  const [q,setQ] = useState('');
  const filtered = data.filter(x => x.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className='wrapper'>
      <h2 className='section-title'>Featured Venues</h2>
      <div className='filters'>
        <input className='input' placeholder='Search by name or city…' value={q} onChange={e=>setQ(e.target.value)}/>
        <select className='select'><option>Any Capacity</option><option>≤100</option><option>100–200</option><option>200+</option></select>
      </div>
      <div className='grid'>
        {filtered.map((x,i)=>(
          <Card key={i} title={x.title} city={x.city} capacity={x.capacity} price={x.price} rating={x.rating} tag={x.tag}/>
        ))}
      </div>
    </div>
  );
}
