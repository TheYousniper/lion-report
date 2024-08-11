import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Colabora", path: "/colabora" },
    { name: "Reportes", path: "/reportes" },
    { name: "Contactanos", path: "/contactanos" },
  ];

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md z-50">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="w-40 hover:scale-105 transition-all"
        />
      </a>
      <ul className="hidden xl:flex items-center gap-12 font-helvetic-medium text-lion-blue text-xl">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`p-3 hover:bg-lion-blue hover:text-lion-yellow rounded-md transition-all cursor-pointer ${
              activeLink === item.path ? "bg-lion-yellow" : ""
            }`}
          >
            <Link
              to={item.path}
              className={`${activeLink === item.path ? "font-bold" : ""}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <i
        className="bx bx-menu xl:hidden block text-5xl cursor-pointer text-lion-yellow"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>

      <div
        className={`absolute xl:hidden p-10 rounded-xl left-1/2 w-[90%] bg-black/95 text-lion-yellow flex flex-col items-center gap-6 font-helvetic-medium text-lg transform transition-transform backdrop-blur-sm ${
          isMenuOpen ? "translate-y-1/2 opacity-100" : "-translate-y-full opacity-0"
        } -translate-x-1/2`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease", zIndex: 50, top: "0" }}
      >
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className={`p-3 hover:bg-lion-blue hover:text-lion-yellow rounded-md transition-all cursor-pointer ${
              activeLink === item.path ? "bg-lion-blue" : ""
            }`}
            onClick={handleMenuItemClick}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
