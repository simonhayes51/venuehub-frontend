import { Link } from "react-router-dom";
import Badge from "../components/Badge.jsx";

export default function Home(){
  return (
    <main>
      <section className="relative border-b border-line">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="container-h py-16 sm:py-24 relative">
          <Badge>BOOK WITH CONFIDENCE</Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight mt-4 leading-[1.05]">
            Find incredible <span className="text-brand-primary">entertainers</span> &nbsp;
            <span className="text-brand-blue">& venues</span>
          </h1>
          <p className="text-white/70 mt-5 max-w-2xl">
            A modern marketplace where bands, DJs, magicians and stunning venues meet. Compare, shortlist, and enquire — we don’t take payment; you deal direct. We monetize through premium visibility & business insights.
          </p>
          <div className="mt-7 flex gap-3">
            <Link to="/acts" className="btn">Find Acts</Link>
            <Link to="/venues" className="btn-outline">Explore Venues</Link>
          </div>
        </div>
      </section>

      <section className="container-h py-12 sm:py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Why VenueHub?</p>
            <h2 className="text-2xl font-semibold">Built for speed & clarity</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          {[
            ["⚡","Fast search","Zero clutter — get to shortlists quicker."],
            ["🎯","Quality leads","Enquiries with full context & intent."],
            ["💡","Insights","Upgrade for visibility, analytics, badges."],
            ["🔒","You control","Deal direct. We never hold your money."]
          ].map(([icon,title,copy],i)=>(
            <div key={i} className="card p-5">
              <div className="text-2xl">{icon}</div>
              <div className="mt-3 font-semibold">{title}</div>
              <div className="text-sm text-white/70 mt-1">{copy}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}