import axios from "axios";

export async function postKakaoUserProfile(
  access_token,
  username,
  age,
  gender
) {
  console.log(access_token, username, age, gender);
  await fetch("http://localhost:8000/main/login/kakao/finish/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      params: {
        code: access_token,
        name: username,
        age: age,
        gender: gender,
      },
    }),
  });
}
