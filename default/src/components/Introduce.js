import React from 'react';
import './Introduce.css';

const Introduce = ({ history }) => {
  return (
    <div>

      <nav>
        <button
          onClick={() => {
            history.push("/service");
          }}
          className="noboot-btn"
        >⬅</button>
        <span>서비스 소개</span>
      </nav>

      <div className="introduce-Frame">
        서울로 상경한 송상한군 전시회를 보고싶은데 주변에 뭐를 하는지 몰라 난감해서 직접 만든 앱
      </div>
    </div>
  );
};

export default Introduce;