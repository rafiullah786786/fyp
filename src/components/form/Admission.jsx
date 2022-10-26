import React from "react";
import "./Admission.module.css";

function Admission() {
  return (
    <div>
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
          <input className="input" type="text" placeholder="پیدائش کی تاریخ" />
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
  );
}

export default Admission;
