import React from "react";
import styles from "./Name.module.css";

function Name() {
  return (
    <div>
      <h1 className={`${styles.madrasaName}  mt-5`}>
        {" "}
        مدرسہ جامعہ دارالعلوم تعلیم القرآن باڑہ گیٹ پشاور
      </h1>
    </div>
  );
}

export default Name;
