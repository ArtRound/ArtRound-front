import React, { useState } from "react";
import "./UserVisited.css";
import title_img from "../img/exhibition_sample_img.png";

const UserVisited = ({ history }) => {
  const [ing, setIng] = useState(true);

  function display_state() {
    if (true) {
      // 전시 중이면 useState -> false로 바꾸기 
    } else {

    }
  }

  return <div>
    <nav>
      <button
        onClick={() => {
          history.push("/");
        }}
        className="back-btn"
      >⬅</button>
      <span>방문한 미술관/전시회</span>
    </nav>

    <div className="visited-container">
      <div className="user-visited">
        <div className="art-around">Art Around</div>
        <div className="user-name">반유진</div>
      </div>  {/* user-visited */}

      <div className="list-visited">
        <img className="visited-img" src={title_img} alt="exhibition" />

        {ing && <div id="display" className="display-ing">
          <i class="fas fa-circle"></i>
          <div className="end">전시중</div>
        </div>}

        {!ing && <div id="display" className="display-end">
          <i class="fas fa-circle"></i>
          <div className="end">전시종료</div>
        </div>}

        <div className="visited-name">피카소 미술관</div>
        <div className="visited-detail">부경대 다래락</div>
        <div className="visited-detail">2021.08.07 ~ 2021.09.15</div>
      </div> {/* list-visited */}
    </div>  {/* visited-container */}

  </div>;
};

export default UserVisited;
