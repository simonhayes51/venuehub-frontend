import React from "react";
import SubmissionsPanel from "@/components/admin/SubmissionsPanel.jsx";

export default function AdminPage() {
  const [token, setToken] = React.useState(localStorage.getItem("vh_admin_token") || "");

  function saveToken(){
    localStorage.setItem("vh_admin_token", token.trim());
    alert("Token saved");
  }

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
        <button
          onClick={saveToken}
          className="px-4 py-3 rounded-xl font-semibold bg-[linear-gradient(90deg,#ff2fd6,#00ffe1)] text-[#0b0f1e]">
          Save
        </button>
      </div>

      {/* Tabs (keep others simple for now) */}
      <div className="flex gap-2 mb-4">
        <a className="px-3 py-2 rounded-xl border border-white/10 opacity-60 pointer-events-none">Acts</a>
        <a className="px-3 py-2 rounded-xl border border-white/10 opacity-60 pointer-events-none">Venues</a>
        <a className="px-3 py-2 rounded-xl border border-white/10 opacity-60 pointer-events-none">Bookings</a>
        <a className="px-3 py-2 rounded-xl border border-white/10 opacity-60 pointer-events-none">Reviews</a>
        <span className="px-3 py-2 rounded-xl border border-white/20 bg-[#0f1430]">Submissions</span>
      </div>

      {/* Full featured panel: filters + Approve/Reject + bulk + upload */}
      <SubmissionsPanel />
    </div>
  );
}
