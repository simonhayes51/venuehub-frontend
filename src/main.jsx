import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { ShortlistProvider } from "./context/ShortlistContext.jsx";
import ShortlistDrawer from "./components/ShortlistDrawer.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Acts from "./pages/Acts.jsx";
import Venues from "./pages/Venues.jsx";
import Join from "./pages/Join.jsx";
import Pricing from "./pages/Pricing.jsx";

function Shell(){
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/acts" element={<Acts/>}/>
        <Route path="/venues" element={<Venues/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
      <Footer/>
      <ShortlistDrawer/>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShortlistProvider>
      <Shell/>
    </ShortlistProvider>
  </BrowserRouter>
);