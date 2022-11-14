import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import React from "react";
import logo from "../../img/logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="row p-0 m-0">
      <img
        style={{ width: "70px", height: "70px", marginLeft: "10px" }}
        src={logo}
        alt=""
      />
      <nav
        ref={navRef}
        className="font-weight-bold  "
        style={{ fontSize: "19px" }}
      >
        <a href="/#">رابطہ</a>
        <a href="/#">داخلہ</a>
        <a href="/#">مدرسے کے بارے میں</a>
        <a href="/#">کورسز</a>
        <a href="/#">کتابیں</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
