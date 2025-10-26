import { useShortlist } from "../context/ShortlistContext.jsx";
export default function CardVenue({venue}){
  const {add} = useShortlist();
  const onSave = ()=> add("venues", venue);
  return (
    <article className="card overflow-hidden spotlight">
      {venue?.image_url ? <img src={venue.image_url} alt="" className="h-44 w-full object-cover"/> : <div className="h-44 bg-white/5"/>}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold leading-tight">{venue?.name ?? "Untitled Venue"}</h3>
        <p className="text-sm text-white/70">{venue?.location || "—"}</p>
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>{venue?.capacity ? `Capacity ${venue.capacity}` : ""} {venue?.price_from ? (venue?.capacity ? " • " : "")+`From £${venue.price_from}` : ""}</span>
          <button onClick={onSave} className="pill">Save</button>
        </div>
      </div>
    </article>
  );
}