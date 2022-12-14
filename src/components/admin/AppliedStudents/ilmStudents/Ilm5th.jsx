import React, { useEffect, useState } from "react";
import { db } from "../../../../FirebaseConfig.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import classes from "./Ilm.module.css";
import Loader from "../../../loader/Loader.js";
import { Link } from "react-router-dom";

function Ilm5th() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  let levels = [
    "درجہ اولیٰ",
    "درجہ ثانیہ",
    "درجہ ثالثہ",
    "درجہ رابعہ",
    "درجہ خامسہ",
    "درجہ سادسہ",
    "درجہ سابعہ",
    "درجہ دورہ حدیث",
  ];

  const studentCollection = collection(db, "ilmstudents");
  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentCollection);
  
       let results = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
       setStudents(results.filter((word) => word.madrasaClass == levels[4]));
      setLoading(false);
    };
    getStudents();
  }, []);

  // code for fun of deleting students from the list of students /////////////////////
  const deleteStudents = async (id) => {
    const userDoc = doc(db, "ilmstudents", id);
    await deleteDoc(userDoc);
  };
  // ///////////////////// ///////////////////////// /////////////////////////
  return (
    <div>
      <h1 className="text-center mt-2">درجہ خامسہ</h1>
      <div className={classes.tableContainer}>
        <table className={`classes.tableStyle`} style={{ width: "100%" }}>
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
              <th colSpan="2" className={classes.thStyle} scope="col">
                اعمال
              </th>
            </tr>
          </thead>

          {!loading && (
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
                    <td className={classes.tdStyle}>
                      {student.prevMadrasaName}
                    </td>
                    <td className={classes.tdStyle}>
                      {student.prevMadrasaContactNumber}
                    </td>
                    <td className={classes.tdStyle}>
                      {student.educationLevel}
                    </td>
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
                    <td className={classes.tdStyle}>
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          deleteStudents(student.id);
                        }}
                      >
                        حذ ف کریں
                      </button>
                    </td>
                    <td className={classes.tdStyle}>
                      <Link
                        to={`/studentIlm/${student.id}`}
                        className="btn btn-dark"
                      >
                        دیکھیں
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
      <div>{loading && <Loader />}</div>
    </div>
  );
}

export default Ilm5th;
