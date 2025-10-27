import { useState } from "react";
import SEO from "../components/SEO.jsx";
import AvailabilityCalendar from "../components/AvailabilityCalendar.jsx";

export default function Onboard(){
  const [step,setStep] = useState(1);
  const [data,setData] = useState({type:"act", name:"", location:"", email:"", price_from:"", services:"", description:""});
  const [date,setDate] = useState("");
  const set = k => e => setData(d=>({...d,[k]:e.target.value}));
  function submit(e){ e.preventDefault(); console.log("Onboard submit",{...data, preferred_date: date}); alert("Thanks! Submitted for review."); }

  return (
    <main className="container-h py-10 space-y-6">
      <SEO title="Become a Provider" description="Join VenueHub and get discovered." />
      <h1 className="text-3xl font-semibold">Become a Provider</h1>
      <form onSubmit={submit} className="card p-4 space-y-6">
        <div className="text-sm text-white/60">Step {step} of 4</div>
        {step===1 && (
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="space-y-1">
              <span className="text-sm text-white/70">I am a</span>
              <select className="input" value={data.type} onChange={set("type")}>
                <option value="act">Act</option>
                <option value="venue">Venue</option>
              </select>
            </label>
            <label className="space-y-1">
              <span className="text-sm text-white/70">Name</span>
              <input className="input" value={data.name} onChange={set("name")} placeholder="Band or Venue name"/>
            </label>
            <label className="space-y-1">
              <span className="text-sm text-white/70">Location</span>
              <input className="input" value={data.location} onChange={set("location")} placeholder="City / Region"/>
            </label>
            <label className="space-y-1">
              <span className="text-sm text-white/70">Email</span>
              <input className="input" value={data.email} onChange={set("email")} placeholder="me@example.com"/>
            </label>
          </div>
        )}
        {step===2 && (
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="space-y-1 sm:col-span-2">
              <span className="text-sm text-white/70">About</span>
              <textarea className="input min-h-[120px]" value={data.description} onChange={set("description")} placeholder="Describe your act or venue…"/>
            </label>
            <label className="space-y-1">
              <span className="text-sm text-white/70">Starting Price (£)</span>
              <input className="input" value={data.price_from} onChange={set("price_from")} placeholder="e.g. 500"/>
            </label>
            <label className="space-y-1 sm:col-span-2">
              <span className="text-sm text-white/70">Services / Packages</span>
              <textarea className="input min-h-[100px]" value={data.services} onChange={set("services")} placeholder="List what you offer…"/>
            </label>
          </div>
        )}
        {step===3 && (<AvailabilityCalendar value={date} onChange={setDate}/>)}
        {step===4 && (<pre className="bg-white/5 p-3 rounded-xl text-xs overflow-auto">{JSON.stringify({...data, preferred_date: date},null,2)}</pre>)}
        <div className="flex items-center justify-between">
          <button type="button" className="btn-outline" disabled={step===1} onClick={()=>setStep(s=>s-1)}>Back</button>
          {step<4 ? <button type="button" className="btn" onClick={()=>setStep(s=>s+1)}>Next</button> : <button className="btn">Submit</button>}
        </div>
      </form>
    </main>
  );
}