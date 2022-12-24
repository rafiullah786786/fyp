import React from "react";
import { Link, Outlet } from "react-router-dom";

function Students() {
  return (
    <div>
      <div className="col-sm-12 m-0 p-0 text-center">
        <h1>شعبہ منتخب کریں</h1>
        <Link
          className="btn btn-primary m-4"
          to="/students/hifz"
          style={{ fontSize: "20px" }}
        >
          شعبہ حفظ القرآن الکریم طلباء
        </Link>
        <Link
          className="btn btn-primary m-4"
          to="/students/ilm"
          style={{ fontSize: "20px" }}
        >
          {" "}
          شعبہ درجہ کتب طلباء
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Students;
