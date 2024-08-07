import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Colabora", path: "/colabora" },
    { name: "Reportes", path: "/reportes" },
    { name: "Ideas", path: "/ideas" },
    { name: "Contáctanos", path: "/contactanos" },
    { name: "Encuesta", path: "/encuesta" },
    { name: "Informes", path: "/informes" },
  ];

  return (
    <nav className="flex justify-center items-center w-full p-4">
      <div className="w-[20%] flex justify-center items-center p-5">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-[150px]" />
        </Link>
      </div>
      <div className="w-[50%] h-[50px] flex justify-start">
        <ul className="w-full h-full flex justify-around uppercase text-sm items-center gap-5 font-helvetic-medium text-[#00338D]">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`w-full h-[30px] flex justify-center items-center rounded-xl hover:text-[#EBB700] hover:bg-[#00338D] transition duration-300 ease-in-out ${
                activeLink === item.path ? "text-[#EBB700] bg-[#00338D]" : ""
              }`}
            >
              <Link to={item.path} onClick={() => setActiveLink(item.path)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
