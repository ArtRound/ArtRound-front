import React, { useState } from "react";
import "./ReviewList.css";
import ReviewNav from "../components/ReviewNav";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";

function Review() {
  let dispatch = useDispatch();
  let today = new Date();
  let currenrDate =
    today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate();

  let [reviewData, setReviewData] = useState("");

  let [heartCount, setHeartCount] = useState(0);

  return (
    <div>
      <ReviewNav navTitle={"후기 등록"} />
      <div className="review-title">피카소 미술관</div>
      <p className="review">후기를 남겨주세요</p>

      {/* <form className="review-form"> */}
      <div className="review-heart">
        <ReviewHeart heartCount={heartCount} setHeartCount={setHeartCount} />
        <ReviewHeart heartCount={heartCount} setHeartCount={setHeartCount} />
        <ReviewHeart heartCount={heartCount} setHeartCount={setHeartCount} />
        <ReviewHeart heartCount={heartCount} setHeartCount={setHeartCount} />
        <ReviewHeart heartCount={heartCount} setHeartCount={setHeartCount} />
      </div>

      <hr />
      <div className="review-wrap">
        <input
          type="text"
          placeholder="후기를 남겨주세요."
          className="review-textfield"
          onChange={(e) => {
            setReviewData(e.target.value);
          }}
        />
        <div className="review-file-wrap">
          <label className="review-file-label" for="review-file">
            📷 사진 추가하기
          </label>
          <input type="file" multiple id="review-file" />
        </div>
        <Link to="/review">
          <button
            className="submit-btn review-btn"
            onClick={() => {
              dispatch({
                type: "add",
                payload: {
                  heart: heartCount,
                  name: "상상상",
                  date: currenrDate,
                  content: reviewData,
                  img: null,
                },
              });
            }}
          >
            등록하기
          </button>
        </Link>
      </div>
      {/* </form> */}
    </div>
  );
}

export default Review;

function ReviewHeart(props) {
  let [colorState, setColorState] = useState(false);

  return (
    <div>
      {colorState === true ? (
        <>
          <FontAwesomeIcon
            icon={fasFaHeart}
            className="click-heart"
            size={"3x"}
            onClick={() => {
              setColorState(!colorState);
              props.setHeartCount(props.heartCount - 1);
            }}
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={farFaHeart}
            className="unclick-heart"
            size={"3x"}
            onClick={() => {
              setColorState(!colorState);
              props.setHeartCount(props.heartCount + 1);
            }}
          />
        </>
      )}
    </div>
  );
}
