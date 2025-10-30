import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="wrapper navbar-inner">
        <Link className="brand" to="/">
          <img src="/logo-bookedup.svg" alt="BookedUp" />
          <span>BOOKED<b>UP</b></span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/acts">Acts</NavLink>
          <NavLink to="/venues">Venues</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink className="nav-cta" to="/admin">+ Add Services</NavLink>
        </nav>
      </div>
    </header>
  );
}
