const CLIENT_ID = "4cabd9184b71cb231252329034193534";
const REDIRECT_URI = "http://localhost:3000/main/login/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
