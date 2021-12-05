import React from "react";

import GoogleButton from "../components/GoogleButton";
import KakaoButton from "../components/KakaoButton";

import "./Login.css";

const Login = () => {
  return (
    <div className="cover-container">
      <div className="paragraph-wrapper">
        <h1>ArtROUND</h1>
        <p>"예술가는 모든 장소로부터 다가오는 강렬한 감동을 위한 저장소이다”</p>
        <p>-파블로 피카소-</p>
      </div>

      <GoogleButton />
      <KakaoButton />
    </div>
  );
};

export default Login;
