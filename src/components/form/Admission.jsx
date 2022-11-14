import React from "react";
import "./Admission.css";

function Admission() {
  return (
    <div className="row p-0 m-0">
      <div className="col-md-3"></div>
      <div className="col-md-6 p-0 m-0">
        <form>
          <div class="segment">
            <h1>داخلہ فارم</h1>
          </div>

          <label className="label">
            Full Name {"    "}الاسم *
            <input
              className="input"
              type="text"
              placeholder="اپنا پورا نام درج کریں"
            />
          </label>
          <label className="label">
            Father Name اسم الوالد*
            <input
              className="input"
              type="text"
              placeholder="اپنے والد کا نام درج کریں۔"
            />
          </label>
          <label className="label">
            Date of Birth تاریخ المیلاد*
            <input
              className="input"
              type="date"
              placeholder="پیدائش کی تاریخ"
            />
          </label>
          <label className="label">
            Address العنوان
            <input
              className="input"
              type="text"
              placeholder="اپنا پتہ درج کریں۔"
            />
          </label>
        </form>
      </div>
      <div className="col-md-3x"></div>
    </div>
  );
}

export default Admission;
