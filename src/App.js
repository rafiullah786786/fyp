import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React, { useState } from "react";
import Name from "./components/madrasaName/Name";
import Admission from "./components/form/Admission";
import Students from "./components/students/Students";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Error from "./components/error/Error";
import Books from "./components/books/Books";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./components/form/welcomePage/WelcomePage";
import HifzEQuranStudents from "./components/form/hifzEQuranStudents/HifzEQuranStudents";
import IlmStudents from "./components/form/ilmstudents/IlmStudents";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const openData = (data) => {
    setIsOpen(data);
  };

  return (
    // <div className="App container-fluid p-0">
    //

    //   <Students />
    //
    //   <Admission />

    // </div>

    <Router>
      <Navbar data={openData} />

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
        <Route path="books" element={isOpen && <Books />} />
        <Route path="students" element={isOpen && <Students />} />
        <Route path="*" element={isOpen && <Error />} />
      </Routes>
    </Router>
  );
}

export default App;
