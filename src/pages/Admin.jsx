import { useState } from "react";
import { addAct, addVenue } from "../data/store";

export default function Admin(){
  const [act, setAct] = useState({title:"", city:"", priceFrom:"", rating:""});
  const [venue, setVenue] = useState({title:"", city:"", capacity:"", priceFrom:""});
  const [saved, setSaved] = useState("");

  return (
    <div className="wrapper section">
      <h2>Admin</h2>
      <div className="row">
        <div className="admin-card" style={{flex:"1 1 340px"}}>
          <h3>Add Act</h3>
          <div className="row">
            <input className="input" placeholder="Title" value={act.title} onChange={e=>setAct({...act,title:e.target.value})}/>
            <input className="input" placeholder="City" value={act.city} onChange={e=>setAct({...act,city:e.target.value})}/>
          </div>
          <div className="row">
            <input className="input" placeholder="Price From" value={act.priceFrom} onChange={e=>setAct({...act,priceFrom:e.target.value})}/>
            <input className="input" placeholder="Rating" value={act.rating} onChange={e=>setAct({...act,rating:e.target.value})}/>
          </div>
          <button className="tape-btn primary" onClick={()=>{ addAct(act); setSaved("Act saved!");}}><span className="dot" />Save Act</button>
        </div>

        <div className="admin-card" style={{flex:"1 1 340px"}}>
          <h3>Add Venue</h3>
          <div className="row">
            <input className="input" placeholder="Title" value={venue.title} onChange={e=>setVenue({...venue,title:e.target.value})}/>
            <input className="input" placeholder="City" value={venue.city} onChange={e=>setVenue({...venue,city:e.target.value})}/>
          </div>
          <div className="row">
            <input className="input" placeholder="Capacity" value={venue.capacity} onChange={e=>setVenue({...venue,capacity:e.target.value})}/>
            <input className="input" placeholder="Price From" value={venue.priceFrom} onChange={e=>setVenue({...venue,priceFrom:e.target.value})}/>
          </div>
          <button className="tape-btn" onClick={()=>{ addVenue(venue); setSaved("Venue saved!");}}><span className="dot" />Save Venue</button>
        </div>
      </div>
      {saved && <p style={{marginTop:12, color:"#2a9d8f", fontWeight:700}}>{saved}</p>}
    </div>
  )
}
