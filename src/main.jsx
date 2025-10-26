import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_BASE || "";

function Home(){
  return (
    <div style={{padding:24}}>
      <h1>VenueHub</h1>
      <p><Link to="/acts">Browse Acts</Link> · <Link to="/venues">Browse Venues</Link></p>
    </div>
  );
}

function List({ endpoint, title }){
  const [items,setItems]=React.useState(null);
  const [err,setErr]=React.useState(null);
  React.useEffect(()=>{
    fetch(`${API}/${endpoint}`)
      .then(r => r.ok ? r.json() : Promise.reject(new Error(r.status)))
      .then(setItems).catch(setErr);
  },[endpoint]);

  return (
    <div style={{padding:24}}>
      <h2>{title}</h2>
      {!items && !err && <p>Loading…</p>}
      {err && <pre style={{color:"salmon"}}>{String(err)}</pre>}
      {Array.isArray(items) && (
        <ul>
          {items.map(x => <li key={x.id}>{x.name || x.title || JSON.stringify(x)}</li>)}
        </ul>
      )}
    </div>
  );
}

function App(){
  return (
    <BrowserRouter>
      <nav style={{padding:12, borderBottom:"1px solid #333"}}>
        <Link to="/">Home</Link>{" · "}
        <Link to="/acts">Acts</Link>{" · "}
        <Link to="/venues">Venues</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/acts" element={<List endpoint="acts" title="Acts"/>}/>
        <Route path="/venues" element={<List endpoint="venues" title="Venues"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App/>);