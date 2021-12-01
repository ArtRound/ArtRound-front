import React, { useState } from 'react';
import './FooterInfo.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import artImg1 from '../Image/art-image/art1.jpg';
import artImg2 from '../Image/art-image/art2.jpg';
import artImg3 from '../Image/art-image/art3.jpg';
import artImg4 from '../Image/art-image/art4.jpg';
import artImg5 from '../Image/art-image/art5.jpg';
import artImg6 from '../Image/art-image/art6.jpg';
import artImg7 from '../Image/art-image/art7.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



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
            <h2 className='footer-title'>
                {props.data.fcltyNm}
                { price(props.data.adultChrge,props.data.childChrge) }
            </h2>
            <FontAwesomeIcon className="close-icon" icon={faTimes} size={"2x"} onClick={()=>props.clickCloseBtn()}/> 
            <div className='footer-like'>
                <span>❤</span>
                <span>52</span>
            </div>
            <div className='footer-review'>
                <span>블로그 후기 32  </span>
                <span>방문자 후기 283</span>
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