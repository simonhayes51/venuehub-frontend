import React from "react";

const API = import.meta.env.VITE_API_URL;

// Pull bearer from the input (saved by Admin.jsx) or localStorage
function getToken() {
  const t = localStorage.getItem("vh_admin_token") || "";
  return t.trim();
}

export default function SubmissionsPanel() {
  const [rows, setRows] = React.useState([]);
  const [status, setStatus] = React.useState("pending"); // pending | approved | rejected | all
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState("");

  async function load() {
    try {
      setLoading(true); setErr("");
      const q = status === "all" ? "" : `?status=${encodeURIComponent(status)}`;
      const r = await fetch(`${API}/api/admin/submissions${q}`, {
        headers: authHeaders()
      });
      if (!r.ok) throw new Error(`Load failed ${r.status}`);
      const data = await r.json();
      setRows(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      setErr("Failed to load submissions.");
    } finally {
      setLoading(false);
    }
  }

  function authHeaders() {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  async function approve(id) {
    try {
      const r = await fetch(`${API}/api/admin/submissions/${id}/approve`, {
        method: "POST",
        headers: authHeaders()
      });
      if (!r.ok) throw new Error(`Approve failed ${r.status}`);
      await load();
    } catch (e) {
      alert(e.message);
    }
  }

  async function reject(id) {
    try {
      const r = await fetch(`${API}/api/admin/submissions/${id}/reject`, {
        method: "POST",
        headers: authHeaders()
      });
      if (!r.ok) throw new Error(`Reject failed ${r.status}`);
      await load();
    } catch (e) {
      alert(e.message);
    }
  }

  React.useEffect(() => { load(); }, [status]);
  React.useEffect(() => {
    const t = setInterval(load, 10000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="m-0 text-xl font-semibold">Submissions</h2>
        <div className="flex items-center gap-2">
          <select
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            className="bg-[#0f1430] border border-white/10 rounded-xl px-3 py-2 text-sm"
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="all">All</option>
          </select>
          <button
            onClick={load}
            className="px-3 py-2 rounded-xl border border-white/15 bg-[#0f1430] text-[#e9ecf5] text-sm"
          >
            Refresh
          </button>
        </div>
      </div>

      {err && <div className="mb-2 text-[#ff8a8a]">{err}</div>}

      <div className="overflow-auto rounded-2xl border border-white/10 bg-[rgba(15,20,48,.55)] shadow-[0_0_0_1px_rgba(255,255,255,.02)_inset,0_10px_40px_rgba(0,0,0,.4)]">
        <table className="w-full border-collapse">
          <thead className="text-white/80 text-sm">
            <tr>
              <th className="text-left px-3 py-3">ID</th>
              <th className="text-left px-3 py-3">Role</th>
              <th className="text-left px-3 py-3">Summary</th>
              <th className="text-left px-3 py-3">Status</th>
              <th className="text-left px-3 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {loading && !rows.length ? (
              <tr><td colSpan={5} className="px-3 py-4 opacity-70">Loading…</td></tr>
            ) : rows.length ? rows.map((s) => {
              let payload = {};
              try { payload = s.payload || JSON.parse(s.payload_json || "{}"); } catch {}
              const hint = payload.name || payload.title || payload.email || payload.website || "";
              return (
                <tr key={s.id} className="border-t border-white/8">
                  <td className="px-3 py-3">{s.id}</td>
                  <td className="px-3 py-3 capitalize">{s.role}</td>
                  <td className="px-3 py-3 max-w-[600px]">
                    <div className="truncate">{hint}</div>
                    <details className="opacity-80 mt-1">
                      <summary className="cursor-pointer">View JSON</summary>
                      <pre className="m-0 whitespace-pre-wrap text-xs opacity-90">
                        {JSON.stringify(payload, null, 2)}
                      </pre>
                    </details>
                  </td>
                  <td className="px-3 py-3 capitalize">{s.status || "pending"}</td>
                  <td className="px-3 py-3">
                    <div className="flex gap-2">
                      {s.status !== "approved" && (
                        <button
                          onClick={()=>approve(s.id)}
                          className="px-3 py-2 rounded-xl font-bold text-[#0b0f1e] bg-[linear-gradient(90deg,#ff2fd6,#00ffe1)]"
                        >
                          Approve
                        </button>
                      )}
                      {s.status !== "rejected" && (
                        <button
                          onClick={()=>reject(s.id)}
                          className="px-3 py-2 rounded-xl border border-white/20 bg-[#0f1430] text-[#e9ecf5] font-semibold"
                        >
                          Reject
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            }) : (
              <tr><td colSpan={5} className="px-3 py-4 opacity-70">No submissions</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <style>{`
        /* subtle neon vibe */
        .vh-chip { background: linear-gradient(90deg,#5b2cff,#00ffe1); }
      `}</style>
    </div>
  );
}
