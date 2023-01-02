import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../../FirebaseConfig.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import classes from "../hifzStudents/Hifz.module.css";
import Loader from "../../../loader/Loader.js";
import { useParams } from "react-router-dom";

function StdIlm() {
  const { sid } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const studentCollection = collection(db, "ilmstudents");
  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentCollection);
      const recivedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLoading(false);
      for (let i = 0; i < recivedData.length; i++) {
        if (recivedData[i].id == sid) {
          /////////////////
          setStudents(recivedData[i]);
          ///////////////
        }
      }
    };
    getStudents();
  }, []);
  console.log(students);
  // code for fun of deleting students from the list of students /////////////////////
  const deleteStudents = async (id) => {
    const userDoc = doc(db, "ilmstudents", id);
    await deleteDoc(userDoc);
  };
  // ///////////////////// ///////////////////////// /////////////////////////
  return (
    <div>
      <h1 className="text-center mt-3">{students.madrasaClass}</h1>
      <div className={classes.tableContainer}>
        <table class="table text-center">
          <tbody>
            <tr>
              <th scope="row"> نام</th>
              <td>{students.name}</td>
            </tr>
            <tr>
              <th scope="row"> والد کا نام</th>
              <td>{students.fatherName}</td>
            </tr>
            <tr>
              <th scope="row"> ماہانہ خرچہ جامعہ کو</th>
              <td>{students.monthlyCost}</td>
            </tr>
            <tr>
              <th scope="row"> پیدائش کی تاریخ</th>
              <td>{students.dateOfBirth}</td>
            </tr>
            <tr>
              <th scope="row"> طالب علم کا پتہ</th>
              <td>{students.address}</td>
            </tr>
            <tr>
              <th scope="row"> مقیم</th>
              <td>{students.resident}</td>
            </tr>
            <tr>
              <th scope="row">سابقہ مدرسہ کا نام و مکمل پتہ</th>
              <td>{students.prevMadrasaName}</td>
            </tr>
            <tr>
              <th scope="row">سابقہ مدرسہ کا رابطہ نمبر</th>
              <td> {students.prevMadrasaContactNumber}</td>
            </tr>
            <tr>
              <th scope="row">عصری تعلیم درجہ</th>
              <td>{students.educationLevel}</td>
            </tr>
            <tr>
              <th scope="row">انسٹی ٹیوٹ کا نام اور پتہ</th>
              <td>{students.schoolName}</td>
            </tr>
            <tr>
              <th scope="row">سکول کا رابطہ نمبر</th>
              <td> {students.schoolContactNumber}</td>
            </tr>
            <tr>
              <th scope="row">آخری پاس کردہ درجہ</th>
              <td>{students.madrasaClass}</td>
            </tr>
            <tr>
              <th scope="row">نمبرات وتقدیر</th>
              <td>{students.marks}</td>
            </tr>
            <tr>
              <th scope="row">طالب علم/سرپرست کا شناختی کارڈ نمبر</th>
              <td>{students.nic}</td>
            </tr>
            <tr>
              <th scope="row">والد/سرپرست کا رابطہ نمبر</th>
              <td>{students.contact}</td>
            </tr>
            <tr>
              <th scope="row">والد کا پیشہ</th>
              <td>{students.fatherOccupation}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* /////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////// */}
      <div>{loading && <Loader />}</div>
    </div>
  );
}

export default StdIlm;
