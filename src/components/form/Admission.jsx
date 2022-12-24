import React from "react";
import "./Admission.css";
import { Link, Outlet } from "react-router-dom";
function Admission() {
  return (
    <div>
      <div className="col-sm-12 p-0 m-0 text-center ">
        <h1 className="mt-3">اپنا شعبہ منتخب کریں</h1>
        <Link
          className="btn btn-primary m-3"
          to="/admission/hifzEQuranStudents"
          style={{ fontSize: "20px" }}
        >
          شعبہ حفظ القرآن الکریم
        </Link>
        <Link
          className="btn btn-primary m-3"
          to="/admission/ilmStudents"
          style={{ fontSize: "20px" }}
        >
          {" "}
          شعبہ درجہ کتب
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Admission;
