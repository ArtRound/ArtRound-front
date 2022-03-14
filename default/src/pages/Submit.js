import React, { useContext, useState } from "react";
import "./ReviewList.css";
import ReviewNav from "../components/ReviewNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Heart from "../components/Heart";
import { Context } from "../context";

function Review() {
  const { state } = useContext(Context);
  const user_id = useSelector((state) => state.infoReducer.id);
  const [submitData, setSubmitData] = useState({
    title: state.fcltyNm,
    content: "",
    user_id: user_id,
    heart: 0,
    art_info_id: state.art_id,
  });

  const axiosPostData = (e) => {
    if (submitData.content) {
      axios
        .post(`http://localhost:8000/main/art_info/${state.art_id}/review/`, {
          title: submitData.title,
          content: submitData.content,
          user_id: submitData.user_id,
          heart: submitData.heart,
          art_info_id: submitData.art_info_id,
        })
        .then((res) => {
          console.log("axios success ", res.data);
        })
        .catch((error) => {
          console.log("axios error ", error.response);
        });
    } else {
      alert("후기를 작성해주세요");
      e.preventDefault();
    }
  };

  return (
    <div>
      <ReviewNav title={submitData.title} />
      <p className="review">후기를 남겨주세요</p>
      <div className="review-heart">
        <Heart readOnly={false} setSubmitData={setSubmitData} />
      </div>

      <hr />
      <div className="review-wrap">
        <input
          type="text"
          placeholder="후기를 남겨주세요."
          className="review-textfield"
          onChange={(e) => {
            setSubmitData((prev) => {
              return { ...prev, content: e.target.value };
            });
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
