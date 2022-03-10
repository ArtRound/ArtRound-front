import React from "react";
import "../pages/ReviewList.css";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const Heart = (props) => {

  return (
    <>
      {props.readOnly === true ? (
        <StyledRating
          name="customized-color"
          defaultValue={props.count}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          size="midium"
          readOnly
          style={{ paddingBottom: 15 }}
        />
      ) : (
        <StyledRating
          name="customized-color"
          defaultValue={0}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          size="large"
          onChange={(value) => {
            props.setSubmitData((prev) => {
              return { ...prev, heart: value.target.value };
            });
          }}
        />
      )}
    </>
  );
};

export default Heart;
