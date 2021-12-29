import React from "react";
import "./Mypage.css";

import { useDispatch } from "react-redux";

const MyPage = ({ history }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({
      type: "logout",
      payload: {
        isAuthorized: false,
      },
    });

    history.push("/login");
  };
  return (
    <>
      <nav>
        <button className="back-btn">⬅</button>
        <span>마이페이지</span>
      </nav>

      <div className="container">
        <div className="profile-box">
          <div className="photo-circle">
            <p>📷</p>
          </div>
          <p className="name">반유진</p>
          <p className="email">dbwls387@naver.com</p>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              history.push("/service");
            }}
            className="info-btn"
          >
            고객센터
          </button>
          <button
            onClick={() => {
              history.push("/favorite");
            }}
            className="fav-btn"
          >
            즐겨찾기 목록
          </button>
          <button
            onClick={() => {
              history.push("/visited");
            }}
            className="visited-btn"
          >
            방문한 미술관/박물관
          </button>
        </div>
        <div className="small-buttons">
          <button className="logout" onClick={() => logout()}>
            로그아웃
          </button>
          <span> / </span>
          <button className="withdrawal">회원탈퇴</button>
        </div>
      </div>
    </>
  );
};

export default MyPage;
