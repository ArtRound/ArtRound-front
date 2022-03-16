import React from "react";
import "../pages/ReviewList.css";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ReviewNav = (props) => {
  let history = useHistory();
  return (
    <div className="review-nav-container">
      <button
        className="back-btn"
        onClick={() => {
          history.goBack();
        }}
      >
        <FaArrowLeft />
      </button>
      <div className="review-nav-center">
        <span className="review-nav-title">{props.title}</span>
      </div>
    </div>
  );
};

export default ReviewNav;
