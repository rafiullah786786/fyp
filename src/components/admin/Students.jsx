import React from "react";
import { Link, Outlet } from "react-router-dom";

function Students() {
  let levels = [
    "درجہ اولیٰ",
    "درجہ ثانیہ",
    "درجہ ثالثہ",
    "درجہ رابعہ",
    "درجہ خامسہ",
    "درجہ سادسہ",
    "درجہ سابعہ",
    "درجہ دورہ حدیث",
  ];
  return (
    <div>
      <div className="col-sm-12 m-0 p-0 text-center">
        <h1>شعبہ منتخب کریں</h1>
        <Link
          className="btn btn-primary m-2"
          to="/students/hifz"
          style={{ fontSize: "20px" }}
        >
          شعبہ حفظ القرآن الکریم طلباء
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/students/ilm1st"
          style={{ fontSize: "20px" }}
        >
          {" "}
          {levels[0]}
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/students/ilm2nd"
          style={{ fontSize: "20px" }}
        >
          {" "}
          {levels[1]}
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/students/ilm3rd"
          style={{ fontSize: "20px" }}
        >
          {" "}
          {levels[2]}
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/students/ilm4th"
          style={{ fontSize: "20px" }}
        >
          {" "}
          {levels[3]}
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/students/ilm5th"
          style={{ fontSize: "20px" }}
        >
          {" "}
          {levels[4]}
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/students/ilm6th"
          style={{ fontSize: "20px" }}
        >
          {" "}
          {levels[5]}
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/students/ilm7th"
          style={{ fontSize: "20px" }}
        >
          {" "}
          {levels[6]}
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/students/ilm8th"
          style={{ fontSize: "20px" }}
        >
          {" "}
          {levels[7]}
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/students/admissionOpen"
          style={{ fontSize: "20px" }}
        >
          {" "}
          داخلہ کا آغاز
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Students;
