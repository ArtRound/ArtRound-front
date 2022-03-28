import React from "react";
import { Accordion } from "react-bootstrap";

import axios from "axios";
import { Link } from "react-router-dom";
import AnswerAxios from "./AnswerAxios";

const AnswerContainer = ({ text, setText }) => {
  let question_id = 0;

  return (
    <div id="cont2" className="answer">
      <div className="answerFrame">
        {text.map((e) => (
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="title">
                  <div className="questionState">답변대기</div>
                  <div className="titleGroup">
                    <div className="qnaTitle">{e.title} &nbsp; </div>
                    <div className="questionDate">{e.updated_at}</div>
                  </div>
                </Accordion.Header>

                <Accordion.Body className="answerBody">
                  <div className="questionContent">{e.content}</div>

                  <button
                    className="btnDelete"
                    onClick={() => {
                      axios.delete(
                        `http://127.0.0.1:8000/main/question/${e.id}`
                      );
                      setText(text.filter((text) => text.id !== e.id));
                    }}
                  >
                    삭제
                  </button>
                  {(question_id = e.id)}
                  <button className="btnDelete">
                    {" "}
                    <Link
                      to={{
                        pathname: "/answerpost",
                        state: { question_id: question_id },
                      }}
                    >
                      답변하기{" "}
                    </Link>
                  </button>

                  <div className="answer">
                    {/* 답변 */}
                    <AnswerAxios questionId={e.id} />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr className="answerHr" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerContainer;
