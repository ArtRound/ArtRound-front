import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './noticePost.css';

const noticePost = ({ history }) => {
  function textInput() {
    var getTitle = document.getElementById("title").value;
    var getContent = document.getElementById("content").value;
    axios.post("http://127.0.0.1:8000/review/", {
      title: getTitle,
      content: getContent,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    <Link to="/notice"></Link>
  }

  return (
    <div className="screenPost">
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <nav>
        <button
          onClick={() => {
            history.push("/notice");
          }}
          className="noboot-btn"
        >⬅</button>
        <span>공지사항 작성</span>
      </nav>

      <div className="Frame" >
        <form>
          <input type='text' className="inputTitle" id="title" placeholder='제목을 입력해주세요.' />

          <textarea id="content" className="inputContent" placeholder='내용을 입력헤주세요.' />
        </form>

        <Link to="/notice"> <button type="button" className="post" onClick={textInput}>
          등록하기
        </button> </Link>
      </div>  {/* Frame */}

    </div>  /* screenPost*/
  );
};

export default noticePost;