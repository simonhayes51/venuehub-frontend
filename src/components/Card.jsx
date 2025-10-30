import React from 'react';
import RatingStars from './RatingStars';

export default function Card({title,city,price,capacity,img,rating=5,tag=''}){
  return (
    <article className='card'>
      <img src={img || 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800'} alt=''/>
      <div>
        <h3>{title}</h3>
        <div className='meta'><span className='tag'>{city}</span><span className='tag'>Cap {capacity}</span><span className='tag'>From £{price}</span>{tag && <span className='tag'>{tag}</span>}</div>
        <div style={{marginTop:6}}><RatingStars value={rating}/></div>
      </div>
    </article>
  );
}
