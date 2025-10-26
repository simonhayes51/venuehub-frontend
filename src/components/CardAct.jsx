import RatingStars from "./RatingStars.jsx";
import { useShortlist } from "../context/ShortlistContext.jsx";

export default function CardAct({act}){
  const {add} = useShortlist();
  const onSave = ()=> add("acts", act);
  return (
    <article className="card overflow-hidden spotlight">
      {act?.image_url ? <img src={act.image_url} alt="" className="h-44 w-full object-cover"/> : <div className="h-44 bg-white/5"/>}
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-tight">{act?.name ?? "Untitled Act"}</h3>
          {act?.rating ? <RatingStars rating={act.rating}/> : null}
        </div>
        <p className="text-sm text-white/70">{act?.genre || act?.location || "—"}</p>
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>{act?.price_from ? `From £${act.price_from}` : "Price on request"}</span>
          <button onClick={onSave} className="pill">Save</button>
        </div>
      </div>
    </article>
  );
}