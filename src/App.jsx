import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShortlistBubble from './components/ShortlistBubble';
import Home from './pages/Home';
import Acts from './pages/Acts';
import Venues from './pages/Venues';
import Pricing from './pages/Pricing';
import Search from './pages/Search';
import Admin from './pages/Admin';

export default function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/acts' element={<Acts/>}/>
        <Route path='/venues' element={<Venues/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Footer />
      <ShortlistBubble />
    </>
  );
}
