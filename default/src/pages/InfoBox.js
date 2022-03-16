import React, { useContext } from "react";
import "./InfoBox.css";
import artImg1 from "../img/art-image/art1.jpg";
import artImg2 from "../img/art-image/art2.jpg";
import artImg3 from "../img/art-image/art3.jpg";
import artImg4 from "../img/art-image/art4.jpg";
import artImg5 from "../img/art-image/art5.jpg";
import artImg6 from "../img/art-image/art6.jpg";
import artImg7 from "../img/art-image/art7.jpg";
import { Link } from "react-router-dom";
import { Context } from "../context/index";
import { ADD_DATA } from "../context/actionTypes";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle, FaRegFlag } from "react-icons/fa";

const InfoBox = (props) => {
  const { dispatch } = useContext(Context);
  const artImages = [
    artImg1,
    artImg2,
    artImg3,
    artImg4,
    artImg5,
    artImg6,
    artImg7,
  ];
  let rand = Math.floor(Math.random() * artImages.length);
  let artImage = artImages[rand];

  const setContext = () => {
    dispatch({
      type: ADD_DATA,
      payload: {
        art_id: props.infoBoxData.id,
        fcltyNm: props.infoBoxData.fcltyNm,
        weekdayOperOpenHhmm: props.infoBoxData.weekdayOperOpenHhmm,
        weekdayOperColseHhmm: props.infoBoxData.weekdayOperColseHhmm,
        holidayOperOpenHhmm: props.infoBoxData.holidayOperOpenHhmm,
        holidayCloseOpenHhmm: props.infoBoxData.holidayCloseOpenHhmm,
        rstdeInfo: props.infoBoxData.rstdeInfo,
        adultChrge: props.infoBoxData.adultChrge,
        yngbgsChrge: props.infoBoxData.yngbgsChrge,
        childChrge: props.infoBoxData.childChrge,
        rdnmadr: props.infoBoxData.rdnmadr,
        phoneNumber: props.infoBoxData.phoneNumber,
        homepageUrl: props.infoBoxData.homepageUrl,
        latitude: props.infoBoxData.latitude,
        longitude: props.infoBoxData.longitude,
      },
    });
  };

  return (
    <CustomOverlayMap
      position={{
        lat: props.infoBoxData.latitude,
        lng: props.infoBoxData.longitude,
      }}
    >
      <div className="info-box-wrap">
        <div className="info-box-info">
          <div className="info-box-title">
            {props.infoBoxData.fcltyNm}
            <div
              className="info-box-close"
              onClick={() => props.setIsOpen(false)}
              title="닫기"
            ></div>
          </div>
          <div className="info-box-body">
            <div className="info-box-img">
              <img
                src={artImage}
                width="73"
                height="70"
                alt="아트라운드 이미지"
              />
            </div>
            <div className="info-box-desc">
              <div className="info-box-ellipsis">
                {" "}
                <span>❤️</span> <span>{Math.floor(Math.random() * 100)}</span>
              </div>
              <div className="info-box-jibun info-box-ellipsis">
                <span className="info-box-review-title">블로그 후기</span>{" "}
                <span style={{ wordSpacing: "5px" }}>
                  {" "}
                  {Math.floor(Math.random() * 150)}{" "}
                </span>
                <span className="info-box-review-title">방문자 후기 </span>{" "}
                <span> {Math.floor(Math.random() * 300)}</span>
              </div>
              <div className="info-box-link-container">
                <Link
                  to={`/detail/${props.infoBoxData.id}`}
                  onClick={setContext}
                  className="info-box-link"
                >
                  더보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </CustomOverlayMap>
  );
};

export default InfoBox;

export const MapFooter = () => {
  return (
    <div className="map-footer-wrap">
      <Link style={{ color: "black" }}>
        <BsSearch />
      </Link>

      <Link to="/visited" style={{ color: "black" }}>
        <FaRegFlag />
      </Link>

      <Link to="/mypage" style={{ color: "black" }}>
        <FaRegUserCircle />
      </Link>
    </div>
  );
};
