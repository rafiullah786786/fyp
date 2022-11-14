import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Name from "./components/madrasaName/Name";
import Admission from "./components/form/Admission";
import Students from "./components/students/Students";
// import Name from "./components/madrasaName/Name";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Navbar />

      <Students />
      <Name />
      <Admission />
    </div>
  );
}

export default App;
