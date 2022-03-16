import React, { useState } from "react";
import "./UserVisited.css";
import title_img from "../img/exhibition_sample_img.png";
import { useSelector } from "react-redux";
import axios from "axios";

const UserFavorite = ({ history }) => {
  const [text, setText] = useState([]);
  function getFavortie() {
    axios
      .get("http://127.0.0.1:8000/main/favorites/")
      .then((response) => {
        setText([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      {getFavortie()} {/* 함수로 axios.get 불러옴 */}
      <nav>
        <button
          onClick={() => {
            history.push("/");
          }}
          className="back-btn"
        >
          ⬅
        </button>
        <span>즐겨찾기 목록</span>
      </nav>
      <div className="visited-container">
        <div className="user-visited">
          <div className="art-around">ArtROUND</div>
          <div className="user-name">반유진</div>
        </div>{" "}
        {/* user-visited */}
        <div className="list-visited">
          {text.map((f) => {
            return (
              //fav 자체를 버튼으로 만들고 이걸 detail페이지랑 연결하기
              //detail에서 이름, 시간, 주소 복사할 때 해당 key값도 같이 복사해서 연결하기...
              <div className="fav">
                <div className="visited-name">{f.title}</div>
                <div className="visited-detail">{f.content}</div>
                <div className="visited-detail">{f.start_time}</div>
                <div className="visited-detail">{f.end_time}</div>
                <hr />
              </div>
            );
          })}
        </div>{" "}
        {/* list-visited */}
      </div>{" "}
      {/* visited-container */}
    </div>
  );
};

export default UserFavorite;
