import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { db } from "../../FirebaseConfig.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  // admin login data fetching from server
  const adminCollection = collection(db, "admin");

  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(adminCollection);
      setAdminEmail(
        data.docs[0]._document.data.value.mapValue.fields.email.stringValue
      );
      setAdminPassword(
        data.docs[0]._document.data.value.mapValue.fields.password.stringValue
      );
    };
    getStudents();
  }, []);
  const navigate = useNavigate();
  //admin login code start from here

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC00c0FPDDAcjbkpAMpE942FnyPR-dRHvM",
        {
          email: email,
          password: password,
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.idToken);
        props.propsdata(true);
        toast.success("successfully login feel free to use my website", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);

        toast.error(" your email or password is incorrect", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    const token = localStorage.getItem("token");
    if (email == adminEmail && password == adminPassword) {
      localStorage.setItem("adminToken", "786786");
      toast.success("Admin login successfully ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/students/studentsWelcome");
    }
    //normal login code start from here
    else if (!token) {
    } else {
      toast.success("you are Allready Login", {
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
  };
  const handlerNavigate = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 mt-5">
          <form onSubmit={submitHandler}>
            <h1 className="text-center">لاگ ان کریں</h1>

            <div class="form-group mt-5">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={emailHandler}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={passwordHandler}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Login
            </button>
            <h5>
              اگر آپ نے اکاؤنٹ پھلے سے بنایا نہیں ہے تو نیچے دیے گئے بٹن پر کلک
              کریں اور اپنے آپ کو رجسٹر کریں۔
            </h5>
            <button onClick={handlerNavigate} class="btn btn-primary m-2">
              Create a new account
            </button>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
