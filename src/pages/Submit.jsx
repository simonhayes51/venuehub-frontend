import React from "react";
const API = import.meta.env.VITE_API_URL;

export default function SubmitPage(){
  const [type,setType] = React.useState("act");
  const [name,setName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [phone,setPhone] = React.useState("");
  const [location,setLocation] = React.useState("");
  const [genres,setGenres] = React.useState("");
  const [price,setPrice] = React.useState("");
  const [website,setWebsite] = React.useState("");
  const [desc,setDesc] = React.useState("");
  const [actType,setActType] = React.useState("");
  const [style,setStyle] = React.useState("");
  const [amenities,setAmenities] = React.useState("");
  const [image,setImage] = React.useState(null);
  const [preview,setPreview] = React.useState("");
  const [busy,setBusy] = React.useState(false);
  const [done,setDone] = React.useState(null);
  const [err,setErr] = React.useState("");

  function onPick(e){
    const f = e.target.files?.[0];
    setImage(f||null);
    setPreview(f ? URL.createObjectURL(f) : "");
  }

  async function submit(e){
    e.preventDefault();
    setBusy(true); setErr(""); setDone(null);
    try{
      const fd = new FormData();
      fd.append("type", type);
      fd.append("name", name);
      fd.append("email", email);
      if (phone)     fd.append("phone", phone);
      if (location)  fd.append("location", location);
      if (genres)    fd.append("genres", genres);
      if (price)     fd.append("price_from", price);
      if (website)   fd.append("website", website);
      if (desc)      fd.append("description", desc);
      if (actType)   fd.append("act_type", actType);
      if (style)     fd.append("style", style);
      if (amenities) fd.append("amenities", amenities);
      if (image)     fd.append("image", image);

      const r = await fetch(`${API}/api/providers/submit`, { method:"POST", body: fd });
      if(!r.ok) throw new Error(`Submit failed ${r.status}`);
      const data = await r.json();
      setDone(data);
      setName(""); setEmail(""); setPhone(""); setLocation(""); setGenres("");
      setPrice(""); setWebsite(""); setDesc(""); setActType(""); setStyle(""); setAmenities("");
      setImage(null); setPreview("");
    }catch(ex){ console.error(ex); setErr("Could not send your details. Please try again."); }
    finally{ setBusy(false); }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Add My Services</h1>
      <p className="opacity-80 mb-6">List your act or venue. We review every submission before it goes live.</p>

      {done && (
        <div className="rounded-2xl p-5 border border-white/10 bg-[#0f1430] mb-6">
          <div className="font-semibold mb-1">Thanks! We received your submission.</div>
          <div className="opacity-75 text-sm">Reference ID: {done.id}</div>
        </div>
      )}
      {err && <div className="mb-4 text-[#ff8a8a]">{err}</div>}

      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Type</span>
            <select value={type} onChange={e=>setType(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2">
              <option value="act">Act</option>
              <option value="venue">Venue</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Name</span>
            <input required value={name} onChange={e=>setName(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Email</span>
            <input required type="email" value={email} onChange={e=>setEmail(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Phone</span>
            <input value={phone} onChange={e=>setPhone(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Location</span>
            <input value={location} onChange={e=>setLocation(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Genres (comma-separated)</span>
            <input value={genres} onChange={e=>setGenres(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Price From (£)</span>
            <input value={price} onChange={e=>setPrice(e.target.value)} inputMode="numeric"
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Website</span>
            <input value={website} onChange={e=>setWebsite(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
        </div>

        <label className="flex flex-col gap-1">
          <span className="opacity-80 text-sm">Description</span>
          <textarea rows={5} value={desc} onChange={e=>setDesc(e.target.value)}
            className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
        </label>

        <div className="grid grid-cols-3 gap-3">
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Act Type</span>
            <input value={actType} onChange={e=>setActType(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Style (Venue)</span>
            <input value={style} onChange={e=>setStyle(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Amenities (Venue)</span>
            <input value={amenities} onChange={e=>setAmenities(e.target.value)}
              className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2" />
          </label>
        </div>

        <div className="flex items-center gap-4">
          <label className="flex flex-col gap-1">
            <span className="opacity-80 text-sm">Image</span>
            <input type="file" accept="image/*" onChange={onPick} />
          </label>
          {preview && <img src={preview} alt="Preview" className="h-20 rounded-xl border border-white/10" />}
        </div>

        <button disabled={busy}
          className="mt-2 px-5 py-3 rounded-2xl font-bold text-[#0b0f1e] bg-[linear-gradient(90deg,#ff2fd6,#00ffe1)] disabled:opacity-40">
          {busy ? "Submitting…" : "Submit for review"}
        </button>
      </form>
    </div>
  );
}
