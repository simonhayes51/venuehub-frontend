export default function Footer(){
  return (
    <footer className="border-t border-white/10 mt-14">
      <div className="container-h py-8 text-sm text-white/60">
        © {new Date().getFullYear()} VenueHub — built for entertainers & venues.
      </div>
    </footer>
  );
}