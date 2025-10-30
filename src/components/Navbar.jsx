import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="inner">
        <Link to="/" style={{display:"inline-flex",alignItems:"center",gap:10,fontWeight:900}}>
          <img src="/logo-bookedup.svg" alt="BookedUp" height="26"/>
        </Link>
        <nav style={{marginLeft:"auto",display:"flex",gap:18}}>
          {["acts","venues","pricing","search","admin"].map(p=>(
            <NavLink key={p} to={`/${p}`} style={({isActive})=>({color:isActive?"var(--brand1)":"var(--ink-2)"})}>
              {p[0].toUpperCase()+p.slice(1)}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
