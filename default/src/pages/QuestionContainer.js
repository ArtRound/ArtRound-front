import React from "react";

const QuestionContainer = (props) => {
  return (
    <div id="cont1" className="question">
      <div className="questionFrame">
        <div className="smalltitle">문의하기</div>
        <div className="smallcontent">
          문의 유형과 서비스 구분을 입력해주시면 보다 상세하고 정확한 답변을
          받으실 수 있습니다.{" "}
        </div>
        <select id="qnaType" name="qnaType" size="1" className="qnaType">
          <option value="report"> 장애신고 </option>
          <option value="login"> 회원/로그인 </option>
          <option value="use"> 사이트 이용 </option>
          <option value="proposal"> 서비스 제안 </option>
          <option value="etc"> 기타 </option>
        </select>

        <form>
          <input
            type="text"
            className="inputQnaTitle"
            id="qnaTitle"
            placeholder="제목을 입력해주세요."
          />
          <textarea
            id="qnaContent"
            className="inputQnaContent"
            placeholder="문의 내용을 입력헤주세요."
          />
        </form>

        <button
          type="button"
          className="post"
          onClick={() => {
            props.textInput();
            window.location.reload();
          }}
        >
          문의하기
        </button>
      </div>
    </div>
  );
};

export default QuestionContainer;
