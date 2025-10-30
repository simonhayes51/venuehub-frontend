import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4">
      <div className="text-3xl font-extrabold">
        <span style={{color:'#111'}}>VENUE</span>
        <span style={{color:'#00e5ff'}}>HUB</span>
      </div>
      <div>
        <Link to="/">Acts</Link>
        <Link to="/venues">Venues</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/search">Search</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
