import React from "react";
import { useState, useEffect } from "react";
import AdmissionBanner from "../admin/admissionBanner/AdmissionBanner";
import "./Name.css";
import { db } from "../../FirebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Name() {
  const [admissionState, setAdmissionState] = useState([]);
  const studentCollection = collection(db, "admissionOpen");
  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentCollection);

      var result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const singleResult = result.map((element) => element.admissionOpenState);
      if (singleResult == "false") {
        setAdmissionState(false);
      } else if (singleResult == "true") {
        setAdmissionState(true);
      }
    };
    getStudents();
  }, []);
  console.log(admissionState);

  return (
    <>
      <div className="mt-5 row p-0 m-0 ">
        <div className="content col-md-12 p-0">
          <h2 style={{ "text-align": "center" }}>
            {" "}
            جامعہ دارالعلوم تعلیم القرآن{" "}
          </h2>
          <h2 style={{ "text-align": "center" }}>
            {" "}
            جامعہ دارالعلوم تعلیم القرآن{" "}
          </h2>
        </div>
        <div className="content col-md-12 p-0 mt-5 secondName">
          <h2 style={{ "text-align": "center" }}> باڑہ گیٹ پشاور </h2>
          <h2 style={{ "text-align": "center" }}> باڑہ گیٹ پشاور </h2>
        </div>
      </div>
      {admissionState && (
        <div>
          <div>
            <AdmissionBanner />
          </div>
        </div>
      )}
    </>
  );
}

export default Name;
