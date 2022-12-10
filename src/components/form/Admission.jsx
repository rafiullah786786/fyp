import React from "react";
import "./Admission.css";
import { Link, Outlet } from "react-router-dom";
function Admission() {
  return (
    <div>
      <div className="col-sm-12 p-0 m-0 text-center ">
        <Link
          className="btn btn-primary m-5"
          to="/admission/hifzEQuranStudents"
        >
          شعبہ حفظ القرآن الکریم
        </Link>
        <Link className="btn btn-primary m-4" to="/admission/ilmStudents">
          {" "}
          شعبہ درجہ کتب
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Admission;
