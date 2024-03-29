import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Admission from "./components/form/Admission";
import Students from "./components/admin/Students";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Error from "./components/error/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import WelcomePage from "./components/form/welcomePage/WelcomePage";
import HifzEQuranStudents from "./components/form/hifzEQuranStudents/HifzEQuranStudents";
import IlmStudents from "./components/form/ilmstudents/IlmStudents";
import Ilm from "./components/admin/AppliedStudents/ilmStudents/Ilm1st";
import Hifz from "./components/admin/AppliedStudents/hifzStudents/Hifz";
import StudentsWelcome from "./components/admin/studentsWelcomePage/StudentsWelcome";
/////////////////////////toestify //////////////////////////
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/loader/Loader.js";
import AdmissionOpen from "./components/admin/admissionOpen/AdmissionOpen";

import AdmissionBanner from "./components/admin/admissionBanner/AdmissionBanner";
import Ilm1st from "./components/admin/AppliedStudents/ilmStudents/Ilm1st";
import Ilm2nd from "./components/admin/AppliedStudents/ilmStudents/Ilm2nd";
import Ilm3rd from "./components/admin/AppliedStudents/ilmStudents/Ilm3nd";
import Ilm4th from "./components/admin/AppliedStudents/ilmStudents/Ilm4th";
import Ilm5th from "./components/admin/AppliedStudents/ilmStudents/Ilm5th";
import Ilm6th from "./components/admin/AppliedStudents/ilmStudents/Ilm6th";
import Ilm7th from "./components/admin/AppliedStudents/ilmStudents/Ilm7th";
import Ilm8th from "./components/admin/AppliedStudents/ilmStudents/Ilm8th";
import StdHifz from "./components/admin/AppliedStudents/studentDetail/StdHifz";
import StdIlm from "./components/admin/AppliedStudents/studentDetail/StdIlm";
import Bank from "./components/bank/Bank";
import Register from "./components/register/Register";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import HomeWelcomePage from "./components/welcomePage/WelcomePage";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  // const [admissionState, setAdmissionState] = useState("");
  // const studentCollection = collection(db, "admissionOpen");
  const openData = (data) => {
    setIsOpen(data);
  };
  const navigate = useNavigate();
  const setLoginState = (data) => {
    console.log(data);
  };
  //autherization code start from here ////////////////////////////////
  const [login, setLogin] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLogin(false);
    } else {
      setLogin(true);
    }
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      setAdminLogin(false);
    } else {
      setAdminLogin(true);
    }
  }, [login]);
  //////////////////autherization code end from here///////////////////
  // geting admission open state from server to create a admission open message
  // useEffect(() => {
  //   const getStudents = async () => {
  //     const data = await getDocs(studentCollection);
  //     setAdmissionState(data.docs.map((doc) => ({ ...doc.data() })));
  //   };
  //   getStudents();
  // }, []);
  // console.log(admissionState);

  return (
    <>
      <Navbar data={openData} />
      {isOpen && (
        <div className="row text-center p-0 m-0">
          <div className="col-sm-12 m-0 p-0">
            <button
              className="btn btn-primary m-3  rounded-circle    mainPageBtn  bg-secondary   "
              onClick={() => navigate("./about")}
            >
              قواعدِ وضوابط
            </button>
            {login && (
              <button
                className="btn btn-primary m-3  rounded-circle     mainPageBtn  bg-secondary "
                onClick={() => navigate("./admission")}
              >
                داخلہ
              </button>
            )}
            <button
              className="btn btn-primary m-3  rounded-circle    mainPageBtn  bg-secondary "
              onClick={() => navigate("./courses")}
            >
              کورسز
            </button>
            <button
              className="btn btn-primary m-3  rounded-circle     mainPageBtn  bg-secondary "
              onClick={() => navigate("./contact")}
            >
              رابطہ
            </button>
            <button
              className="btn btn-primary m-3  rounded-circle     mainPageBtn  bg-secondary "
              onClick={() => navigate("./bank")}
            >
              بینک اکاؤنٹ
            </button>
            {adminLogin && (
              <button
                className="btn btn-primary m-3  rounded-circle     mainPageBtn  bg-secondary "
                onClick={() => navigate("./students")}
              >
                منتظم
              </button>
            )}
            <button
              className="btn btn-primary m-3  rounded-circle     mainPageBtn  bg-secondary "
              onClick={() => navigate("./login")}
            >
              لاگ ان{" "}
            </button>
            <button
              className="btn btn-primary m-3  rounded-circle     mainPageBtn  bg-secondary "
              onClick={() => navigate("./")}
            >
              رجسٹر کریں۔
            </button>
            <button
              className="btn btn-primary m-3  rounded-circle     mainPageBtn  bg-secondary "
              onClick={() => navigate("./logout")}
            >
              لاگ آوٹ
            </button>
          </div>
        </div>
      )}

      <Routes>
        {isOpen && <Route path="/home" element={isOpen && <Home />} />}
        {isOpen && <Route path="/" element={isOpen && <Register />} />}
        {isOpen && (
          <Route
            path="/login"
            element={isOpen && <Login propsdata={setLoginState} />}
          />
        )}
        {isOpen && (
          <Route
            path="/logout"
            element={isOpen && <Logout propsdata={setLoginState} />}
          />
        )}

        <Route path="contact" element={isOpen && <Contact />} />
        <Route path="bank" element={isOpen && <Bank />} />
        <Route path="about" element={isOpen && <About />} />
        <Route path="/studentHifz/:sid" element={isOpen && <StdHifz />} />
        <Route path="/studentIlm/:sid" element={isOpen && <StdIlm />} />
        <Route path="admission" element={isOpen && <Admission />}>
          <Route path="welcomePage" element={isOpen && <WelcomePage />} />
          <Route
            path="hifzEQuranStudents"
            element={isOpen && <HifzEQuranStudents />}
          />
          <Route path="ilmStudents" element={isOpen && <IlmStudents />} />
        </Route>

        <Route path="courses" element={isOpen && <Courses />} />
        <Route path="students" element={isOpen && <Students />}>
          <Route
            path="studentsWelcome"
            element={isOpen && <StudentsWelcome />}
          />
          <Route path="ilm1st" element={isOpen && <Ilm1st />} />
          <Route path="ilm2nd" element={isOpen && <Ilm2nd />} />
          <Route path="ilm3rd" element={isOpen && <Ilm3rd />} />
          <Route path="ilm4th" element={isOpen && <Ilm4th />} />
          <Route path="ilm5th" element={isOpen && <Ilm5th />} />
          <Route path="ilm6th" element={isOpen && <Ilm6th />} />
          <Route path="ilm7th" element={isOpen && <Ilm7th />} />
          <Route path="ilm8th" element={isOpen && <Ilm8th />} />
          <Route path="hifz" element={isOpen && <Hifz />} />
          <Route path="admissionOpen" element={isOpen && <AdmissionOpen />} />
        </Route>
        <Route path="*" element={isOpen && <Error />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
