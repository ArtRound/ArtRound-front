import axios from "axios";

export async function postKakaoUserProfile(
  access_token, 
  id, 
  username, 
  gender, 
  age
) {
  console.log(access_token, id, username, age, gender);
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
        id: id,
        name: username,
        age: age,
        gender: gender,
      },
    }),
  });
}
