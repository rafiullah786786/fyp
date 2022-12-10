import React, { useEffect, useState } from "react";
import { db } from "../../../FirebaseConfig.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import classes from "./Hifz.module.css";

function Hifz() {
  const [students, setStudents] = useState([]);
  const studentCollection = collection(db, "hifzEQuranStudents");
  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentCollection);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudents();
  }, []);
  console.log(students);
  return (
    <div className={classes.tableContainer}>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr className={classes.trStyle}>
            <th className={classes.thStyle} scope="col">
              نام
            </th>
            <th className={classes.thStyle} scope="col">
              والد کا نام
            </th>
            <th className={classes.thStyle} scope="col">
              ماہانہ خرچہ جامعہ کو
            </th>
            <th className={classes.thStyle} scope="col">
              پیدائش کی تاریخ
            </th>
            <th className={classes.thStyle} scope="col">
              طالب علم کا پتہ
            </th>
            <th className={classes.thStyle} scope="col">
              مقیم
            </th>
            <th className={classes.thStyle} scope="col">
              {" "}
              فارم (ب) نمبر
            </th>
            <th className={classes.thStyle} scope="col">
              {" "}
              حفظ پارے 1۔30
            </th>
            <th className={classes.thStyle} scope="col">
              سابقہ مدرسہ کا نام و مکمل پتہ
            </th>
            <th className={classes.thStyle} scope="col">
              {" "}
              سابقہ مدرسہ کا رابطہ نمبر
            </th>
            <th className={classes.thStyle} scope="col">
              {" "}
              عصری تعلیم درجہ
            </th>
            <th className={classes.thStyle} scope="col">
              انسٹی ٹیوٹ کا نام اور پتہ
            </th>
            <th className={classes.thStyle} scope="col">
              سکول کا رابطہ نمبر
            </th>
          </tr>
        </thead>

        <tbody className={classes.tbodyStyle}>
          {students.map((student) => {
            return (
              <tr className={classes.trStyle}>
                <td className={classes.tdStyle}>{student.name}</td>
                <td className={classes.tdStyle}>{student.fatherName}</td>
                <td className={classes.tdStyle}>{student.monthlyCost}</td>
                <td className={classes.tdStyle}>{student.dateOfBirth}</td>
                <td className={classes.tdStyle}>{student.address}</td>
                <td className={classes.tdStyle}>{student.resident}</td>
                <td className={classes.tdStyle}>{student.crc}</td>
                <td className={classes.tdStyle}>{student.juz}</td>
                <td className={classes.tdStyle}>{student.prevMadrasaName}</td>
                <td className={classes.tdStyle}>
                  {student.prevMadrasaContactNumber}
                </td>
                <td className={classes.tdStyle}>{student.educationLevel}</td>
                <td className={classes.tdStyle}>{student.schoolName}</td>
                <td className={classes.tdStyle}>
                  {student.schoolContactNumber}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Hifz;
