import React from "react";

const MyPage = () => {
  return (
    <>
      <div className="profile-box">
        <div className="photo-circle"></div>
        <p className="name">반유진</p>
        <p className="email">dbwls387@naver.com</p>
      </div>
      <div className="buttons">{/* 
            Components
        */}</div>
      <div className="small-btn">
        <button className="logout">로그아웃</button>
        <span> / </span>
        <button className="withdrawal">회원탈퇴</button>
      </div>
    </>
  );
};

export default MyPage;
