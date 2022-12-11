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
import classes from "./Ilm.module.css";

function Ilm() {
  const [students, setStudents] = useState([]);
  const studentCollection = collection(db, "ilmstudents");
  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentCollection);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudents();
  }, []);
  console.log(students);
  return (
    <div>
      <h1 className="text-center mt-5"> شعبہ درجہ کتب طلباء</h1>
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
              <th className={classes.thStyle} scope="col">
                آخری پاس کردہ درجہ
              </th>
              <th className={classes.thStyle} scope="col">
                نمبرات وتقدیر
              </th>
              <th className={classes.thStyle} scope="col">
                طالب علم/سرپرست کا شناختی کارڈ نمبر
              </th>
              <th className={classes.thStyle} scope="col">
                والد/سرپرست کا رابطہ نمبر
              </th>
              <th className={classes.thStyle} scope="col">
                والد کا پیشہ
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
                  <td className={classes.tdStyle}>{student.prevMadrasaName}</td>
                  <td className={classes.tdStyle}>
                    {student.prevMadrasaContactNumber}
                  </td>
                  <td className={classes.tdStyle}>{student.educationLevel}</td>
                  <td className={classes.tdStyle}>{student.schoolName}</td>
                  <td className={classes.tdStyle}>
                    {student.schoolContactNumber}
                  </td>
                  <td className={classes.tdStyle}>{student.madrasaClass}</td>
                  <td className={classes.tdStyle}>{student.marks}</td>
                  <td className={classes.tdStyle}>{student.nic}</td>
                  <td className={classes.tdStyle}>{student.contact}</td>
                  <td className={classes.tdStyle}>
                    {student.fatherOccupation}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ilm;
