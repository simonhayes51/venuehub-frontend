import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Acts from "./pages/Acts.jsx";
import Venues from "./pages/Venues.jsx";

function App(){
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/acts" element={<Acts/>}/>
        <Route path="/venues" element={<Venues/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter><App/></BrowserRouter>
);