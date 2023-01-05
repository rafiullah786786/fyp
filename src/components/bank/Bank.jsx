import React from "react";
import "./Bank.css";
import img from "../../img/WhatsApp Image 2022-12-28 at 02.58.38.jpg";

function Bank() {
  return (
    <>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h3 className="text-center mt-3">الائیڈ بینک نواں کلی برانچ</h3>
          <ul className="cards">
            <li>
              <a href="" className="card">
                <img src={img} className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img className="card__thumb" src={img} alt="" />
                    <div className="card__header-text">
                      <h2 className="card__title">برانچ کوڈ 0283</h2>
                      <h2 className="card__status">
                        اکاؤنٹ نمبر 0010020450710017
                      </h2>
                    </div>
                  </div>
                  <p className="card__description">
                    مَنْ بَنَی مَسْجِدًا لِلَّهِ، بَنَی اللهُ لَهُ فِی
                    الْجَنَّةِ مِثْلَه.
                    <span>
                      جو شخص اللہ کے لیے جس طرح کی مسجدبنائے گا، اللہ اسے جنت
                      میں اس جیساگھر بنا کر دے گا۔
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </>
  );
}

export default Bank;
