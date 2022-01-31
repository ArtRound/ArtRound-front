export async function postKakaoUserProfile(
  id,
  username,
  gender,
  age,
  profile_image
) {
  console.log(id, username, age, gender, profile_image);
  await fetch("http://localhost:8000/main/add_info/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      params: {
        name: username,
        id: id,
        gender: gender,
        age: age,
        profile_image: profile_image,
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
