import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./noticePost.css";

const answerPost = ({ history, location }) => {
  const question_id = location.state.question_id;

  function answerInput() {
    var getContent = document.getElementById("content").value;
    axios
      .post("http://127.0.0.1:8000/main/answer/", {
        question_id: question_id,
        content: getContent,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="screenPost">
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <nav>
        <button
          onClick={() => {
            history.push("/contactus");
          }}
          className="noboot-btn"
        >
          ⬅
        </button>
        <span>답변 작성</span>
      </nav>
      <div className="Frame">
        <form>
          <textarea
            id="content"
            className="inputContent"
            placeholder="내용을 입력해주세요."
          />
        </form>

        <Link to="/contactus">
          {" "}
          <button type="button" className="post" onClick={answerInput}>
            답변 등록하기
          </button>{" "}
        </Link>
      </div>{" "}
      {/* Frame */}
    </div> /* screenPost*/
  );
};

export default answerPost;
