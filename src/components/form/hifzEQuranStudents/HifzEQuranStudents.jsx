import "./Admission.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../../FirebaseConfig";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
function HifzEQuranStudents() {
  ////////////////////////////////////////////////////////////////////////////////
  const [students, setStudents] = useState([]);
  ///////////////////////////////////////////////////////////////////////////////////
  const [newName, setNewName] = useState("");
  const [newFatherName, setNewfatherName] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [resident, setResident] = useState("");
  const [crc, setCrc] = useState("");
  const [juz, setJuz] = useState("");
  const [prevMadrasaName, setPrevMadrasaName] = useState("");
  const [prevMadrasaContactNumber, setPrevMadrasaContactNumber] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolContactNumber, setSchoolContact] = useState("");

  const studentCollection = collection(db, "hifzEQuranStudents");
  //////////////////////////geting students from server///////////////////////////////
  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentCollection);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudents();
  }, []);
  /////////////////////////////////////////////////////////////////////creat a students //////////////////////
  const createStudent = () => {
    for (let i = 0; i < students.length; i++) {
      if (students[i].name == newName || students[i].name == newFatherName) {
        toast("آپ پھلے سے داخلہ کر چکے ہیں۔یا آپ کےانٹرنیٹ میں مسلہ ھے۔");
      } else if (
        newName == "" ||
        newFatherName == "" ||
        monthlyCost == "" ||
        dateOfBirth == "" ||
        address == "" ||
        resident == "" ||
        crc == "" ||
        juz == "" ||
        prevMadrasaName == "" ||
        setPrevMadrasaContactNumber == "" ||
        educationLevel == "" ||
        schoolName == "" ||
        schoolContactNumber == ""
      ) {
        toast("آپ کے چند فیلڈ خالی ہے۔ اس کو فیل کریں۔");
      } else {
        addDoc(studentCollection, {
          name: newName,
          fatherName: newFatherName,
          monthlyCost: monthlyCost,
          dateOfBirth: dateOfBirth,
          address: address,
          resident: resident,
          crc: crc,
          juz: juz,
          prevMadrasaName: prevMadrasaName,
          prevMadrasaContactNumber: prevMadrasaContactNumber,
          educationLevel: educationLevel,
          schoolName: schoolName,
          schoolContactNumber: schoolContactNumber,
        });
      }
    }
  };

  return (
    <div className="row p-0 m-0">
      <div className="col-md-3"></div>
      {/* ////////////////////////////////////////code  */}
      <div className="col-md-6 p-0 m-0">
        <form style={{ textAlign: "center" }}>
          <div class="segment">
            <h1> شعبہ حفظ القرآن الکریم داخلہ فارم</h1>
          </div>
          <label className="label">
            نام طالب علم
            <input
              required
              className="input"
              type="text"
              placeholder="اپنا پورا نام درج کریں"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </label>
          <label className="label">
            ولدیت
            <input
              required
              className="input"
              type="text"
              placeholder="اپنے والد کا نام درج کریں۔"
              onChange={(event) => {
                setNewfatherName(event.target.value);
              }}
            />
          </label>
          <label className="label">
            ماہانہ خرچہ جامعہ کو ادا کرتا رھونگا*
            <input
              required
              className="input"
              type="text"
              placeholder="ماہانہ خرچہ جامعہ کو "
              onChange={(event) => {
                setMonthlyCost(event.target.value);
              }}
            />
          </label>
          <label className="label">
            Date of Birth تاریخ المیلاد*
            <input
              required
              className="input"
              type="date"
              placeholder="پیدائش کی تاریخ"
              onChange={(event) => {
                setDateOfBirth(event.target.value);
              }}
            />
          </label>
          <label className="label">
            Address پتہ
            <input
              required
              className="input"
              type="text"
              placeholder="اپنا پتہ درج کریں۔"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </label>
          <label className="label">مقیم</label>
          <input
            required
            type="radio"
            id="yes"
            name="fav_language"
            value="جی ہاں"
            onChange={(event) => {
              setResident(event.target.value);
            }}
          />
            <label htmlFor="yes">جی ہاں</label> 
          <input
            required
            type="radio"
            id="no"
            name="fav_language"
            value="نہیں"
            onChange={(event) => {
              setResident(event.target.value);
            }}
          />
            <label htmlFor="no">نہیں</label>
          <label className="label">
            فارم (ب) نمبر
            <input
              required
              className="input"
              type="text"
              placeholder="اپنا فارم (ب) نمبر درج کریں۔"
              onChange={(event) => {
                setCrc(event.target.value);
              }}
            />
          </label>
          <label className="label">
            حفظ پارے 1۔30
            <input
              required
              className="input"
              type="text"
              placeholder="1-30"
              onChange={(event) => {
                setJuz(event.target.value);
              }}
            />
          </label>
          <label className="label">
            سابقہ مدرسہ کا نام و مکمل پتہ
            <input
              required
              className="input"
              type="text"
              placeholder="اپنے سابقہ ​​مدرسہ کا نام اور پتہ درج کریں۔"
              onChange={(event) => {
                setPrevMadrasaName(event.target.value);
              }}
            />
          </label>
          <label className="label">
            سابقہ مدرسہ کا رابطہ نمبر{" "}
            <input
              required
              className="input"
              type="number"
              placeholder="03331111111"
              onChange={(event) => {
                setPrevMadrasaContactNumber(event.target.value);
              }}
            />
          </label>
          <label className="label">
            عصری تعلیم درجہ
            <input
              required
              className="input"
              type="text"
              placeholder=" 8,10 , 12 , BSC, BA,MSC,BS MPhil , PhD"
              onChange={(event) => {
                setEducationLevel(event.target.value);
              }}
            />
          </label>
          <label className="label">
            سکول کا نام اور پتہ{" "}
            <input
              required
              className="input"
              type="text"
              placeholder="  سکول کا نام اور پتہ درج کریں "
              onChange={(event) => {
                setSchoolName(event.target.value);
              }}
            />
          </label>
          <label className="label">
            سکول کا رابطہ نمبر{" "}
            <input
              required
              className="input"
              type="text"
              placeholder="03331111111 "
              onChange={(event) => {
                setSchoolContact(event.target.value);
              }}
            />
          </label>
          {/* <label className="label">
            فارم (ب) فوٹو اپلوڈ کریں{" "}
            <input required   className="input" type="file" />
          </label>
          <label className="label">اپنا فوٹو اپلوڈ کریں۔</label>
          <input required 
            className="input"
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          /> */}
          {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
          <Link onClick={createStudent} className="btn btn-primary m-4">
            جمع کرائیں
          </Link>
        </form>
      </div>
      {/* ////////////////////////////////////////code  */}
      <div className="col-md-3x"></div>
    </div>
  );
}

export default HifzEQuranStudents;
