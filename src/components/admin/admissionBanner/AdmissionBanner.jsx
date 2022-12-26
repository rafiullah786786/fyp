import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdmissionBanner.css";

function AdmissionBanner() {
  const navigate = useNavigate();
  const applyHandler = () => {
    navigate("admission/welcomePage");
  };
  return (
    <div className="row  mt-5 text-center m-0 p-0">
      <div className="col-sm-3"></div>

      <div className="col-sm-6 admissionBanner">
        <h2>
          ہمارے مدرسے میں داخلے جاری ہیں۔ اپلائی کرنے کے لیے نیچے دیے گئے بٹن پر
          کلک کریں۔
        </h2>
        <button onClick={applyHandler} className="btn btn-primary m-5 p-3">
          {" "}
          درخواست دیں
        </button>
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
}

export default AdmissionBanner;
