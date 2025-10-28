$nav = Join-Path (Get-Location) 'src\components\Navbar.jsx'
@'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const item = "px-3 py-2 rounded-lg hover:bg-white/10 transition-colors";
  const active = "bg-white/10";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🎤</span>
          <span className="font-bold tracking-wide">VenueHub</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={({isActive}) => `${item} ${isActive ? active : ""}`}>Home</NavLink>
          <NavLink to="/acts" className={({isActive}) => `${item} ${isActive ? active : ""}`}>Acts</NavLink>
          <NavLink to="/venues" className={({isActive}) => `${item} ${isActive ? active : ""}`}>Venues</NavLink>
          <NavLink to="/search" className={({isActive}) => `${item} ${isActive ? active : ""}`}>Search</NavLink>
          <NavLink to="/join" className={({isActive}) => `${item} ${isActive ? active : ""}`}>Add My Services</NavLink>
          <NavLink to="/pricing" className={({isActive}) => `${item} ${isActive ? active : ""}`}>Pricing</NavLink>
        </nav>

        {/* mobile button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            <NavLink to="/" end onClick={()=>setOpen(false)} className={({isActive}) => `${item} ${isActive ? active : ""}`}>Home</NavLink>
            <NavLink to="/acts" onClick={()=>setOpen(false)} className={({isActive}) => `${item} ${isActive ? active : ""}`}>Acts</NavLink>
            <NavLink to="/venues" onClick={()=>setOpen(false)} className={({isActive}) => `${item} ${isActive ? active : ""}`}>Venues</NavLink>
            <NavLink to="/search" onClick={()=>setOpen(false)} className={({isActive}) => `${item} ${isActive ? active : ""}`}>Search</NavLink>
            <NavLink to="/join" onClick={()=>setOpen(false)} className={({isActive}) => `${item} ${isActive ? active : ""}`}>Add My Services</NavLink>
            <NavLink to="/pricing" onClick={()=>setOpen(false)} className={({isActive}) => `${item} ${isActive ? active : ""}`}>Pricing</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
'@ | Set-Content -Encoding utf8 $nav
