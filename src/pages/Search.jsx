export default function Search(){
  return (
    <main className="container-h py-10">
      <h1 className="text-3xl font-semibold mb-4">Search (Map)</h1>
      <div className="grid lg:grid-cols-[320px_1fr] gap-4 min-h-[50vh]">
        <aside className="card p-4 space-y-3">
          <div className="font-semibold">Filters</div>
          <input className="input" placeholder="City / region…" />
          <select className="input"><option>Acts</option><option>Venues</option></select>
          <input className="input" placeholder="Budget / Capacity" />
          <button className="btn">Apply</button>
        </aside>
        <section className="card p-4 flex items-center justify-center text-white/60">
          Map coming soon — integrate Leaflet/Mapbox.
        </section>
      </div>
    </main>
  );
}
