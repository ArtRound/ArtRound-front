import React, { useContext, useEffect, useState } from "react";
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
import { Context } from "../context";
import { Modal } from "../components/Modal";

function ReviewList() {
  const { state } = useContext(Context);

  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewData, setReviewData] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");

  const getReviewData = async () => {
    const reviewResult = await axios.get(
      `http://localhost:8000/main/art_info/${state.art_id}/review/`
    );
    setReviewData(reviewResult.data);
    setReviewLoading(true);
  };
  const fixUpdated_at = (date) => date.match(/\d{4}-\d{2}-\d{2}/);

  const sortLastest = () => {
    setReviewData((prev) => {
      prev.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
      return [...prev];
    });
  };

  const sortOldest = () => {
    setReviewData((prev) => {
      prev.sort((a, b) => {
        return new Date(a.updated_at) - new Date(b.updated_at);
      });
      return [...prev];
    });
  };

  const sortHighHeart = () => {
    setReviewData((prev) => {
      prev.sort((a, b) => {
        return b.heart - a.heart;
      });
      return [...prev];
    });
  };

  const sortLowHeart = () => {
    setReviewData((prev) => {
      prev.sort((a, b) => {
        return a.heart - b.heart;
      });
      return [...prev];
    });
  };

  const previewImage = (e) => {
    setCurrentSrc(e.target.currentSrc);
    setModalShow(true);
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <>
      {reviewLoading === true ? (
        <div>
          <ReviewNav title={state.fcltyNm} />
          <hr />
          <div className="category">
            <span className="new" onClick={sortLastest}>
              최신순
            </span>
            <span className="new" onClick={sortOldest}>
              오래된순
            </span>
            <span className="high" onClick={sortHighHeart}>
              평점 높은 순
            </span>
            <span className="low" onClick={sortLowHeart}>
              평점 낮은 순
            </span>
          </div>

          {reviewData.map((item) => {
            return (
              <div className="list-wrap" key={nanoid()}>
                <Heart count={item.heart} readOnly={true} />
                <div className="list-box">
                  <span className="list-title">{item.user_id}</span>
                  <span className="list-date">
                    {fixUpdated_at(item.updated_at)}
                  </span>
                  <p className="list-content">{item.content}</p>
                  <div className="review-images-container">
                    {item.image.map((src) => {
                      let imageUrl = "http://localhost:8000" + src.image;
                      return (
                        <>
                          <img
                            src={imageUrl}
                            alt="이미지"
                            className="review-images"
                            onClick={previewImage}
                          />
                          {modalShow && (
                            <Modal
                              setModalShow={setModalShow}
                              imageUrl={currentSrc}
                            />
                          )}
                        </>
                      );
                    })}
                  </div>
                  <ThumnsUp />
                </div>
                <hr />
              </div>
            );
          })}

          <div className="btn-wrap">
            <Link to="/submit">
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
        <div
          className="list-like"
          style={{ color: "#2662BB", opacity: "100%" }}
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
          style={{ opacity: "60%" }}
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
          <span style={{ color: "#2662BB" }}>{count}</span>
        </div>
      )}
    </>
  );
}
