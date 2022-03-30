import React, { useState, useEffect, useContext } from "react";
import "./UserVisited.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { ADD_DATA } from "../context/actionTypes";
import { Context } from "../context/index";
import { useSelector } from "react-redux";

const UserFavorite = ({ history }) => {
  const user_id = useSelector((state) => state.infoReducer.id);
  const [text, setText] = useState([]);
  function GetFavortie() {
    useEffect(() => {
      axios
        .get(`http://127.0.0.1:8000/main/favorites/${user_id}`)
        .then((response) => {
          setText([...response.data]);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [user_id]);
  }

  const { dispatch } = useContext(Context);

  const setContext = (title, art_info_id) => {
    dispatch({
      type: ADD_DATA,
      payload: {
        art_id: art_info_id,
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
                <Link to="/review">
                  <div
                    className="visited-name"
                    onClick={() => setContext(f.title, f.art_info_id)}
                  >
                    {f.title}
                  </div>
                </Link>
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
