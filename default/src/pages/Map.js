import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Map.css";
import {
  faChevronLeft,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import "../components/GoogleMap.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import greenMarker from "../img/marker-image/green_MarkerU.png";
import Icon from "../components/Icon";

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

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      {locationState.isLoading === false ? (
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
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={locationState.center} icon={greenMarker} />
            </GoogleMap>
          </LoadScript>

          <button
            onClick={() => {
              getCurrentLocation();
            }}
            className="current-position-btn"
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faSearchLocation} size={"2x"} />
          </button>
          <Icon />
        </>
      ) : (
        <div>loding wait</div>
      )}
    </div>
  );
}

export default Map;
