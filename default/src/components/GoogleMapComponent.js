import React, {useEffect, useState} from 'react';
import './GoogleMap.css';
import { GoogleMap, InfoBox, LoadScript, Marker, InfoWindow, MarkerClusterer  } from '@react-google-maps/api';
import greenMarker from '../Image/marker-image/green_MarkerU.png';
import pinkMarker from '../Image/marker-image/pink_MarkerA.png'
import Data from './Data';
import FooterInfo from './FooterInfo';
import Icon from './Icon';


function GoogleMapComponent(props){

  let [iconState, setIconState] = useState(true);
  let [footerInfoState, setFooterInfoState] = useState('');
  let [titleState, setTitleState] = useState('');
  let [closeIconState, setCloseIconState]=useState(false);

  
  const containerStyle = {
    width: '100vw',
    height: '90vh'
  };
  
  function clickMarker(marker){
      // <FooterInfo/> 내리기
      if(marker.fcltyNm ===titleState ){
        setIconState(true);
        setFooterInfoState('');
        setTitleState('');
        setCloseIconState(false)
      }
      // <FooterInfo/> 올리기
      else{
        setIconState(false);
        setFooterInfoState(marker);
        setTitleState(marker.fcltyNm);
        setCloseIconState(true)
      }
  }

  function clickCloseBtn(){
    setCloseIconState(false);
    setIconState(true);
    setFooterInfoState('');
    setTitleState('');
  }

    return(
      <div>
         <LoadScript googleMapsApiKey="AIzaSyBIjC2af8iZNL8mGIGln8O0u4COojSdYbw">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={props.currentPosition}
            zoom={15}
          >
          <Marker 
            position={props.currentPosition}
            icon={greenMarker}
             />
          {
            props.markerState === true
            ?(
              <MarkerClusterer >
                {(clusterer) =>
                  Data.map((v,i)=>{
                    return(
                      <Marker 
                        key = {i} 
                        position={{lat : parseFloat(v.latitude), lng : parseFloat(v.longitude)}}
                        icon={pinkMarker}
                        clusterer={clusterer}
                        onClick={()=>{
                          clickMarker(v)
                      }}/>
                    );
                })}
            </MarkerClusterer>
            )
            :null
          }
          </GoogleMap>
        </LoadScript>
          {
            footerInfoState && (
              <FooterInfo 
                data={footerInfoState}
                closeIconState={closeIconState}
                clickCloseBtn={clickCloseBtn}
                />
            )
          }
        {iconState && <Icon/>}
      </div>
    );
}

export default GoogleMapComponent;