import React, { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

function Students() {
  const [students, setStudents] = useState([]);
  const studentCollection = collection(db, "students");
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
      {students.map((student) => {
        return (
          <div>
            <h1> Name {student.name}</h1>
            <h1> Address {student.address}</h1>
            <h1> Father Name {student.fatherName}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Students;
