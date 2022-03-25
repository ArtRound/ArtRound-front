import React, { useContext, useState } from "react";
import "./ReviewList.css";
import ReviewNav from "../components/ReviewNav";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Heart from "../components/Heart";
import { Context } from "../context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

function Review() {
  const { state } = useContext(Context);
  const user_id = useSelector((state) => state.infoReducer.id);
  let history = useHistory();

  const [submitData, setSubmitData] = useState({
    title: state.fcltyNm,
    content: "",
    user_id: user_id,
    heart: 0,
    art_info_id: state.art_id,
  });

  const [imgBase64, setImgBase64] = useState([]); // 미리보기 이미지
  const [imgFile, setImgFile] = useState(null); // form으로 보낼 이미지
  const [showImgInput, setShowImgInput] = useState(false);

  const axiosPostData = async (e) => {
    e.preventDefault();
    if (submitData.content) {
      const formData = new FormData();
      formData.append("title", submitData.title);
      formData.append("content", submitData.content);
      formData.append("user_id", submitData.user_id);
      formData.append("heart", submitData.heart);

      if (imgFile !== null) {
        Object.values(imgFile).forEach((file) => {
          formData.append("image", file, file.name);
        });
      }
      await axios
        .post(
          `http://localhost:8000/main/art_info/${state.art_id}/review/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log("axios success ", res.data);
          history.push("/review");
        })
        .catch((error) => {
          console.log("axios error ", error.response);
        });
    } else {
      alert("후기를 작성해주세요");
      e.preventDefault();
    }
  };

  const handleChangeFile = (event) => {
    setImgFile(event.target.files);
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
            let base64Sub = base64.toString();
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
    setShowImgInput(true);
  };

  return (
    <div>
      <form onSubmit={axiosPostData}>
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
            {showImgInput === true ? (
              <Swiper spaceBetween={70} slidesPerView={2}>
                {imgBase64.map((item) => {
                  return (
                    <SwiperSlide>
                      <img
                        className="review-image"
                        src={item}
                        alt="Review images"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <>
                <label className="review-file-label" for="review-file">
                  📷 사진 추가하기
                </label>
                <input
                  type="file"
                  id="review-file"
                  onChange={handleChangeFile}
                  multiple="multiple"
                  accept="image/png, image/jpeg"
                />
              </>
            )}
          </div>
          <button type="submit" className="submit-btn review-btn">
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default Review;
