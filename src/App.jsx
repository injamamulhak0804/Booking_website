
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Kolukkumalai from "./components/Kolukkumalai";
import Kolukkumalai1 from "./components/Kolukkumalai1";
import Vehicle from "./components/Vehicle";
import AboutUs from "./components/AboutUs";
import Terms_cond from "./components/Terms_cond";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/kol" element={<Kolukkumalai/>} />
        <Route path="/Kolukkumalai1" element={<Kolukkumalai1/>} />
        <Route path="/vechile" element={<Vehicle/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/terms_conditions" element={<Terms_cond />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
