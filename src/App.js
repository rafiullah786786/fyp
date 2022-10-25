import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Name from "./components/madrasaName/Name";
// import Name from "./components/madrasaName/Name";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Navbar />

      <Name />
    </div>
  );
}

export default App;
