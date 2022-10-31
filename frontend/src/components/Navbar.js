import { useState } from "react";
import styles from "../styles";
import { logo } from "../assets";
import { navLinks } from "../constants";

//HEADER

const Navbar = () => {
  const [active, setActive] = useState("Home");
  //const [botonActivo, setBotonActivo] = useState(false);
  function logout() {
    localStorage.clear();
    window.location.href = "/";
    //setBotonActivo("hidden");
    //llmara funciones btn
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <h1 className={styles.paragraph}>Sistema de Reservas de Vuelos</h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <button
              onClick={logout}
              type="button"
              className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            >
              Salir
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
