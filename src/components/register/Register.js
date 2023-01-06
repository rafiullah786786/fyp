import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState();
  const [fatherName, setFatherName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
    } else {
      toast.success("you are Allreday Login", {
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
  }, []);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const fatherNameHandler = (e) => {
    setFatherName(e.target.value);
  };
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
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC00c0FPDDAcjbkpAMpE942FnyPR-dRHvM",
        {
          email: email,
          password: password,
        }
      )
      .then((res) => {
        toast.success("you are logged in successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/home");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.error.errors[0].message);

        toast.error(" password must be 6 characters | fill carefully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 mt-5 text-center">
          <form onSubmit={submitHandler}>
            <h1>یہاں سائن اپ کریں۔</h1>
            <div class="form-group mt-5">
              <label htmlFor="exampleInputEmail1">نام</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="نام"
                value={name}
                onChange={nameHandler}
              />
              <label htmlFor="exampleInputEmail1">والد کا نام</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="والد کا نام"
                value={fatherName}
                onChange={fatherNameHandler}
              />
              <label htmlFor="exampleInputEmail1">ای میل اڈریس</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={emailHandler}
              />
              <small id="emailHelp" class="form-text text-muted text-white">
                ہم آپ کی ای میل کو کبھی بھی کسی اور کے ساتھ شیئر نہیں کریں گے۔
              </small>
            </div>
            <div class="form-group">
              <label htmlFor="exampleInputPassword1">پاس ورڈ</label>
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
              سائن اپ
            </button>
            <h5>
              {" "}
              اگر آپ پہلے ہی اکاؤنٹ بنا چکے ہیں تو براہ کرم لاگ ان کریں۔{" "}
            </h5>
            <button
              onClick={loginHandler}
              type="submit"
              class="btn btn-primary ml-3 "
            >
              لاگ ان کریں
            </button>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
