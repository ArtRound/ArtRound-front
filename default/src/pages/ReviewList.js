import React, { useEffect, useState } from "react";
import "./ReviewList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as fasFaThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farFaThumbsUp } from "@fortawesome/free-regular-svg-icons";
import ReviewNav from "../components/ReviewNav";
import Heart from "../components/Heart";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { nanoid } from "nanoid";

function ReviewList(props) {
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewData, setReviewData] = useState([]);

  const getReviewData = () => {
    axios
      .get(
        `http://localhost:8000/main/art_info/${props.location.state.dataId}/review/`
      )
      .then((result) => {
        setReviewData(result.data);
        setReviewLoading(true);
      })
      .catch((error) => {
        console.log("axios error", error.response);
      });
  };
  const fixUpdated_at = (date) => date.match(/\d{4}-\d{2}-\d{2}/);

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <>
      {reviewLoading === true ? (
        <div>
          <ReviewNav navTitle={"후기 목록"} />

          <div className="review-title">{props.location.state.dataTitle}</div>
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

          {reviewData.map((item, index) => {
            return (
              <div className="list-wrap" key={nanoid()}>
                <Heart count={item.heart} />
                <div>
                  <span className="list-title">{item.user_id}</span>
                  <span className="list-date">
                    {fixUpdated_at(item.updated_at)}
                  </span>
                </div>
                <p className="list-content">{item.content}</p>
                <ThumnsUp />
                <hr />
              </div>
            );
          })}

          <div className="btn-wrap">
            <Link
              to={{
                pathname: "/submit",
                state: {
                  submitId: props.location.state.dataId,
                  submitTitile: props.location.state.dataTitle,
                },
              }}
            >
              <button className="submit-btn">후기 작성하기</button>
            </Link>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ReviewList;

function ThumnsUp() {
  let randomCount = Math.floor(Math.random() * 217);
  let [thumbsUp, setThumbsUp] = useState(false);
  let [count, setCount] = useState(randomCount);

  return (
    <>
      {thumbsUp === true ? (
        <div className="list-like">
          <span
            onClick={() => {
              setThumbsUp(!thumbsUp);
            }}
          >
            좋아요
          </span>
          <FontAwesomeIcon
            className="font-like"
            icon={fasFaThumbsUp}
            onClick={() => {
              setThumbsUp(!thumbsUp);
            }}
          />
          <span>{count + 1}</span>
        </div>
      ) : (
        <div
          className="list-like"
          onClick={() => {
            setThumbsUp(!thumbsUp);
          }}
        >
          <span
            onClick={() => {
              setThumbsUp(!thumbsUp);
            }}
          >
            좋아요
          </span>
          <FontAwesomeIcon
            className="font-like"
            icon={farFaThumbsUp}
            onClick={() => {
              setThumbsUp(!thumbsUp);
            }}
          />
          <span>{count}</span>
        </div>
      )}
    </>
  );
}
