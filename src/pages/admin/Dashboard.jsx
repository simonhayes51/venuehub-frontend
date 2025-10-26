import Navbar from '../../components/Navbar'; import Footer from '../../components/Footer';
export default function Admin(){
  return(<div><Navbar/><div className='container-2xl py-8'>
    <h1 className='text-3xl mb-4'>Admin</h1>
    <div className='grid md:grid-cols-3 gap-4'>
      <a className='card p-4 block' href='/admin/acts'>Manage Acts</a>
      <a className='card p-4 block' href='/admin/venues'>Manage Venues</a>
      <a className='card p-4 block' href='/admin/reviews'>Moderate Reviews</a>
    </div>
    <p className='text-white/70 mt-6 text-sm'>Stub UI. We can wire authenticated endpoints as soon as you’re ready.</p>
  </div><Footer/></div>);
}