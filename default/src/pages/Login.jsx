import React from "react";
import axios from "axios";

import GoogleButton from "../components/GoogleButton";

import "./Login.css";
import { KAKAO_AUTH_URL } from "./../services/KakaoLogin";
// import KakaoLogin from "react-kakao-login";

// const kakaoResponse = async (response) => {
//   console.log(response.response.access_token);
//   let res = await axios.get("http://localhost:8000/main/login/kakao", {
//     params: {
//       code: response.response.access_token,
//     },
//   });
//   console.log(res);
// };

const Login = ({ history }) => {
  return (
    <div className="cover-container">
      <div className="paragraph-wrapper">
        <h1>ArtROUND</h1>
        <p>"예술가는 모든 장소로부터 다가오는 강렬한 감동을 위한 저장소이다”</p>
        <p>-파블로 피카소-</p>
      </div>

      <GoogleButton history={history} />
      <div className="kakaoButton">
        <a href={KAKAO_AUTH_URL}>
          <span>카카오계정 로그인</span>
        </a>
      </div>
      {/* <KakaoLogin
        token={"7ca497d03fec324f1c9582ef8a37ead6"}
        onSuccess={console.log}
        onFail={console.error}
        onLogout={console.info}
      /> */}
    </div>
  );
};

export default Login;
