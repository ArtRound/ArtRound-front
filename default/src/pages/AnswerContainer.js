import React from 'react';
import { Accordion } from 'react-bootstrap';
import checkIcon from '../img/notice/check_icon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AnswerAxios from './AnswerAxios';

const AnswerContainer = ({ text, setText }) => {

  return (
    <div id="cont2" className="answer">
      <div className="answerFrame" >
        {text.map((e) => (
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="title">
                  <div className="questionState">
                    답변대기
                  </div>
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
                      axios.delete(`http://127.0.0.1:8000/main/question/${e.id}`);
                      setText(text.filter((text) => text.id !== e.id));
                    }}
                  >
                    삭제
                  </button>

                  <button className="btnDelete"> <Link to="/answerpost">답변하기</Link> </button>

                  <hr />

                  <div className="answer">
                    <img src={checkIcon} alt="check" className="checkIcon" />
                    답변
                  </div>

                  <div className="answer">
                    {/* 답변 */}
                    <AnswerAxios />
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