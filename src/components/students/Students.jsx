import React, { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./Students.css";

function Students() {
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
    <div className="row p-0 m-0">
      <div className="col-12 p-0 m-0">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">نام</th>
              <th scope="col">والد کا نام</th>
              <th scope="col">پیدائش کی تاریخ</th>
              <th scope="col">طالب علم کا پتہ</th>
              <th scope="col">مقیم</th>
              <th scope="col"> فارم (ب) نمبر</th>
              <th scope="col"> حفظ پارے 1۔30</th>
              <th scope="col">سابقہ مدرسہ کا نام و مکمل پتہ</th>
              <th scope="col"> سابقہ مدرسہ کا رابطہ نمبر</th>
              <th scope="col"> عصری تعلیم درجہ</th>
              <th scope="col">انسٹی ٹیوٹ کا نام اور پتہ</th>
              <th scope="col">سکول کا رابطہ نمبر</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr>
                  <td scope="col">{student.name}</td>
                  <td scope="col">{student.fatherName}</td>
                  <td scope="col">{student.dateOfBirth}</td>
                  <td scope="col">{student.address}</td>
                  <td scope="col">{student.resident}</td>
                  <td scope="col">{student.crc}</td>
                  <td scope="col">{student.juz}</td>
                  <td scope="col">{student.prevMadrasaName}</td>
                  <td scope="col">{student.prevMadrasaContactNumber}</td>
                  <td scope="col">{student.educationLevel}</td>
                  <td scope="col">{student.schoolName}</td>
                  <td scope="col">{student.schoolContactNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
