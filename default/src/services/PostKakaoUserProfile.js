const PostKakaoUserProfile = (id, name, gender, age, profile_image) => {
  console.log(id, name, age, gender, profile_image);
  fetch("http://localhost:8000/main/add_info/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      params: {
        id: id,
        name: name,
        gender: gender,
        age: age,
        profile_image: profile_image,
      },
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default PostKakaoUserProfile;
