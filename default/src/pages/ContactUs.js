import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./ContactUs.css";
import AnswerContainer from "./AnswerContainer";
import QuestionContainer from "./QuestionContainer";
import { useSelector } from "react-redux";

const ContactUs = ({ history }) => {
  const user_id = useSelector((state) => state.infoReducer.id);
  const [text, setText] = useState([]);
  const [answerToggle, setAnswerToggle] = useState(false);
  const [questionToggle, setQuestionToggle] = useState(true);

  function questionInput() {
    var getUseremail = document.getElementById("qnaUseremail").value;
    var getType = document.getElementById("qnaType").value;
    var getTitle = document.getElementById("qnaTitle").value;
    var getContent = document.getElementById("qnaContent").value;
    console.log(getUseremail);
    console.log(getType);
    console.log(getTitle);
    console.log(getContent);

    axios
      .post("http://localhost:8000/main/question/", {
        user_id: user_id,
        type: getType,
        title: getTitle,
        content: getContent,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    <Link to="/contactus"></Link>;
  }

  function getAnswer() {
    axios
      .get("http://127.0.0.1:8000/main/question/")
      .then((response) => {
        setText([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function clickQue() {
    document.getElementById("queBtn").className = "clickBtn";
    document.getElementById("ansBtn").className = "qnaBtn";
  }
  function clickAns() {
    document.getElementById("ansBtn").className = "clickBtn";
    document.getElementById("queBtn").className = "qnaBtn";
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css?after"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossorigin="anonymous"
      />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <nav>
        <button
          onClick={() => {
            history.push("/service");
          }}
          className="noboot-btn"
        >
          ⬅
        </button>
        <span>문의</span>
      </nav>
      <div className="contactFrame">
        <button
          id="queBtn"
          className="clickBtn"
          onClick={() => {
            setAnswerToggle(false);
            setQuestionToggle(true);
            clickQue();
          }}
        >
          문의하기
        </button>
        <button
          id="ansBtn"
          className="qnaBtn"
          onClick={() => {
            setQuestionToggle(false);
            setAnswerToggle(true);
            getAnswer();
            clickAns();
          }}
        >
          문의내역 확인
        </button>

        {questionToggle && <QuestionContainer textInput={questionInput} />}
        {answerToggle && <AnswerContainer text={text} setText={setText} />}
      </div>{" "}
      {/* Contact Frame */}
    </div>
  );
};

export default ContactUs;
