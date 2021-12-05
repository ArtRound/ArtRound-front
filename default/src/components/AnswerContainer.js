import React from 'react';
import { Accordion } from 'react-bootstrap';
import checkIcon from '../img/notice/check_icon.png';

const AnswerContainer = (props) => {
  return (
    <div id="cont2" className="answer">
      <div className="answerFrame" >
        {props.text.map((e) => (
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="title">
                  <div className="questionState">
                    답변대기
                  </div>
                  <div className="titleGroup">
                    <div className="qnaTitle">{e.title} &nbsp; </div>
                    <div className="questionDate">2021.03.23</div>
                  </div>
                </Accordion.Header>

                <Accordion.Body className="answerBody">
                  <div className="questionContent">{e.content}</div>

                  <div className="answer">
                    <img src={checkIcon} alt="check" className="checkIcon" />
                    답변
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