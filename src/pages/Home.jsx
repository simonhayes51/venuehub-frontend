import { useEffect, useRef, useState } from "react";
import { FaBolt, FaMusic, FaMask, FaGlassCheers, FaMapMarkerAlt, FaTheaterMasks, FaStar } from "react-icons/fa";
import SEO from "../components/SEO";

function useCounter(target=0, duration=1200){
  const [val, setVal] = useState(0);
  const start = useRef(null);
  useEffect(()=>{
    let raf;
    const tick = (ts)=>{
      if (!start.current) start.current = ts;
      const p = Math.min(1, (ts - start.current)/duration);
      setVal(Math.floor(target * (0.2 + 0.8 * (1 - Math.pow(1 - p, 3)))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return ()=> cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

export default function Home(){
  const events = useCounter(10000, 1400);
  const pros = useCounter(2500, 1300);
  const cities = useCounter(180, 1200);

  const testimonials = [
    { name:"Lauren M.", role:"Events Manager", text:"Booked a band and a magician in minutes. The neon UI is mint." },
    { name:"Craig D.", role:"Venue Owner", text:"Leads went up 3x after going PRO. Worth every quid." },
    { name:"Amelia R.", role:"Bride-to-be", text:"Searching acts by style + location was stupidly easy." },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setIdx(i => (i+1)%testimonials.length), 4000);
    return ()=> clearInterval(t);
  }, []);

  return (
    <main>
      <SEO title="VenueHub — Book the Future of Entertainment" description="Find and book the best acts and venues with neon-fast search and jaw-dropping profiles." />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-h py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="retro-badge mb-6 flex items-center gap-2">
              <FaBolt className="text-[#fffc00]" /> 10,000+ Events Booked
            </p>
            <h1 className="font-display neon-text text-[clamp(2.2rem,8vw,4.8rem)] font-black leading-[0.95] mb-6">
              BOOK THE<br/> FUTURE NOW
            </h1>
            <p className="text-xl opacity-80 max-w-xl mb-8">
              Neon-fast search • Glowing profiles • Real reviews. Find the perfect act or venue in seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/search" className="btn text-base px-7 py-3"><FaBolt/> Find Entertainment</a>
              <a href="/join" className="pill">Become a Provider</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-h pb-10">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="card p-6 spotlight text-center">
            <div className="text-4xl font-black neon-text">{events.toLocaleString()}+</div>
            <div className="opacity-70 font-bold">Events</div>
          </div>
          <div className="card p-6 spotlight text-center">
            <div className="text-4xl font-black" style={{textShadow:'0 0 .6rem #ff2a6d'}}>{pros.toLocaleString()}+</div>
            <div className="opacity-70 font-bold">Professionals</div>
          </div>
          <div className="card p-6 spotlight text-center">
            <div className="text-4xl font-black" style={{textShadow:'0 0 .6rem #9b5cff'}}>{cities}</div>
            <div className="opacity-70 font-bold">Cities</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-h py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon:<FaMusic/>, title:"Bands & DJs", text:"From indie to Ibiza — plug into any vibe."},
            {icon:<FaMask/>, title:"Magicians & Hosts", text:"Keep crowds buzzing with pro showrunners."},
            {icon:<FaGlassCheers/>, title:"Weddings & Parties", text:"Make it unreal — stress-free bookings."},
            {icon:<FaMapMarkerAlt/>, title:"Venue Finder", text:"Filter by location, capacity and style."},
            {icon:<FaTheaterMasks/>, title:"Stage & Sound", text:"AV, lighting, production — all in one place."},
            {icon:<FaStar/>, title:"Verified Reviews", text:"Real ratings from real events."},
          ].map((f,i)=>(
            <div key={i} className="card p-6 spotlight">
              <div className="w-14 h-14 rounded-xl mx-0 mb-4 flex items-center justify-center text-2xl"
                   style={{background:"linear-gradient(135deg, #00fff9 0%, #9b5cff 100%)"}}>
                {f.icon}
              </div>
              <div className="font-display text-xl font-bold mb-2">{f.title}</div>
              <p className="opacity-80">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-h py-10">
        <div className="card p-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <h2 className="font-display text-3xl font-black mb-2 neon-text">Loved by Planners</h2>
              <p className="opacity-80">5-star experiences from people who actually booked.</p>
            </div>
            <div className="md:col-span-2">
              <div className="relative overflow-hidden">
                <div className="animate-fade-in">
                  <div className="card p-6 bg-black/40">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold">{testimonials[idx].name}</div>
                      <div className="text-[#fffc00] flex gap-1"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                    </div>
                    <div className="text-sm opacity-70 mb-3">{testimonials[idx].role}</div>
                    <p className="text-lg">{testimonials[idx].text}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                {testimonials.map((_,i)=>(
                  <button key={i}
                          onClick={()=>setIdx(i)}
                          className={"pill " + (i===idx ? "bg-[#9b5cff]/40 border-[#9b5cff]" : "")}>
                    {i+1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-h py-16">
        <div className="card p-10 text-center relative overflow-hidden spotlight">
          <div className="absolute inset-0" style={{background:"linear-gradient(135deg, rgba(0,255,249,.12), rgba(155,92,255,.12))"}} />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 neon-text">Become a Premium Provider</h2>
            <p className="text-lg opacity-85 max-w-2xl mx-auto mb-8">Top placement. Verified badge. Advanced analytics. No commission — ever.</p>
            <a href="/pricing" className="btn text-xl px-10 py-5"><FaBolt/> Power Up</a>
          </div>
        </div>
      </section>
    </main>
  );
}

