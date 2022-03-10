import React, { useState } from "react";
import "./ReviewList.css";
import ReviewNav from "../components/ReviewNav";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useSelector } from "react-redux";

function Review(props) {
  let dispatch = useDispatch();
  let today = new Date();
  let [reviewData, setReviewData] = useState("");

  let [heartCount, setHeartCount] = useState(0);

  const [postData, setPostData] = useState(null);
  let user_id = useSelector((state) => state.infoReducer.id);
  let art_info_id = props.location.state.submitId;

  const axiosPostData = () => {
    axios
      .post(`http://localhost:8000/main/art_info/${art_info_id}/review/`, {
        title: "test",
        content: "artround content",
        user_id: user_id,
        heart: "3",
        art_info_id: art_info_id,
      })
      .then((res) => {
        setPostData(res.data);
      })
      .catch((error) => {
        console.log("axios error ", error.response);
      });
  };

  return (
    <div>
      <ReviewNav navTitle={"후기 등록"} />
      <div className="review-title">피카소 미술관</div>
      <p className="review">후기를 남겨주세요</p>

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
          <button className="submit-btn review-btn" onClick={axiosPostData}>
            등록하기
          </button>
        </Link>
      </div>
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
