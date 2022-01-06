import axios from "axios";

export async function postKakaoUserProfile(
  id,
  username,
  gender,
  age
) {
  console.log(id, username, age, gender);
  await fetch("http://localhost:8000/main/add_info/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      params: {
        name: username,
        id: id,
        gender: gender,
        age: age,
      },
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.data === true) {
        console.log("true");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}