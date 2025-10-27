import SEO from "../components/SEO.jsx";
export default function Search(){
  return (
    <main className="container-h py-8 space-y-4">
      <SEO title="Search on Map" description="Filter by location and see results on a map." />
      <div className="grid lg:grid-cols-[320px_1fr] gap-4 min-h-[60vh]">
        <aside className="card p-4 space-y-3">
          <div className="font-semibold">Filters</div>
          <input className="input" placeholder="City, region…"/>
          <select className="input"><option>Acts</option><option>Venues</option></select>
          <input className="input" placeholder="Min capacity / budget"/>
          <button className="btn">Apply</button>
        </aside>
        <section className="card p-4 flex items-center justify-center text-white/60">
          Map coming soon — plug in Leaflet/Mapbox/Google.
        </section>
      </div>
    </main>
  );
}