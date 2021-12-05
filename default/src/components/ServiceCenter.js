import React from "react";
import "./ServiceCenter.css";

const ServiceCenter = ({ history }) => {
  return (
    <>
      <nav>
        <button
          onClick={() => {
            history.push("/");
          }}
          className="back-btn"
        >⬅</button>
        <span>고객센터</span>
      </nav>
      <div className="container">
        <div className="buttons">
          <button>서비스 소개</button>
          <button
            onClick={() => {
              history.push("/notice");
            }}
            className="notice-btn"
          >공지사항</button>

          <button
            onClick={() => {
              history.push("/contactus");
            }}
            className="contact-btn"
          >문의</button>

          <button
            onClick={() => {
              history.push("/tos");
            }}
            className="tos-btn"
          >이용약관</button>

          <button>개인정보 취급방침</button>
        </div>
      </div>
    </>
  );
};

export default ServiceCenter;
