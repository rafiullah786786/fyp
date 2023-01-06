import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Logout(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const adminToken = localStorage.getItem("adminToken");
  if (!token) {
    navigate("/home");
  }

  useEffect(() => {
    if (adminToken) {
      localStorage.removeItem("adminToken");
      toast.success("admin  logout", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/home");
    }

    if (token) {
      localStorage.removeItem("token");

      props.propsdata(false);
      toast.success("you are logout", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/home");
    }
  }, [navigate]);
  return <div></div>;
}

export default Logout;
