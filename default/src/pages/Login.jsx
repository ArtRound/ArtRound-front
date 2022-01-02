import React from "react";

import GoogleButton from "../components/GoogleButton";

import "./Login.css";
import { KAKAO_AUTH_URL } from "./../services/KakaoLogin";

const Login = ({ history }) => {
  return (
    <div className="cover-container">
      <div className="paragraph-wrapper">
        <h1>ArtROUND</h1>
        <p>"예술가는 모든 장소로부터 다가오는 강렬한 감동을 위한 저장소이다”</p>
        <p>-파블로 피카소-</p>
      </div>

      <GoogleButton history={history} />

      <h1>
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      </h1>
    </div>
  );
};

export default Login;
