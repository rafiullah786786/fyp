import React from "react";
import "./Admission.css";
import { Link, Outlet } from "react-router-dom";
function Admission() {
  return (
    <div>
      <div className="admissionBtn">
        <Link className="btn btn-primary m-5" to="/admission/welcomePage">
          {" "}
          rolus for apply{" "}
        </Link>
        <Link
          className="btn btn-primary m-5"
          to="/admission/hifzEQuranStudents"
        >
          hefz{" "}
        </Link>
        <Link className="btn btn-primary m-5" to="/admission/ilmStudents">
          {" "}
          ilm{" "}
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Admission;
