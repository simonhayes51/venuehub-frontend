export default function Rating({value=0}){const s=Math.round(value||0);
  return <div className='text-amber-300'>{'★'.repeat(s)}<span className='text-white/30'>{'★'.repeat(5-s)}</span></div>;
}