import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Auth() {
  let history = useHistory();
  const dispatch = useDispatch();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: process.env.REACT_APP_REST_API_KEY,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      code: new URL(window.location.href).searchParams.get("code"),
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
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

        dispatch({
          type: "login",
          payload: {
            id: result.id,
            profile_image: result.profile_image,
          },
        });
        result.existing_user === "true"
          ? history.push("/map")
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
