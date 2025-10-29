import { useState } from "react";
import { FaPaperPlane, FaCalendar, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const API = import.meta.env.VITE_API_BASE || "";

export default function EnquiryForm({targetType, targetId}){
  const [form,setForm] = useState({ name:"", email:"", date:"", message:"" });
  const [status,setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  
  const change = e => {
    setForm(f=>({...f,[e.target.name]:e.target.value}));
    if (errors[e.target.name]) {
      setErrors(prev => ({...prev, [e.target.name]: null}));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function submit(e){
    e.preventDefault();
    if (!validate()) return;

    try{
      setStatus("sending");
      const res = await fetch(`{API}/enquiries`,{
        method:"POST", 
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ ...form, [targetType+"_id"]: targetId })
      });
      
      if (!res.ok) throw new Error("Failed to send");
      
      setStatus("ok");
      setForm({ name:"", email:"", date:"", message:"" });
      setTimeout(() => setStatus(null), 3000);
    }catch(err){ 
      setStatus("err");
      setTimeout(() => setStatus(null), 3000);
    }
  }

  return (
    <form onSubmit={submit} className="card p-5 space-y-3">
      <div className="font-semibold flex items-center gap-2">
        <FaPaperPlane className="text-[#00fff9]" /> Send an enquiry
      </div>
      
      <div>
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9b5cff] opacity-50" />
          <input 
            required 
            className={`w-full pl-12 bg-white/5 border border-line rounded-xl px-3 py-2 `{errors.name ? "border-[#ff2a6d]" : ""}`}
            placeholder="Your Name"  
            name="name"  
            value={form.name} 
            onChange={change}
          />
        </div>
        {errors.name && <p className="text-[#ff2a6d] text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9b5cff] opacity-50" />
          <input 
            required 
            type="email"
            className={`w-full pl-12 bg-white/5 border border-line rounded-xl px-3 py-2 `{errors.email ? "border-[#ff2a6d]" : ""}`}
            placeholder="Email"      
            name="email" 
            value={form.email} 
            onChange={change}
          />
        </div>
        {errors.email && <p className="text-[#ff2a6d] text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="relative">
        <FaCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fffc00] opacity-50" />
        <input 
          className="w-full pl-12 bg-white/5 border border-line rounded-xl px-3 py-2" 
          type="date" 
          name="date" 
          value={form.date} 
          onChange={change}
        />
      </div>

      <div className="relative">
        <FaComment className="absolute left-4 top-4 text-[#9b5cff] opacity-50" />
        <input 
          className="w-full pl-12 bg-white/5 border border-line rounded-xl px-3 py-2" 
          placeholder="Message (optional)" 
          name="message" 
          value={form.message} 
          onChange={change}
        />
      </div>

      <div className="flex items-center gap-2">
        <button className="btn" disabled={status === "sending"}>
          <FaPaperPlane />
          {status === "sending" ? "Sending..." : "Send"}
        </button>
        {status==="ok" && <div className="text-emerald-300 text-sm">Sent! We'll be in touch.</div>}
        {status==="err" && <div className="text-rose-300 text-sm">Couldn't send right now.</div>}
      </div>
    </form>
  );
}
