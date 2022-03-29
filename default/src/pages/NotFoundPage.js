import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-face">
        <div className="not-found-band">
          <div className="not-found-red"></div>
          <div className="not-found-white"></div>
          <div className="not-found-blue"></div>
        </div>
        <div className="not-found-eyes"></div>
        <div className="not-found-dimples"></div>
        <div className="not-found-mouth"></div>
      </div>

      <h1 className="not-found-comment">Oops! Something went wrong!</h1>
      <Link style={{ textDecoration: "none" }} to="/">
        <button className="not-found-btn">Return to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
