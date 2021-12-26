import React from 'react';
import { Link } from 'react-router-dom';
import "./Information.css";

const information = () => {
  return (
    <div className="infoFrame">
      <div className="artRound">ArtROUND</div>

      <div className="form">
        <div className="title">정보 입력</div>
        <div className="content">사용자의 정보를 입력해주세요. </div>
        <input type='text' className="inputname" id="username" placeholder='이름을 입력해주세요.' />
        <select id="Type" name="gender" size="1" className="gender">
          <option value="report"> 성별 </option>
          <option value="report"> 여자 </option>
          <option value="login"> 남자 </option>
        </select>
        <input type='int' className="inputage" id="userage" placeholder='나이를 입력해주세요.' />

        {/* 버튼 누르면 리덕스로 정보 넘기기 */}
        <Link to="/map"> <button type="button" className="input-info" >
          입력하기
        </button> </Link>
      </div>
    </div >
  );
};

export default information;