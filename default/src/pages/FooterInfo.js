import React, { useState } from 'react';
import './FooterInfo.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import artImg1 from '../img/art-image/art1.jpg';
import artImg2 from '../img/art-image/art2.jpg';
import artImg3 from '../img/art-image/art3.jpg';
import artImg4 from '../img/art-image/art4.jpg';
import artImg5 from '../img/art-image/art5.jpg';
import artImg6 from '../img/art-image/art6.jpg';
import artImg7 from '../img/art-image/art7.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



function FooterInfo(props){

    function price(adult, child){
        //성인 & 아이 모두 무료
        if(parseInt(adult)===0 && parseInt(child)===0) return <span className="price"> 무료 </span>
        //성인은 유로 아이는 무료
        else if(parseInt(adult)!==0 && parseInt(child)===0) return <span className="price"> 어른 : {adult}원, 아이 : 무료 </span>
        //성인 & 아이 모두 유료
        else if(parseInt(adult)!==0 && parseInt(child)!=0) return <span className="price"> 어른 : {adult}원, 아이 : {child}원 </span>
    }

    return(
        <>
            {
                props.closeIconState&&(

        <div className='footer-info'>
            <Link to={{pathname: `/detail/${props.data.id}`}} style={{textDecoration: 'none' , color:'black'}}>
                <span className='footer-title'>{props.data.fcltyNm}</span>
            </Link>
            <span>{ price(props.data.adultChrge,props.data.childChrge) }</span>
            <FontAwesomeIcon className="close-icon" icon={faTimes} size={"2x"} onClick={()=>props.clickCloseBtn()}/> 
            <div className='footer-like'>
                <span>❤</span>
                <span>{Math.floor(Math.random()*100)}</span>
            </div>
            <div className='footer-review'>
                <span>블로그 후기 {Math.floor(Math.random()*150)}  </span>
                <span>방문자 후기 {Math.floor(Math.random()*300)}</span>
            </div>
            <div className="art-img">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={8}
                    initialSlide={1}
                    centeredSlides={false}
                >
                <SwiperSlide> <img src={artImg1}/> </SwiperSlide>
                <SwiperSlide> <img src={artImg2}/> </SwiperSlide>
                <SwiperSlide> <img src={artImg3}/> </SwiperSlide>
                <SwiperSlide> <img src={artImg4}/> </SwiperSlide>
                <SwiperSlide> <img src={artImg5}/> </SwiperSlide>
                <SwiperSlide> <img src={artImg6}/> </SwiperSlide>
                <SwiperSlide> <img src={artImg7}/> </SwiperSlide>
                </Swiper>
            </div>

        </div>
                )

            };
        </>
    );
};

export default FooterInfo;