import React, { useState } from "react";
import "./ReviewList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as fasFaThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farFaThumbsUp } from "@fortawesome/free-regular-svg-icons";
import ReviewNav from "../components/ReviewNav";
import Heart from "../components/Heart";
import { Link } from "react-router-dom";

function ReviewList() {
  return (
    <div>
      <ReviewNav navTitle={"후기 목록"} />

      <div className="review-title">피카소 미술관</div>
      <hr />
      <div className="category">
        <span className="new" onClick={() => {}}>
          최신순
        </span>
        <span className="high" onClick={() => {}}>
          평점 높은 순
        </span>
        <span onClick={() => {}} className="low">
          평점 낮은 순
        </span>
      </div>

      <div className="list-wrap">
        <Heart count={3} />
        <div>
          <span className="list-title">디자인도둑</span>
          <span className="list-date">2022-02-17</span>
        </div>
        <p className="list-content">
          청춘은 평화스러운 물방아 그들은 운다. 그러므로 공자는 역사를 같지 바로
          눈이 것이다. 천고에 심장은 풀이 할지니, 피다. 가진 열락의 밝은 사랑의
          놀이 없으면, 있는 있다. 하는 그들은 그러므로 것이다. 든 이는 아니더면,
          청춘 새가 청춘 아니다.
        </p>
        <ThumnsUp />
        <hr />
      </div>
      <div className="list-wrap">
        <Heart count={3} />
        <div>
          <span className="list-title">디자인도둑</span>
          <span className="list-date">2022-02-17</span>
        </div>
        <p className="list-content">
          청춘은 평화스러운 물방아 그들은 운다. 그러므로 공자는 역사를 같지 바로
          눈이 것이다. 천고에 심장은 풀이 할지니, 피다. 가진 열락의 밝은 사랑의
          놀이 없으면, 있는 있다. 하는 그들은 그러므로 것이다. 든 이는 아니더면,
          청춘 새가 청춘 아니다.
        </p>
        <ThumnsUp />
        <hr />
      </div>

      <div className="btn-wrap">
        <Link to="/submit">
          <button className="submit-btn">후기 작성하기</button>
        </Link>
      </div>
    </div>
  );
}

export default ReviewList;

function ThumnsUp() {
  let randomCount = Math.floor(Math.random() * 217);
  let [thumbsUp, setThumbsUp] = useState(false);
  let [count, setCount] = useState(randomCount);

  return (
    <div className="list-like">
      <span
        onClick={() => {
          setThumbsUp(!thumbsUp);
        }}
      >
        좋아요
      </span>

      {thumbsUp === true ? (
        <>
          <FontAwesomeIcon className="font-like" icon={fasFaThumbsUp} />
          <span>{count + 1}</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon className="font-like" icon={farFaThumbsUp} />
          <span>{count}</span>
        </>
      )}
    </div>
  );
}
