import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UserVisited.css";

const UserVisited = ({ history }) => {
  // const [ing, setIng] = useState(true);
  // function display_state() {
  //   if (true) {
  //     // 전시 중이면 useState -> false로 바꾸기
  //   } else {

  //   }
  // }

  const [text, setText] = useState([]);
  function GetVisited() {
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/main/visited/")
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
      {GetVisited()} {/* 함수로 axios.get 불러옴 */}
      <nav>
        <button
          onClick={() => {
            history.push("/");
          }}
          className="back-btn"
        >
          ⬅
        </button>
        <span>방문한 전시회</span>
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
                <div className="visited-detail">{f.address}</div>
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

export default UserVisited;
