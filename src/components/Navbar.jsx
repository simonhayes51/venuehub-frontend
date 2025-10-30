import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className='nav'>
      <div className='brand'>
        <Link to='/' style={{textDecoration:'none', color:'inherit', display:'flex', alignItems:'center', gap:8}}>
          <span style={{fontWeight:900}}>VENUE</span><b>HUB</b>
        </Link>
      </div>
      <ul>
        <li><Link to='/acts'>Acts</Link></li>
        <li><Link to='/venues'>Venues</Link></li>
        <li><Link to='/pricing'>Pricing</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/admin'>Admin</Link></li>
      </ul>
    </nav>
  );
}
