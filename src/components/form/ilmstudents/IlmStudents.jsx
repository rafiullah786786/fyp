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
function IlmStudents() {
  const [newName, setNewName] = useState("");
  const [newFatherName, setNewfatherName] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [resident, setResident] = useState("");
  const [prevMadrasaName, setPrevMadrasaName] = useState("");
  const [prevMadrasaContactNumber, setPrevMadrasaContactNumber] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolContactNumber, setSchoolContact] = useState("");
  const [marks, setMarks] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [nic, setNic] = useState("");
  const [contact, setContact] = useState("");
  const [madrasaClass, setMadrasaClass] = useState("");

  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);

  const studentCollection = collection(db, "ilmstudents");
  /////////////////////////////////////////////////////////////////////creat a students //////////////////////
  // const imagesListRef = ref(storage, "images/");
  const createStudent = () => {
    // if (imageUpload == null) return;
    // const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    // uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
    // });
    addDoc(studentCollection, {
      name: newName,
      fatherName: newFatherName,
      monthlyCost: monthlyCost,
      dateOfBirth: dateOfBirth,
      address: address,
      resident: resident,
      prevMadrasaName: prevMadrasaName,
      prevMadrasaContactNumber: prevMadrasaContactNumber,
      educationLevel: educationLevel,
      schoolName: schoolName,
      schoolContactNumber: schoolContactNumber,
      madrasaClass: madrasaClass,
      marks: marks,
      fatherOccupation: fatherOccupation,
      nic: nic,
      contact: contact,
    });
  };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  // console.log(imageUrls);

  return (
    <div className="row p-0 m-0">
      <div className="col-md-3"></div>
      {/* ////////////////////////////////////////code  */}
      <div className="col-md-6 p-0 m-0">
        <form style={{ textAlign: "center" }}>
          <div class="segment">
            <h1>شعبہ درجہ کتب داخلہ فارم</h1>
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
            والد کا پیشہ
            <input
              required
              className="input"
              type="text"
              placeholder="والد کا پیشہ"
              onChange={(event) => {
                setFatherOccupation(event.target.value);
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
          <label className="label">
            آخری پاس کردہ درجہ
            <input
              required
              className="input"
              type="text"
              placeholder="آخری پاس کردہ درجہ "
              onChange={(event) => {
                setMadrasaClass(event.target.value);
              }}
            />
          </label>
          <label className="label">
            نمبرات وتقدیر
            <input
              required
              className="input"
              type="text"
              placeholder="  نمبرات وتقدیر "
              onChange={(event) => {
                setMarks(event.target.value);
              }}
            />
          </label>
          <label className="label">
            طالب علم/سرپرست کا شناختی کارڈ نمبر
            <input
              required
              className="input"
              type="text"
              placeholder=" 11101-000000-0 "
              onChange={(event) => {
                setNic(event.target.value);
              }}
            />
          </label>
          <label className="label">
            والد/سرپرست کا رابطہ نمبر
            <input
              required
              className="input"
              type="text"
              placeholder=" 0333 1111111 "
              onChange={(event) => {
                setContact(event.target.value);
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
          <h3>جائزہ کے دن اصل اسناد پیش کریں</h3>
          <Link onClick={createStudent} className="btn btn-primary m-5">
            جمع کرائیں
          </Link>
        </form>
      </div>
      {/* ////////////////////////////////////////code  */}
      <div className="col-md-3x"></div>
    </div>
  );
}

export default IlmStudents;
