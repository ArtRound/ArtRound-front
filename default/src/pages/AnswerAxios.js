import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AnswerAxios.css";

const AnswerAxios = () => {
  const [text, setText] = useState([]);
  function GetQnaAnswer() {
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/main/answer/")
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
      {GetQnaAnswer()}
      {text.map((e) => (
        <div>
          <div className="realAnswerFrame">
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
          </div>{" "}
          {/* answerFrame */}
        </div>
      ))}
    </div>
  );
};

export default AnswerAxios;
