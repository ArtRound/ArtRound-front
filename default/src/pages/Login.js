import React from "react";

// import GoogleButton from "../components/GoogleButton";
import kakaoButton from "../img/kakao_login_medium_narrow.png";

import "./Login.css";
import { KAKAO_AUTH_URL } from "../services/KakaoLogin";

const Login = ({ history }) => {
  return (
    <div className="cover-container">
      <div className="paragraph-wrapper">
        <h1>ArtROUND</h1>
        <p>"예술가는 모든 장소로부터 다가오는 강렬한 감동을 위한 저장소이다”</p>
        <p>-파블로 피카소-</p>
      </div>

      {/* <GoogleButton history={history} /> */}

      <div className="kakao-login-button">
        <a href={KAKAO_AUTH_URL}>
          <img src={kakaoButton} alt="kakao login btn" />
        </a>
      </div>
    </div>
  );
};

export default Login;
