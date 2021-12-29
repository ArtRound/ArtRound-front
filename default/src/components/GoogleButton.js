import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";

import { useDispatch } from "react-redux";

const clientId = process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID;

export default function GoogleButton({ history }) {
  const dispatch = useDispatch();

  const onSuccess = async (response) => {
    const access_token = response.accessToken;

    dispatch({
      type: "login",
      payload: {
        isLoggedIn: true,
        access_token: response.accessToken,
        username: response.profileObj.name,
        gender: "gender 정보 없음",
        age: "age 정보 없음",
        provider: "google",
      },
    });
    console.log(response);

    // 구글 로그인 성공시 서버에 전달할 데이터
    // await onSocial({
    //   access_token: response.accessToken,
    //   socialType: "google",
    // });
    console.log(access_token);

    history.replace("/mypage");
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
