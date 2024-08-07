import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full h-[250px] bg-lion-yellow">
      <div className="w-full h-full flex flex-col justify-around items-center p-5">
        <Link onClick={scrollToTop} to='/' className="cursor-pointer"><img src={logo} alt="Logo" className="w-[100px]" /></Link>
        <h2 className="text-4xl font-helvetic-medium">Reporte a los Leones - Proyecto Humanidades</h2>
        <p className="text-3xl font-helvetic-bold">COPYRIGHT © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
