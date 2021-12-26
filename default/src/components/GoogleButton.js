import React from "react";
import GoogleLogin from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID;

export default function GoogleButton({ onSocial, history }) {
  const onSuccess = async (response) => {
    console.log(response);

    // const {
    //   googleId,
    //   profileObj: { email, name },
    // } = response;

    // 구글 로그인 성공시 서버에 전달할 데이터
    // await onSocial({
    //   socialId: googleId,
    //   socialType: "google",
    //   email,
    //   nickname: name,
    // });

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
