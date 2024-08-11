import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="lg:w-full lg:h-[250px] h-full bg-lion-yellow">
      <div className="w-full h-full flex flex-col justify-around items-center p-5">
        <Link onClick={scrollToTop} to='/' className="cursor-pointer"><img src={logo} alt="Logo" className="lg:w-[100px] w-[70px]" /></Link>
        <h2 className="lg:text-4xl text-base font-helvetic-medium text-center mt-2">Reporte a los Leones - Proyecto Humanidades</h2>
        <p className="lg:text-3xl text-sm font-helvetic-bold mt-2">COPYRIGHT © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
