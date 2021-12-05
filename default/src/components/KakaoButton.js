import { useHistory } from "react-router";

const CLIENT_ID = process.env.REACT_APP_KAKAO_LOGIN_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const { Kakao } = window;

export default function KakaoLogin() {
  const history = useHistory();
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      // 카카오 로그인 성공시 서버에 전달할 데이터
      success: function (authObj) {
        // fetch(`${KAKAO_AUTH_URL}`, {
        //   method: "POST",
        //   body: JSON.stringify({
        //     access_token: authObj.access_token,
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((res) => {
        //     localStorage.setItem("Kakao_token", res.access_token);
        //     if (res.access_token) {
        //       alert("ArtRound에 오신걸 환영합니다");
        //       history.push("/visited");
        //     }
        //   });
        console.log(JSON.stringify(authObj));
      },
      fail: function (err) {
        console.log(JSON.stringify(err));
      },
    });
  };

  return (
    <div>
      <button className="btn-kakao" onClick={kakaoLoginClickHandler}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="242"
          alt="kakao-btn-img"
        />
      </button>
    </div>
  );
}
