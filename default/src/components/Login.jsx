import React from "react";

import FacebookLogin from "react-facebook-login";
import GoogleButton from "./GoogleButton";

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
      <FacebookLogin
        textButton="페이스북으로 로그인"
        appId="<FACEBOOK APP ID>"
        fields="name,email,picture"
        // callback={fbResponse}
      />
      <button className="naver-login-btn" />
      <button className="kakao-login-btn" />
    </div>
  );
};

export default Login;
