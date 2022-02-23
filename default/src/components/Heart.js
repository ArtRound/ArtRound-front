import React from "react";
import "../pages/ReviewList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";

const Heart = (props) => {
  let colorCount = Array.from({ length: props.count }, (v, i) => i);
  let uncoloredCount = Array.from({ length: 5 - props.count }, (v, i) => i);

  return (
    <div style={{ display: "flex" }}>
      {colorCount.map((v, i) => {
        return <ColorHeart />;
      })}
      {uncoloredCount.map((v, i) => {
        return <UncoloredHeart />;
      })}
    </div>
  );
};

export default Heart;

const ColorHeart = () => {
  return <FontAwesomeIcon icon={fasFaHeart} className="color-heart" />;
};

const UncoloredHeart = () => {
  return <FontAwesomeIcon className="uncolor-heart" icon={farFaHeart} />;
};
