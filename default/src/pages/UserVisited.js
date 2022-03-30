import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "./UserVisited.css";
import { Link } from "react-router-dom";
import { ADD_DATA } from "../context/actionTypes";
import { Context } from "../context/index";
import { useSelector } from "react-redux";

const UserVisited = ({ history }) => {
  // const [ing, setIng] = useState(true);
  // function display_state() {
  //   if (true) {
  //     // 전시 중이면 useState -> false로 바꾸기
  //   } else {

  //   }
  // }

  const { dispatch } = useContext(Context);

  const setContext = (title) => {
    dispatch({
      type: ADD_DATA,
      payload: {
        // art_id: infoBoxData.id, -> 백에서 받아서 넣기
        fcltyNm: title,
        weekdayOperOpenHhmm: "",
        weekdayOperColseHhmm: "",
        holidayOperOpenHhmm: "",
        holidayCloseOpenHhmm: "",
        rstdeInfo: "",
        adultChrge: "",
        yngbgsChrge: "",
        childChrge: "",
        rdnmadr: "",
        phoneNumber: "",
        homepageUrl: "",
        latitude: "",
        longitude: "",
      },
    });
  };

  const [text, setText] = useState([]);  
  const user_id = useSelector((state) => state.infoReducer.id);

  function GetVisited() {
    useEffect(() => {
      axios
        .get(`http://127.0.0.1:8000/main/visited/${user_id}`)
        .then((response) => {
          setText([...response.data]);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [user_id]);
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
            console.log("art_info_id 확인 ", f);
            return (
              <div key={f.id} className="fav">
                <Link to="/review">
                  {/* title이랑 art_info_id 보내기 */}
                  <div
                    className="visited-name"
                    onClick={() => setContext(f.title)}
                  >
                    {f.title}
                  </div>
                </Link>
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
