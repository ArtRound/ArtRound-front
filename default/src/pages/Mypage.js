import React, { useEffect, useState } from "react";
import "./Mypage.css";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
const MyPage = ({ history }) => {
  let user_id = useSelector((state) => state.infoReducer.id);
  let profile_image = useSelector((state) => state.infoReducer.profile_image);

  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    name: "",
    age: 0,
    gender: "",
  });

  const userInfoHandler = (response) => {
    const data = response.data["0"];
    setUserInfo((prevState) => {
      return {
        ...prevState,
        name: data["name"],
        age: data["age"],
        gender: data["gender"],
      };
    });
  };

  const onGoBack = () => {
    history.goBack();
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/main/get_info/${user_id}`)
      .then((response) => {
        userInfoHandler(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user_id]);

  const logout = () => {
    dispatch({
      type: "logout",
      payload: {
        id: false,
        profile_image: false,
      },
    });

    history.push("/");
  };
  return (
    <>
      <nav>
        <button className="back-btn" onClick={onGoBack}>
          ⬅
        </button>
        <span>마이페이지</span>
      </nav>

      <div className="container">
        <div className="profile-box">
          {profile_image === "" ? (
            <p className="photo-circle">📷</p>
          ) : (
            <img
              src={profile_image}
              alt="profile_image"
              className="photo-circle"
            />
          )}
          <p className="name">{userInfo.name}</p>
          <p className="age">{userInfo.age}세</p>
          {userInfo.gender === "female" ? (
            <p className="gender_print">여자</p>
          ) : (
            <p className="gender_print">남자</p>
          )}
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              history.push("/map");
            }}
            className="artlist-btn"
          >
            미술관/박물관 목록
          </button>

          <button
            onClick={() => {
              history.push("/favorite");
            }}
            className="fav-btn"
          >
            즐겨찾기 목록
          </button>
          <button
            onClick={() => {
              history.push("/service");
            }}
            className="info-btn"
          >
            고객센터
          </button>
          <button
            onClick={() => {
              history.push("/visited");
            }}
            className="visited-btn"
          >
            방문한 미술관/박물관
          </button>
        </div>
        <div className="small-buttons">
          <button className="logout" onClick={logout}>
            로그아웃
          </button>
          <span> / </span>
          <button className="withdrawal">회원탈퇴</button>
        </div>
      </div>
    </>
  );
};

export default MyPage;
