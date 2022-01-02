import axios from "axios";
import { useEffect } from "react";

export default function KakaoRedirectHandler({ history }) {
  // 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

  console.log(code);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/main/login/kakao?code=${code}`, {
        // prettier-ignore
        "Accept": "application/json",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함

        // history.replace("/mypage"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  });
  return null;
}
