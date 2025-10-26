import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  const link = "px-3 py-2 rounded-lg hover:bg-white/5 transition";
  const active = "bg-white/10";
  return (
    <header className="border-b border-white/10 sticky top-0 z-40 backdrop-blur bg-bg/80">
      <div className="container-h flex items-center justify-between h-14">
        <Link to="/" className="font-semibold tracking-wide">🎭 VenueHub</Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/acts" className={({isActive})=>`${link} ${isActive?active:""}`}>Acts</NavLink>
          <NavLink to="/venues" className={({isActive})=>`${link} ${isActive?active:""}`}>Venues</NavLink>
        </nav>
      </div>
    </header>
  );
}