import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
function Navbar(props) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");

    props.data(false);
  };
  const closeNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    props.data(true);
  };

  return (
    <header className="row p-0 m-0">
      <Link to="/">
        <img
          style={{ width: "70px", height: "70px", marginLeft: "10px" }}
          src={logo}
          alt=""
        />
      </Link>

      <nav
        ref={navRef}
        className="font-weight-bold  "
        style={{ fontSize: "19px" }}
      >
        <Link to="/about" onClick={closeNavbar}>
          قواعدِ وضوابط جامعہ
        </Link>
        <Link to="admission/welcomePage" onClick={closeNavbar}>
          داخلہ
        </Link>
        <Link to="/courses" onClick={closeNavbar}>
          کورسز
        </Link>
        <Link to="/contact" onClick={closeNavbar}>
          رابطہ
        </Link>
        <Link to="/students/studentsWelcome " onClick={closeNavbar}>
          منتظم
        </Link>
        <button className="nav-btn nav-close-btn" onClick={closeNavbar}>
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
