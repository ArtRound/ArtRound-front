import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AnswerAxios.css";
import checkIcon from "../img/notice/check_icon.png";

const AnswerAxios = (props) => {
  const [text, setText] = useState([]);
  const questionId = props.questionId;

  function GetQnaAnswer() {
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/main/answer/")
        .then((response) => {
          setText([...response.data]);
          //console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  }

  return (
    <div>
      {GetQnaAnswer()}
      {text.map((e) => (
        <div>
          {e.question_id === questionId && (
            <div className="realAnswerFrame">
              <hr />

              <div className="answer">
                <img src={checkIcon} alt="check" className="checkIcon" />
                답변
              </div>
              <div className="questionDate">{e.updated_at}</div>
              <br />

              <div className="questionContent">{e.content}</div>
              <br />
              <button
                className="AnswerbtnDelete"
                onClick={() => {
                  axios.delete(`http://127.0.0.1:8000/main/answer/${e.id}`);
                  setText(text.filter((text) => text.id !== e.id));
                }}
              >
                삭제
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnswerAxios;
