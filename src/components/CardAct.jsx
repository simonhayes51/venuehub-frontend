import RatingStars from "./RatingStars.jsx";
export default function CardAct({act}){
  return (
    <article className="card overflow-hidden hover:shadow-glow transition">
      {act?.image_url ? <img src={act.image_url} alt="" className="h-44 w-full object-cover"/> : <div className="h-44 bg-white/5"/>}
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-tight">{act?.name ?? "Untitled Act"}</h3>
          {act?.rating ? <RatingStars rating={act.rating}/> : null}
        </div>
        <p className="text-sm text-white/70">{act?.genre || act?.location || "—"}</p>
        <p className="text-xs text-white/50">{act?.price_from ? `From £${act.price_from}` : "Price on request"}</p>
      </div>
    </article>
  );
}