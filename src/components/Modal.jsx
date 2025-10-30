import { useEffect } from "react";
export default function Modal({open,onClose,children}){
  useEffect(()=>{ if(open) document.body.classList.add("modal-open"); else document.body.classList.remove("modal-open"); return ()=>document.body.classList.remove("modal-open")},[open]);
  if(!open) return null;
  return <>
    <div className="modal-backdrop" onClick={onClose}/>
    <div className="modal">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <strong>Details</strong>
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
      </div>
      {children}
    </div>
  </>;
}
