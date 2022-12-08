import "./Admission.css";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../../FirebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
function IlmStudents() {
  const [newName, setNewName] = useState("");
  const [newFatherName, setNewfatherName] = useState("");

  const studentCollection = collection(db, "hifzEQuranStudents");
  /////////////////////////////////////////////////////////////////////creat a students //////////////////////
  const createStudent = async () => {
    await addDoc(studentCollection, {
      name: newName,
      fatherName: newFatherName,
    });
  };

  return (
    <div className="row p-0 m-0">
      <div className="col-md-3"></div>
      {/* ////////////////////////////////////////code  */}
      <div className="col-md-6 p-0 m-0">
        <form style={{ textAlign: "center" }}>
          <div class="segment">
            <h1>شعبہ علم دین داخلہ فارم</h1>
          </div>

          <label className="label">
            Full Name {"    "}الاسم *
            <input
              className="input"
              type="text"
              placeholder="اپنا پورا نام درج کریں"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </label>
          <label className="label">
            Father Name اسم الوالد*
            <input
              className="input"
              type="text"
              placeholder="اپنے والد کا نام درج کریں۔"
              onChange={(event) => {
                setNewfatherName(event.target.value);
              }}
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
          <input
            id="submit"
            value="جمع کرائیں"
            className="btn btn-primary"
            onClick={createStudent}
          />
        </form>
      </div>
      {/* ////////////////////////////////////////code  */}
      <div className="col-md-3x"></div>
    </div>
  );
}

export default IlmStudents;
