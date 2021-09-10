import React,{useState,useEffect} from 'react';
import Category from '../Category'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styled, {createGlobalStyle} from "styled-components";
import markerData from '../../data/markerData';


const MapContainer = () => {

    const [ currentPosition, setCurrentPosition ] = useState({});
    const [selected, setSelected] = useState({});

    const onSelect = item=>{
        setSelected(item);
    }
    
    const success = position => {
        const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

    const mapStyles = {        
        height: "100vh",
        width: "100vw"
    };

    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng})
    };

    const locations = [
        {
            title : "경동아파트",
            price : 5000,
            location:{
                lat : 35.191805,
                lng : 129.092678
            },
        },
        {
            title : "안민초등학교",
            price : "무료",
            location:{
                lat : 35.193712,
                lng : 129.094320
            },
        },
        {
            title : "한양아파트",
            price : 7500,
            location:{
                lat : 35.189670,
                lng : 129.101913
            },
        },
    ];

    
    return (
        <>
            <GlobalStyle/>
            <LoadScript
                googleMapsApiKey='AIzaSyBIjC2af8iZNL8mGIGln8O0u4COojSdYbw'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={currentPosition}
            >
            {
                // currentPosition.lat ? <Marker position={currentPosition}
                // onDragEnd={(e) => onMarkerDragEnd(e)}
                // draggable={true} /> : null
                    locations.map(item=>{
                        return(
                            <Marker key={item.title} 
                                position={item.location}
                                onClick={()=>onSelect(item)}    />
                        )
                    })
            }
            <Marker position={currentPosition}/>
            <InfoWindow position={currentPosition}>
                <p>현재 위치</p>
            </InfoWindow>

            {/* {
                currentPosition.lat ? 
                <Marker
                position={currentPosition}
                onDragEnd={(e) => onMarkerDragEnd(e)}
                draggable={true} /> :
                null
            } */}
            {
                selected.location && 
                (
                    <InfoWindow
                        position ={selected.location}
                        clickable={true}
                        onCloseClick={()=>setSelected({})}
                    >
                        <p>{selected.title}</p>
                    </InfoWindow>
                )
            }
            <FixedNav>
                    <i className="fas fa-chevron-left"></i>
                    <span style={{paddingLeft:"15px"}}>지도</span>
                </FixedNav>
                <Category/>

                <SearchBtn  >
                    <i className="fas fa-search-location fa-2x"></i>
                </SearchBtn>

                {/* <BottomInfoContent>aaaa</BottomInfoContent> */}
                <FixedBottom>
                    <i className="fas fa-search fa-2x"></i>
                    <i className="far fa-user-circle fa-2x"></i>
                    <i className="fas fa-user-cog fa-2x"></i>
                </FixedBottom>
            </GoogleMap>
            </LoadScript>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        height: 100%;
    }
`;
const FixedNav = styled.div`
    position : absolute;
    z-index:2;
    top:0;
    left:0;
    background-color : #FFFFFF;
    padding:10px;
    width:100%;
    height:25px;
`;


const FixedBottom = styled.div`
    position : absolute;
    z-index :2;
    bottom : 0;
    width :100%;
    height :40px;
    background-color: #FFFFFF;

    display : flex;
    justify-content :space-around;
    align-items :center;
    padding:5px;
`;

const SearchBtn = styled.button`
    position : absolute;
    z-index : 2;
    right:5px;
    bottom:70px;
    background-color: white;
    border-radius : 10px;
    
    display:flex;
    justify-content : center;
    align-items:center;
`;


export default MapContainer;


