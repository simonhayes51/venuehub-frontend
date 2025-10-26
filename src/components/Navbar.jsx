import Logo from './Logo';
export default function Navbar(){
  return(<header className='sticky top-0 z-40 border-b border-white/10 bg-bg/80 backdrop-blur'>
    <div className='container-2xl h-14 flex items-center justify-between'>
      <a href='/' className='flex items-center gap-2'><Logo/></a>
      <nav className='hidden md:flex items-center gap-6 text-sm'>
        <a href='/'>Home</a><a href='/acts'>Acts</a><a href='/venues'>Venues</a>
        <a href='/join' className='pill'>Add My Services</a>
        <a href='/shortlist' className='pill'>Shortlist</a>
        <a href='/admin' className='btn-ghost'>Admin</a>
      </nav>
    </div>
  </header>);
}