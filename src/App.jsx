import React from "react";
import { Route, Routes } from "react-router-dom";
import Colabora from "./pages/Colabora";
import Home from "./pages/Home";
import Reportes from "./pages/Reportes";
import Contactanos from "./pages/Contactanos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar/>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/colabora" element={<Colabora/>}/>
          <Route path="/reportes" element={<Reportes/>}/>
          <Route path="/contactanos" element={<Contactanos/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
