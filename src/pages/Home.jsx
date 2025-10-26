import { Link } from "react-router-dom";

export default function Home(){
  return (
    <main>
      <section className="container-h py-12">
        <p className="eyebrow">Book with confidence</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">
          Find incredible <span className="text-brand-primary">entertainers</span> & <span className="text-brand-secondary">venues</span>
        </h1>
        <p className="text-white/70 mt-4 max-w-2xl">
          A modern marketplace where bands, DJs, magicians and stunning venues meet. Compare, shortlist, and enquire —
          we don’t take payment; you deal direct. We monetize through premium visibility & business insights.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/acts" className="btn">Find Acts</Link>
          <Link to="/venues" className="btn-outline">Explore Venues</Link>
        </div>
      </section>
    </main>
  );
}