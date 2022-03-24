import React, { useState, useEffect } from "react";
import "./UserVisited.css";
import axios from "axios";

const UserFavorite = ({ history }) => {
  const [text, setText] = useState([]);
  function GetFavortie() {
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/main/favorites/")
        .then((response) => {
          setText([...response.data]);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  }

  return (
    <div>
      {GetFavortie()} {/* 함수로 axios.get 불러옴 */}
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
        </div>{" "}
        {/* user-visited */}
        <div className="list-visited">
          {text.map((f) => {
            return (
              <div key={f.id} className="fav">
                <div className="visited-name">{f.title}</div>
                <div className="visited-detail">{f.content}</div>
                <div className="visited-detail">
                  {f.start_time} {f.end_time}
                </div>

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
