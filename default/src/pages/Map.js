import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Map.css';
import { faChevronLeft, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import '../components/GoogleMap.css';
import { GoogleMap, InfoBox, LoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api';
import greenMarker from '../img/marker-image/green_MarkerU.png';
import pinkMarker from '../img/marker-image/pink_MarkerA.png'
import FooterInfo from './FooterInfo';
import Icon from '../components/Icon';
import {placeData} from '../App';

function Map(props) {

  //공공 api 데이터
  const mapData = useContext(placeData);

  let [iconState, setIconState] = useState(true);
  let [footerInfoState, setFooterInfoState] = useState('');
  let [titleState, setTitleState] = useState('');
  let [closeIconState, setCloseIconState] = useState(false);

  
  const containerStyle = {
    width: '100vw',
    height: '90vh'
  };

  function clickMarker(marker) {
    // <FooterInfo/> 내리기
    if (marker.fcltyNm === titleState) {
      setIconState(true);
      setFooterInfoState('');
      setTitleState('');
      setCloseIconState(false)
    }
    // <FooterInfo/> 올리기
    else {
      setIconState(false);
      setFooterInfoState(marker);
      setTitleState(marker.fcltyNm);
      setCloseIconState(true)
    }
  }

  function clickCloseBtn() {
    setCloseIconState(false);
    setIconState(true);
    setFooterInfoState('');
    setTitleState('');
  }


  const [currentPosition, setCurrentPosition] = useState({
    lat: null,
    lng: null
  });


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



  useEffect(() => {
    getCurrentLocation();
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
      <LoadScript googleMapsApiKey="AIzaSyBIjC2af8iZNL8mGIGln8O0u4COojSdYbw">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={15}
        >
          <Marker
            position={currentPosition}
            icon={greenMarker}
          />
          {
            props.markerState === true
              ? (
                <MarkerClusterer >
                  {(clusterer) =>
                    mapData.map((v, i) => {
                      console.log('원래 이렇게 계속 출력되었는가???');
                      return (
                        <Marker
                          key={i}
                          position={{ lat: parseFloat(v.latitude), lng: parseFloat(v.longitude) }}
                          icon={pinkMarker}
                          clusterer={clusterer}
                          onClick={() => {
                            clickMarker(v)
                          }} />
                      );
                    })}
                </MarkerClusterer>
              )
              : null
          }
        </GoogleMap>
      </LoadScript>

      <button onClick={() => { getCurrentLocation() }} className="current-position-btn" >
        <FontAwesomeIcon icon={faSearchLocation} size={"2x"} />
      </button>

      {
        footerInfoState && (
          <FooterInfo
            data={footerInfoState}
            closeIconState={closeIconState}
            clickCloseBtn={clickCloseBtn}
          />
        )
      }

      {iconState && <Icon />}
    </div>
  )
}

export default Map;

