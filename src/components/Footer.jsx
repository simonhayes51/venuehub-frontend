export default function Footer(){
  return(<footer className='mt-16 border-t border-white/10'>
    <div className='container-2xl py-10 grid md:grid-cols-3 gap-8 text-sm'>
      <div><div className='text-lg font-semibold mb-1'>VenueHub</div>
        <p className='text-white/70'>Find the perfect act or venue. No platform fees — just connect.</p></div>
      <div><div className='font-medium mb-2'>Explore</div>
        <ul className='space-y-1 text-white/80'><li><a href='/acts'>All Acts</a></li><li><a href='/venues'>All Venues</a></li><li><a href='/join'>Add My Services</a></li></ul></div>
      <div><div className='font-medium mb-2'>Company</div>
        <ul className='space-y-1 text-white/80'><li><a href='/about'>About</a></li><li><a href='/contact'>Contact</a></li></ul></div>
    </div>
    <div className='py-4 text-center text-xs text-white/50 border-t border-white/10'>© {new Date().getFullYear()} VenueHub</div>
  </footer>);
}