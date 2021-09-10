/*global kakao*/
import React, {useEffect,useState, useRef} from 'react'
import styled, {createGlobalStyle} from "styled-components";
import Category from './Category'
import { markerdata } from '../data/markerData';
import BottomInfoContent from './BottomInfo';

const KakaoMap = () =>{

    const mapScript = () =>{
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = {  //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),//지도의 중심좌표
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


        markerdata.forEach((el)=>{
            const otherPlaceMarker = new kakao.maps.Marker({
                map : map,
                position : new kakao.maps.LatLng(el.lat, el.lon),
                // title:el.title,
            });
            let infowindowOtherPlace = new kakao.maps.InfoWindow({
                content : el.title +" "+ el.price,
            });

            kakao.maps.event.addListener(
                otherPlaceMarker,
                "mouseover",
                makeOverListener(map, otherPlaceMarker, infowindowOtherPlace)
            );
            kakao.maps.event.addListener(
                otherPlaceMarker,
                "mouseout",
                makeOutListener(infowindowOtherPlace)
            );
        });
        function makeOverListener (map, otherPlaceMarker, infowindowOtherPlace){
            return function (){
                infowindowOtherPlace.open(map, otherPlaceMarker)
            }
        }
        function makeOutListener (infowindowOtherPlace){
            return function (){
                infowindowOtherPlace.close()
            };
        }





        // const makeOverListener =(map, otherPlaceMarker, infowindowOtherPlace) =>{
        //     return ()=> infowindowOtherPlace.open(map, otherPlaceMarker);
        // }

        // const makeOutListener = (infowindowOtherPlace) =>{
        //     return () => infowindowOtherPlace.close();
        // }

        // 지도에 마커와 인포윈도우를 표시하는 함수
        const displayMarker = ((locPosition, message) => {

            // 마커 생성
            const marker = new kakao.maps.Marker({  
                map: map, 
                position: locPosition
            }); 
            
        const iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우 생성
        const infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
            
        // 인포윈도우를 마커위에 표시 
        infowindow.open(map, marker);
            
        // 지도 중심좌표를 접속위치로 변경
        map.setCenter(locPosition);
        });   

        // HTML5의 geolocation으로 사용할 수 있는지 확인하기
        if (navigator.geolocation) {
            
            // GeoLocation을 이용해서 접속 위치를 얻기
            navigator.geolocation.getCurrentPosition((position)=> {
                
                let lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도
                
                
                let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성
                    // message = '<div style="padding:5px;">여기에 계신가요?!</div>'; 
                    message = '여기 있음?'; 
                
                // 마커와 인포윈도우를 표시
                displayMarker(locPosition, message);
                    
            });
            
        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정
            
            let locPosition = new kakao.maps.LatLng(35.1340, 129.1032),    
                message = 'geolocation 오류로 부경대학교로 안내'
                
            displayMarker(locPosition, message);
        }

    }


    useEffect(() => {
        mapScript();
    }, [])


    return (
        <div>
            {/* 지도 담을 영역 */}
            <GlobalStyle/>
            <MapContent id="map">
                <FixedNav>
                    <i className="fas fa-chevron-left"></i>
                    <span style={{paddingLeft:"15px"}}>지도</span>
                </FixedNav>
                <Category/>

                <SearchBtn onClick={mapScript} >
                    <i className="fas fa-search-location fa-2x"></i>
                </SearchBtn>

                <BottomInfoContent>aaaa</BottomInfoContent>
                <FixedBottom>
                    <i className="fas fa-search fa-2x"></i>
                    <i className="far fa-user-circle fa-2x"></i>
                    <i className="fas fa-user-cog fa-2x"></i>
                </FixedBottom>
            </MapContent>
        
        </div>
    )

};

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


const MapContent = styled.div`
    width: 100vw;
    height: 100vh;
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



export default KakaoMap;

