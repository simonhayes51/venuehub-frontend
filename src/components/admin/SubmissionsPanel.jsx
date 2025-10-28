import React from 'react';

const API = import.meta.env.VITE_API_URL;

export default function SubmissionsPanel(){
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState('');

  async function load(){
    try{
      setLoading(true); setErr('');
      const r = await fetch(\\/api/admin/submissions\);
      const data = await r.json();
      setRows(Array.isArray(data) ? data : []);
    }catch(e){ setErr('Failed to load submissions'); console.error(e); }
    finally{ setLoading(false); }
  }

  async function approve(id){
    try{
      const r = await fetch(\\/api/admin/submissions/\/approve\, { method:'POST' });
      if(!r.ok) throw new Error(\Approve failed \\);
      await load();
    }catch(e){ alert(e.message); }
  }

  React.useEffect(()=>{ load(); const t = setInterval(load, 10000); return ()=>clearInterval(t); },[]);

  return (
    <div style={{marginTop:16}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <h2 style={{margin:0}}>Submissions</h2>
        <button onClick={load} style={{padding:'8px 14px',borderRadius:12,border:'1px solid rgba(255,255,255,.12)',background:'#0f1430',color:'#e9ecf5'}}>Refresh</button>
      </div>
      {err && <div style={{color:'#ff8080',marginBottom:8}}>{err}</div>}
      <div style={{overflow:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <thead>
            <tr style={{opacity:.85}}>
              <th style={{textAlign:'left',padding:'10px 8px'}}>ID</th>
              <th style={{textAlign:'left',padding:'10px 8px'}}>Role</th>
              <th style={{textAlign:'left',padding:'10px 8px'}}>Payload</th>
              <th style={{textAlign:'left',padding:'10px 8px'}}>Status</th>
              <th style={{textAlign:'left',padding:'10px 8px'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && !rows.length ? (
              <tr><td colSpan={5} style={{padding:12,opacity:.7}}>Loading…</td></tr>
            ) : rows.length ? rows.map(s=>{
              const payload = s.payload || {};
              return (
                <tr key={s.id} style={{borderTop:'1px solid rgba(255,255,255,.06)'}}>
                  <td style={{padding:'10px 8px'}}>{s.id}</td>
                  <td style={{padding:'10px 8px',textTransform:'capitalize'}}>{s.role}</td>
                  <td style={{padding:'10px 8px',maxWidth:560}}>
                    <div style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                      {payload.name || payload.title || payload.email || JSON.stringify(payload)}
                    </div>
                    <details style={{opacity:.85,marginTop:4}}>
                      <summary>View JSON</summary>
                      <pre style={{margin:0,whiteSpace:'pre-wrap'}}>{JSON.stringify(payload,null,2)}</pre>
                    </details>
                  </td>
                  <td style={{padding:'10px 8px'}}>{s.status}</td>
                  <td style={{padding:'10px 8px'}}>
                    {s.status !== 'approved' &&
                      <button onClick={()=>approve(s.id)} style={{padding:'8px 10px',borderRadius:10,border:'none',background:'linear-gradient(90deg,#ff2fd6,#00ffe1)',color:'#0b0f1e',fontWeight:800}}>
                        Approve
                      </button>
                    }
                  </td>
                </tr>
              );
            }) : (
              <tr><td colSpan={5} style={{padding:12,opacity:.7}}>No data</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

