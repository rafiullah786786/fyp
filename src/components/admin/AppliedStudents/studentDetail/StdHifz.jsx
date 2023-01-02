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

function StdHifz() {
  const { sid } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const studentCollection = collection(db, "hifzEQuranStudents");
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
    const userDoc = doc(db, "hifzEQuranStudents", id);
    await deleteDoc(userDoc);
  };
  // ///////////////////// ///////////////////////// /////////////////////////
  return (
    <div>
      <h1 className="text-center mt-3">شعبہ حفظ القرآن الکریم طلباء</h1>
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
              <th scope="row"> فارم (ب) نمبر</th>
              <td>{students.crc}</td>
            </tr>
            <tr>
              <th scope="row"> حفظ پارے 1۔30</th>
              <td>{students.juz}</td>
            </tr>
            <tr>
              <th scope="row"> سابقہ مدرسہ کا نام و مکمل پتہ</th>
              <td>{students.prevMadrasaName}</td>
            </tr>
            <tr>
              <th scope="row"> سابقہ مدرسہ کا رابطہ نمبر</th>
              <td>{students.prevMadrasaContactNumber}</td>
            </tr>
            <tr>
              <th scope="row"> عصری تعلیم درجہ</th>
              <td>{students.educationLevel}</td>
            </tr>
            <tr>
              <th scope="row"> انسٹی ٹیوٹ کا نام اور پتہ</th>
              <td>{students.schoolName}</td>
            </tr>
            <tr>
              <th scope="row"> سکول کا رابطہ نمبر</th>
              <td>{students.schoolContactNumber}</td>
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

export default StdHifz;
