import React from "react";
import { Link, Outlet } from "react-router-dom";

function Students() {
  return (
    <div className="row m-0 p-0">
      <div className="col-sm-12 m-0 p-0 text-center">
        <Link className="btn btn-primary m-4" to="/students/hifz">
          شعبہ حفظ القرآن الکریم طلباء
        </Link>
        <Link className="btn btn-primary m-4" to="/students/ilm">
          {" "}
          شعبہ درجہ کتب طلباء
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Students;
