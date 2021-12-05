import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Map.css';
import GoogleMap from './GoogleMapComponent';
import axios from 'axios';
import { faChevronLeft, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import Data from './Data';


function Map() {

  const [currentPosition, setCurrentPosition] = useState({
    lat: null,
    lng: null
  });

  const [markerState, setMarkerState] = useState(false);

  let history = useHistory();

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      alert('위치를 공유하지 않는 브라우저 입니다.')
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition({ lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude) });
      }, () => {
        alert('위치를 찾을 수 없습니다.')
      });
    }
  }

  function multipleAxios() {
    const URL = []
    const getURL = []

    for (let i = 0; i < 15; i++) {
      URL[i] = `http://api.data.go.kr/openapi/tn_pubr_public_museum_artgr_info_api?serviceKey=BfdusobQEjVcCsm1nVfc3AnA%2BsBih1Corc0TwKt9B%2Ft46CeONaFq%2Bn0%2BxkUnGO9fzeQHPLjXLLCk8aFpYejEbQ%3D%3D&pageNo=${i + 1}&numOfRows=100&type=json`
      getURL[i] = axios.get(URL[i]);
    }

    axios.all([...getURL]).then(
      axios.spread((...allData) => {
        allData.map((v, i) => {
          Data.push(...v.data.response.body.items);
        })
        setMarkerState(true);
      })
    )
  }


  useEffect(() => {
    getCurrentLocation();
    multipleAxios();
  }, [])

  return (
    <div>
      <div className="nav">
        <FontAwesomeIcon
          className="nav-icon"
          icon={faChevronLeft}
          onClick={() => { history.goBack() }}
        /> <span>지도</span>
      </div>
      <GoogleMap markerState={markerState} currentPosition={currentPosition} getCurrentLocation={getCurrentLocation}>
      </GoogleMap>
      <button onClick={() => { getCurrentLocation() }} className="current-position-btn" >
        <FontAwesomeIcon icon={faSearchLocation} size={"2x"} />
      </button>
    </div>
  )
}

export default Map;

