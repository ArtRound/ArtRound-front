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
import Loader from "../components/Loader";

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

  const [loading, setLoading] = useState(false);
  const [footerUi, setFooterUi] = useState(false);
  const [footerInfoData, setFooterInfoData] = useState({});
  const mapData = useRef([]);
  const mapRef = useRef(null);

  const handleLoad = (map) => {
    mapRef.current = map;
  };

  const clickOpen = (item) => {
    if (!footerInfoData) {
      setFooterInfoData(item);
      setFooterUi(true);

      console.log("1 station");
    } else {
      if (footerInfoData.id === item.id) {
        setFooterUi(!footerUi);
        setFooterInfoData(item);

        console.log("2 station");
      } else if (footerInfoData.id !== item.id) {
        setFooterUi(false);
        setFooterInfoData(item);
        setFooterUi(true);

        console.log("3 station");
        console.log("footerInfoData id ", footerInfoData.id);
        console.log("item id ", item.id);
      }
    }
  };

  const getMapData = () => {
    const axiosMapData = axios.create();
    axiosMapData
      .get("http://localhost:8000/main/art_info/")
      .then((result) => {
        mapData.current.push(...result.data);
        setLoading(true);
      })
      .catch((e) => {
        console.log("here is error", e);
      });
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

  useEffect(() => {
    getCurrentLocation();
    getMapData();
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
                  mapData.current.map((item) => {
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
          {footerUi && <FooterInfo footerInfoData={footerInfoData} />}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Map;
