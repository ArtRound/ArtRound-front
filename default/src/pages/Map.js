import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Map.css";
import {
  faChevronLeft,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import "../components/GoogleMap.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import greenMarker from "../img/marker-image/green_MarkerU.png";
import pinkMarker from "../img/marker-image/pink_MarkerA.png";
import Icon from "../components/Icon";
import axios from "axios";
import FooterInfo from "./FooterInfo";
import { nanoid } from "nanoid";

function Map() {
  let history = useHistory();

  const containerStyle = {
    width: "100vw",
    height: "90vh",
  };

  const [locationState, setLocationState] = useState({
    center: {
      lat: "",
      lng: "",
    },
    errMsg: null,
    isLoading: true,
  });

  const center = {
    lat: locationState.center.lat,
    lng: locationState.center.lng,
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setLocationState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setLocationState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  };

  const params = {
    pageNo: 0,
    numOfRows: 100,
    type: "json",
    key: "BfdusobQEjVcCsm1nVfc3AnA%2BsBih1Corc0TwKt9B%2Ft46CeONaFq%2Bn0%2BxkUnGO9fzeQHPLjXLLCk8aFpYejEbQ%3D%3D",
  };

  const openUrl = [];
  const [loading, setLoading] = useState(false);
  const [footerUi, setFooterUi] = useState(false);

  const openRef = useRef([]);
  const footerRef = useRef();

  const openDataAxios = () => {
    for (let i = 1; i <= 16; i++) {
      openUrl[
        i
      ] = `http://api.data.go.kr/openapi/tn_pubr_public_museum_artgr_info_api?serviceKey=${
        params.key
      }&pageNo=${params.pageNo + i}&numOfRows=${params.numOfRows}&type=${
        params.type
      }`;
    }

    let count = 0;
    openUrl.map((url) => {
      axios
        .get(url)
        .then((result) => {
          openRef.current.push(...result.data.response.body.items);
        })
        .then(() => {
          count++;
          if (count === 16) {
            setLoading(true);
          }
        })
        .catch((e) => {
          console.log("error", e);
        });
    });
  };

  const clickOpen = (item) => {
    if (!footerRef.current) {
      footerRef.current = { ...item };
      setFooterUi(true);
    } else {
      if (footerRef.current.id === item.id) {
        setFooterUi(!footerUi);
      } else if (footerRef.current.id !== item.id) {
        setFooterUi(false);
        footerRef.current = { ...item };
        setFooterUi(true);
      }
    }
  };

  const mapRef = useRef(null);

  const handleLoad = (map) => {
    mapRef.current = map;
  };

  useEffect(() => {
    getCurrentLocation();
    openDataAxios();
  }, []);

  return (
    <div>
      {locationState.isLoading === false && loading === true ? (
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

          <LoadScript googleMapsApiKey="AIzaSyBIjC2af8iZNL8mGIGln8O0u4COojSdYbw">
            <GoogleMap
              onLoad={handleLoad}
              mapContainerStyle={containerStyle}
              center={locationState.center}
              zoom={15}
            >
              <Marker position={locationState.center} icon={greenMarker} />

              <MarkerClusterer>
                {(clusterer) =>
                  openRef.current.map((item) => {
                    item.id = item.fcltyNm;
                    return (
                      <Marker
                        key={nanoid()}
                        position={{
                          lat: parseFloat(item.latitude),
                          lng: parseFloat(item.longitude),
                        }}
                        icon={pinkMarker}
                        onClick={() => {
                          clickOpen(item);
                        }}
                        clusterer={clusterer}
                      />
                    );
                  })
                }
              </MarkerClusterer>
            </GoogleMap>
          </LoadScript>

          <button
            onClick={() => {
              setLocationState((prev) => ({
                ...prev,
                center: {
                  lat: center.lat,
                  lng: center.lng,
                },
                isLoading: false,
              }));
            }}
            className="current-position-btn"
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faSearchLocation} size={"2x"} />
          </button>
          <Icon />
          {footerUi && <FooterInfo data={footerRef.current} />}
        </>
      ) : (
        <div>loding wait</div>
      )}
    </div>
  );
}

export default Map;
