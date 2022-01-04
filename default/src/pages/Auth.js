import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

export default function Auth() {
  const REST_API_KEY = "4cabd9184b71cb231252329034193534";
  const REDIRECT_URI = "http://localhost:3000/main/login/kakao";
  const CLIENT_SECRET = "9dFVNap0AB2XWwrros7HHpzQ8Hr8Txl7";

  const history = useHistory();

  const getToken = async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    // access token 가져오기
    const res = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      payload
    );

    fetch("http://localhost:8000/main/login/kakao/finish/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        params: {
          code: res.data.access_token,
        },
      }),
    })
      .then(async (response) => {
        const result = await response.json();
        console.log(result["existing_user"]);

        result["existing_user"] === false
          ? history.push("/information")
          : history.push("/mypage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  return null;
}