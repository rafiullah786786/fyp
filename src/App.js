import React, { useState } from "react";
import {} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Name from "./components/madrasaName/Name";
import Admission from "./components/form/Admission";
import Students from "./components/students/Students";
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
import Ilm from "./components/students/ilmStudents/Ilm";
import Hifz from "./components/students/hifzStudents/Hifz";
import StudentsWelcome from "./components/students/studentsWelcomePage/StudentsWelcome";
/////////////////////////toestify //////////////////////////
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const openData = (data) => {
    setIsOpen(data);
  };
  const navigate = useNavigate();
  const contactPageHandler = () => {};

  return (
    // <div className="App container-fluid p-0">
    //

    //   <Students />
    //
    //   <Admission />

    // </div>
    <>
      <Navbar data={openData} />
      <div className="row text-center">
        <div className="col-sm-12">
          <button
            className="btn btn-primary m-3  rounded-circle   bg-transparent text-dark mainPageBtn "
            onClick={() => navigate("./about")}
          >
            قواعدِ وضوابط جامعہ
          </button>
          <button
            className="btn btn-primary m-3  rounded-circle   bg-transparent text-dark mainPageBtn "
            onClick={() => navigate("./admission")}
          >
            داخلہ
          </button>
          <button
            className="btn btn-primary m-3  rounded-circle   bg-transparent text-dark mainPageBtn "
            onClick={() => navigate("./courses")}
          >
            کورسز
          </button>
          <button
            className="btn btn-primary m-3  rounded-circle   bg-transparent text-dark mainPageBtn "
            onClick={() => navigate("./contact")}
          >
            رابطہ
          </button>
          <button
            className="btn btn-primary m-3  rounded-circle   bg-transparent text-dark mainPageBtn "
            onClick={() => navigate("./students")}
          >
            طلباء
          </button>
        </div>
      </div>

      <Routes>
        {isOpen && <Route path="/" element={isOpen && <Name />} />}
        <Route path="contact" element={isOpen && <Contact />} />
        <Route path="about" element={isOpen && <About />} />
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
          <Route path="ilm" element={isOpen && <Ilm />} />
          <Route path="hifz" element={isOpen && <Hifz />} />
        </Route>
        <Route path="*" element={isOpen && <Error />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
