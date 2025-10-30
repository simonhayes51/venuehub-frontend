import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Acts from "./pages/Acts";
import Venues from "./pages/Venues";
import Pricing from "./pages/Pricing";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import Shortlist from "./pages/Shortlist";

export default function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/acts" element={<Acts/>}/>
        <Route path="/venues" element={<Venues/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/shortlist" element={<Shortlist/>}/>
      </Routes>
    </BrowserRouter>
  );
}
