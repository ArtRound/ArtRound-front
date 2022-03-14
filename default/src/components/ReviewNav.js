import React from "react";
import "../pages/ReviewList.css";
import { Link, useHistory } from "react-router-dom";
import { FaMapMarkedAlt, FaArrowLeft } from "react-icons/fa";

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
        <Link to="/map">
          <FaMapMarkedAlt className="map-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ReviewNav;
