import React from "react";
import "./ServiceCenter.css";

const ServiceCenter = () => {
  return (
    <>
      <nav>
        <button className="back-btn">⬅</button>
        <span>고객센터</span>
      </nav>
      <div className="container">
        <div className="buttons">
          <button>서비스 소개</button>
          <button>공지사항</button>
          <button>문의</button>
          <button>이용약관</button>
          <button>개인정보 취급방침</button>
        </div>
      </div>
    </>
  );
};

export default ServiceCenter;
