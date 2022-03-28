import React from "react";
import "./NotFoundPage.css"

const NowFoundPage = () => {
    console.log("not found page")
  return (
    <>
      <div class="face">
        <div class="band">
          <div class="red"></div>
          <div class="white"></div>
          <div class="blue"></div>
        </div>
        <div class="eyes"></div>
        <div class="dimples"></div>
        <div class="mouth"></div>
      </div>

      <h1>Oops! Something went wrong!</h1>
      <div class="btn">Return to Home</div>
    </>
  );
};

export default NowFoundPage;
