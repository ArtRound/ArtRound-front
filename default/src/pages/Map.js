import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Map.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import InfoBox from "./InfoBox";
import { nanoid } from "nanoid";
import Loader from "../components/Loader";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { MapFooter } from "./InfoBox";
import Search from "./Search";
import { GiPositionMarker } from "react-icons/gi";

const KakaoMap = () => {
  let history = useHistory();
  const [currentPositionState, setCurrentPositionState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
    isPanto: false,
  });
  const artData = useRef([]); //전시회 데이터
  const [artDataLoading, setArtDataLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [infoBoxData, setInfoBoxData] = useState({});

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPositionState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setCurrentPositionState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setCurrentPositionState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없습니다",
        isLoading: false,
      }));
    }
  };

  const getArtData = () => {
    axios
      .get("http://localhost:8000/main/art_info/")
      .then((result) => {
        artData.current.push(...result.data);
        setArtDataLoading(false);
      })
      .catch((error) => {
        console.log("axios error", error.response);
      });
  };

  const clickMarker = (item) => {
    setInfoBoxData(item);
    setIsOpen(true);
  };

  const [showSearch, setShowSearch] = useState(false);
  const [searchMarker, setSearchMarker] = useState([]);
  const [showMarker, setShowMarker] = useState(0);

  const moveCurrentPosition = () => {};
  useEffect(() => {
    getCurrentPosition();
    getArtData();
  }, []);

  return (
    <>
      {currentPositionState.isLoading === false && artDataLoading === false ? (
        <>
          <div className="nav">
            <FontAwesomeIcon
              className="nav-icon"
              icon={faChevronLeft}
              onClick={() => {
                history.goBack();
              }}
            />{" "}
            <span>지도</span>
          </div>
          <Map
            center={currentPositionState.center}
            style={{
              width: "100vw",
              height: "90vh",
            }}
            level={3}
            isPanto={currentPositionState.isPanto}
          >
            <GiPositionMarker
              className="find-current-position"
              onClick={moveCurrentPosition}
            />
            <MapMarker position={currentPositionState.center} />
            {showMarker === 0 &&
              artData.current.map((item) => {
                return (
                  <MapMarker
                    key={nanoid()}
                    position={{
                      lat: parseFloat(item.latitude),
                      lng: parseFloat(item.longitude),
                    }}
                    image={{
                      src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                      size: {
                        widht: 24,
                        height: 35,
                      },
                    }}
                    title={item.fcltyNm}
                    clickable={true}
                    onClick={() => clickMarker(item)}
                  />
                );
              })}
            {showMarker === 1 &&
              searchMarker.map((item) => {
                return (
                  <MapMarker
                    position={{
                      lat: parseFloat(item.latitude),
                      lng: parseFloat(item.longitude),
                    }}
                    onClick={() => clickMarker(item)}
                    image={{
                      src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                      size: {
                        widht: 24,
                        height: 35,
                      },
                    }}
                  />
                );
              })}
            {isOpen && (
              <InfoBox infoBoxData={infoBoxData} setIsOpen={setIsOpen} />
            )}
          </Map>
          <MapFooter
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            setShowMarker={setShowMarker}
          />
          {showSearch && (
            <Search
              artData={artData}
              setSearchMarker={setSearchMarker}
              setShowMarker={setShowMarker}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default KakaoMap;
