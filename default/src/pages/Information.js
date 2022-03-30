import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Information.css";
import PostKakaoUserProfile from "../services/PostKakaoUserProfile";

const Information = ({ history }) => {
  const id = useSelector((state) => state.infoReducer.id);
  const profile_image = useSelector((state) => state.infoReducer.profile_image);

  const [data, setData] = useState({
    name: "",
    gender: "남자",
    age: 1,
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    // 서버에 추가 정보 저장
    const res = await PostKakaoUserProfile(
      id,
      data.name,
      data.gender,
      data.age,
      profile_image
    );

    res !== null ? history.push("/map") : alert("정보 입력 실패");
  };

  function changeInput(e) {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "name":
        setData({
          ...data,
          name: value,
        });
        break;
      case "gender":
        setData({
          ...data,
          gender: value,
        });
        break;
      case "age":
        setData({
          ...data,
          age: value,
        });
        break;
      default:
    }
  }

  return (
    <div className="infoFrame">
      <div className="artRound">ArtROUND</div>

      <div className="form">
        <div className="title">정보 입력</div>
        <div className="content">사용자의 정보를 입력해주세요. </div>
        <input
          type="text"
          className="inputname"
          name="name"
          id="name"
          placeholder="이름을 입력해주세요."
          value={data.name}
          onChange={changeInput}
        />
        <select
          id="Type"
          name="gender"
          size="1"
          className="gender"
          value={data.gender}
          onChange={changeInput}
        >
          <option value="report"> 성별 </option>
          <option value="female"> 여자 </option>
          <option value="male"> 남자 </option>
        </select>
        <input
          type="int"
          className="inputage"
          name="age"
          id="age"
          placeholder="나이를 입력해주세요."
          value={data.age}
          onChange={changeInput}
        />

        {/* 버튼 누르면 리덕스로 정보 넘기기 */}
        <Link to="/map">
          {" "}
          <button type="button" className="input-info" onClick={onSubmit}>
            입력하기
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Information;
