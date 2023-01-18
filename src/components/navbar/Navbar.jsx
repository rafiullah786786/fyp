import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Navbar(props) {
  const navigate = useNavigate();

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");

    props.data(false);
  };
  const closeNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    props.data(true);
  };
  let homeOrRegister;

  const [login, setLogin] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLogin(false);
      homeOrRegister = "/";
    } else {
      setLogin(true);
      homeOrRegister = "home";
    }
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      setAdminLogin(false);
    } else {
      setAdminLogin(true);
    }
  }, [login]);

  return (
    <header className="row p-0 m-0">
      <Link to={homeOrRegister}>
        <img
          style={{ width: "76px", height: "76px", marginLeft: "10px" }}
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
        {login && (
          <Link to="admission/welcomePage" onClick={closeNavbar}>
            داخلہ
          </Link>
        )}

        <Link to="/courses" onClick={closeNavbar}>
          کورسز
        </Link>
        <Link to="/contact" onClick={closeNavbar}>
          رابطہ
        </Link>
        <Link to="/bank" onClick={closeNavbar}>
          بینک اکاؤنٹ
        </Link>
        {adminLogin && (
          <Link to="/students/studentsWelcome " onClick={closeNavbar}>
            منتظم
          </Link>
        )}
        <Link to="/login " onClick={closeNavbar}>
          لاگ ان
        </Link>
        <Link to="/ " onClick={closeNavbar}>
          رجسٹر کریں۔
        </Link>
        <Link to="/logout " onClick={closeNavbar}>
          لاگ آوٹ
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
