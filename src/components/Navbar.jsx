import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-transparent/10 backdrop-blur supports-backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-black tracking-tight">VenueHub</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/acts">Acts</a>
          <a href="/venues">Venues</a>
          <a href="/pricing">Pricing</a>
          <a href="/search">Search</a>
          <a href="/admin">Admin</a>
          <a href="/submit" className="px-3 py-2 rounded-xl font-semibold text-[#0b0f1e]"
             style={{ background: "linear-gradient(90deg,#10b981,#34d399)" }}>
            Add My Services
          </a>
          <a href="/shortlist" className="rounded-full border px-3 py-1">Shortlist</a>
        </nav>
      </div>
    </header>
  );
}
