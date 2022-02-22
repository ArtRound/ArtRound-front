import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Auth() {
  let history = useHistory();
  const dispatch = useDispatch();
  const REST_API_KEY = "4cabd9184b71cb231252329034193534";
  const REDIRECT_URI = "http://localhost:3000/main/login/kakao";
  const CLIENT_SECRET = "9dFVNap0AB2XWwrros7HHpzQ8Hr8Txl7";

  const getToken = async () => {
    const code = new URL(window.location.href).searchParams.get("code");

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
        console.log(result);

        dispatch({
          type: "LOGIN_USER",
          payload: {
            id: result.id,
            profile_image: result.profile_image,
            isLoggedin: true,
          },
        });
        result.existing_user === "true"
          ? history.push("/mypage")
          : history.push("/information");
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
