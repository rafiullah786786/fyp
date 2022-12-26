import React from "react";
import { useState, useEffect } from "react";
import classes from "./AdmissionOpen.module.css";
import { db } from "../../../FirebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../../FirebaseConfig";

function AdmissionOpen() {
  const [students, setStudents] = useState({});

  // data base connectivity
  const studentCollection = collection(db, "admissionOpen");

  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentCollection);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudents();
  }, []);

  const AdmissionOpen = async () => {
    const userDoc = doc(db, "admissionOpen", students[0].id);
    const newFields = { admissionOpenState: "true" };
    await updateDoc(userDoc, newFields);
  };
  const AdmissionClose = async () => {
    const userDoc = doc(db, "admissionOpen", students[0].id);
    const newFields = { admissionOpenState: "false" };
    await updateDoc(userDoc, newFields);
  };
  return (
    <div>
      <div
        onClick={AdmissionOpen}
        className={`${classes.container}`}
        style={{ cursor: "pointer" }}
      >
        <a className={classes.a}>
          <div className={classes.button}>
            <span className={classes.span}>open</span>
          </div>
          <div className={classes.sun}></div>
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div
        onClick={AdmissionClose}
        className={`${classes.container}`}
        style={{ cursor: "pointer", top: "600px" }}
      >
        <a className={classes.a}>
          <div className={classes.button}>
            <span className={classes.span}>close</span>
          </div>
          <div className={classes.sun}></div>
        </a>
      </div>
    </div>
  );
}

export default AdmissionOpen;
