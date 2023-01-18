import React from "react";
import { useState, useEffect } from "react";
import AdmissionBanner from "../admin/admissionBanner/AdmissionBanner";
import "./Home.css";
import { db } from "../../FirebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Home() {
  const [admissionState, setAdmissionState] = useState([]);
  const studentCollection = collection(db, "admissionOpen");
  const navigate = useNavigate();
  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentCollection);

      var result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const singleResult = result.map((element) => element.admissionOpenState);
      if (singleResult == "false") {
        setAdmissionState(false);
      } else if (singleResult == "true") {
        setAdmissionState(true);
      }
    };
    getStudents();
  }, [admissionState]);

  return (
    <>
      <div className="mt-5 row p-0 m-0 ">
        <div className="content col-md-12 p-0">
          <h2 style={{ "text-align": "center" }}>
            {" "}
            جامعہ دارالعلوم تعلیم القرآن{" "}
          </h2>
          <h2 style={{ "text-align": "center" }}>
            {" "}
            جامعہ دارالعلوم تعلیم القرآن{" "}
          </h2>
        </div>
        <div className="content col-md-12 p-0 mt-5 secondName">
          <h2 style={{ "text-align": "center" }}> باڑہ گیٹ پشاور </h2>
          <h2 style={{ "text-align": "center" }}> باڑہ گیٹ پشاور </h2>
        </div>
      </div>
      <div className="row p-0 m-0 mt-4">
        <div className="col-sm-12 m-0 p-0 ">
          <marquee direction="left" loop="1" scrollamount="10">
            <img
              style={{ width: "600px", height: "100px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp_Image_2023-01-02_at_04.02.38-removebg-preview.png?alt=media&token=4adbc606-c290-4595-a13e-a970b97e3ddf"
              alt=""
            />
          </marquee>
        </div>
      </div>
      {admissionState && (
        <div>
          <div>
            <AdmissionBanner />
          </div>
        </div>
      )}
      <div className="row p-0 m-0">
        <div className="col-sm-12 p-0 m-0">
          <div className="text-center">
            <img
              className="m-5 img  img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "236px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp%202022-12-26%20at%2022.01.20.jpg?alt=media&token=6acf225c-486f-46f7-b73a-afe5886f30b3"
              alt=""
            />
            <img
              className="m-5 img  img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "236px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp%20Image%20.19.jpg?alt=media&token=2de98ecd-19cc-4680-8519-a38a451601db"
              alt=""
            />
            <img
              className="m-5 img  img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "236px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp%20Image%202022-12-2%2022.01.22.jpg?alt=media&token=b7ae69b6-2e05-4f9e-a24f-3c280e8846dd"
              alt=""
            />
            <img
              className="m-5 img  img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "236px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp%20Image%202022-12-26%20at%2022.01.16.jpg?alt=media&token=cec99945-be62-45bd-91fa-bd7f9a53df38"
              alt=""
            />
            <img
              className="m-5 img  img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "236px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp%20Image%202022-12-26%20at%2022.01.18.jpg?alt=media&token=6bc133e2-49eb-475f-b8da-fc60095366d5"
              alt=""
            />
            <img
              className="m-5 img  img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "236px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp%20Image%202022-12-26%20at%2022.01.19.jpg?alt=media&token=35f62e46-5b6b-4025-adbb-e33426f0bd36"
              alt=""
            />
            <img
              className="m-5 img  img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "236px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp%20Image%202022-12-26%20at%2022.01.20.jpg?alt=media&token=a36c5c0b-30d3-4308-bfe7-11b4ca5f44cd"
              alt=""
            />
            <img
              className="m-5 img  img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "236px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp%20Image%202022-12-26%20at%2022.01.21.jpg?alt=media&token=c5208ae6-70b2-43a2-a22d-082b9c6ef7ea"
              alt=""
            />
            <img
              className="m-5 img  img-fluid"
              style={{ width: "300px", height: "300px", borderRadius: "236px" }}
              src="https://firebasestorage.googleapis.com/v0/b/madrasa-management-system.appspot.com/o/images%2FWhatsApp%20Image%202022-12-26%20at%2022.01.23.jpg?alt=media&token=59f8a575-95fd-4a3b-8f27-86ed74ea92fe"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
