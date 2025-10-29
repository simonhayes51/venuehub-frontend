import React from "react";
import SubmissionsPanel from "@/components/admin/SubmissionsPanel.jsx";

export default function AdminPage() {
  const [token, setToken] = React.useState(localStorage.getItem("vh_admin_token") || "");
  const saveToken = () => { localStorage.setItem("vh_admin_token", token.trim()); alert("Token saved"); };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin</h1>

      <div className="flex items-center gap-3 mb-6">
        <input
          value={token}
          onChange={e=>setToken(e.target.value)}
          placeholder="Paste Bearer token here"
          className="flex-1 bg-[#0f1430] border border-white/10 rounded-xl px-4 py-3"
        />
        <button onClick={saveToken}
          className="px-4 py-3 rounded-xl font-semibold bg-[linear-gradient(90deg,#ff2fd6,#00ffe1)] text-[#0b0f1e]">
          Save
        </button>
      </div>

      {/* real links now */}
      <div className="flex gap-2 mb-4">
        <a href="/acts"    className="px-3 py-2 rounded-xl border border-white/10 hover:border-white/20">Acts</a>
        <a href="/venues"  className="px-3 py-2 rounded-xl border border-white/10 hover:border-white/20">Venues</a>
        <a href="/bookings" className="px-3 py-2 rounded-xl border border-white/10 hover:border-white/20">Bookings</a>
        <a href="/reviews" className="px-3 py-2 rounded-xl border border-white/10 hover:border-white/20">Reviews</a>
        <a href="/admin"   className="px-3 py-2 rounded-xl border border-white/20 bg-[#0f1430]">Submissions</a>
      </div>

      <SubmissionsPanel />
    </div>
  );
}
