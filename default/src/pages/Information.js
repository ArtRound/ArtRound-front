import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postKakaoUserProfile } from "../services/AuthService";
import "./Information.css";
import { useDispatch, useSelector } from "react-redux";

const Information = ({ history }) => {
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.infoReducer.access_token);
  const id = useSelector((state) => state.infoReducer.id);

  useEffect(() => {
    console.log(access_token);
  }, [access_token]);

  const [data, setData] = useState({
    username: "",
    gender: "남자",
    age: 1,
  });

  async function onSubmit(e) {
    e.preventDefault();

    // 리덕스에 추가 정보 저장
    const payload = {
      username: data.username,
      gender: data.gender,
      age: data.age,
      detail_info: true,
    };

    dispatch({
      type: "login",
      payload: payload,
    });

    // 서버에 추가 정보 저장
    const res = await postKakaoUserProfile(id, data.username, data.gender, data.age);
    console.log(res)

    res !== null ? history.push("/mypage") : alert("정보 입력 실패");
  }

  function changeInput(e) {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "username":
        setData({
          ...data,
          username: value,
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
          name="username"
          id="username"
          placeholder="이름을 입력해주세요."
          value={data.username}
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
