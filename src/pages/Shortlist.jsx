import Navbar from '../components/Navbar'; import Footer from '../components/Footer';
export default function Shortlist(){
  const key='vh_shortlist'; const items=JSON.parse(localStorage.getItem(key)||'[]');
  const remove=(i)=>{ const a=JSON.parse(localStorage.getItem(key)||'[]').filter(x=>!(x.id===i.id&&x.type===i.type)); localStorage.setItem(key,JSON.stringify(a)); location.reload(); };
  return(<div><Navbar/><div className='container-2xl py-8'><h1 className='text-3xl mb-4'>Shortlist</h1>
    {!items.length? <div className='text-white/70'>Nothing saved yet.</div>
      : <div className='space-y-3'>{items.map((x,idx)=><div key={idx} className='card p-3 flex items-center justify-between'><div>{x.type} #{x.id}</div><button className='btn btn-ghost' onClick={()=>remove(x)}>Remove</button></div>)}</div>}
  </div><Footer/></div>);
}