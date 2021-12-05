import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import './Notice.css';



const Notice = ({ history }) => {
  const [text, setText] = useState([]);

  function getNotice() {
    axios.get("http://127.0.0.1:8000/review/")
      .then((response) => {
        setText([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="screen">
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
        >⬅</button>
        <span>공지사항</span>
        <button className="postBtn"><Link to="/noticepost"> 글쓰기 </Link></button>
      </nav>


      <div className="noticeFrame" >
        {getNotice()} {/* 함수로 axios.get 불러옴 */}
        {text.map((e) => (
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="title">{e.title} &nbsp;</Accordion.Header>
                <Accordion.Body>
                  {e.content}
                  <br />
                  <button
                    className="btnDelete"
                    onClick={() => {
                      axios.delete(`http://127.0.0.1:8000/review/${e.id}`);
                      setText(text.filter((text) => text.id !== e.id));
                    }}
                  >
                    삭제
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr />

            {/* <span>{e.updated_at}<br/></span>
                  <span>{e.title}<br/></span>
                  <span>{e.content}</span> */}
          </div>
        ))}

      </div>   {/* Notice Frame */}
    </div>  /* screen */
  );
};

export default Notice;

