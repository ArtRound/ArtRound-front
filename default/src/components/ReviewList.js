import React, { useState } from 'react';
import './ReviewList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart, faThumbsUp as fasFaThumbsUp, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart, faThumbsUp as farFaThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from 'react-router-dom';

function ReviewList(){

    let history = useHistory();




    return(
        <div>
            <div className="nav">
                <FontAwesomeIcon 
                    className="nav-icon" 
                    icon={faChevronLeft}
                    onClick={()=>{history.goBack()}}/> <span>지도</span>
            </div>
            <div className="review-title">피카소 미술관</div>
            <hr/>
            <div className="category">
                <a className="new" href="">최신순</a>
                <a className="high" href="">평점 높은 순</a>
                <a className="low" href="">평점 낮은 순</a>
            </div>
            <List/>
            <hr/>
            <List/>
            <div className="btn-wrap">
                <button className="submit-btn">후기 작성하기</button>
            </div>
        </div>
    )
}

export default ReviewList;


function List(){

    let [count, setCount] = useState(0);
    let [thumbsUp, setThumbsUp] = useState(false);
    
    function Heart(){
        let [heart, setHeart] = useState(false);

        return(
            <>
            {
               heart === true
                ? <FontAwesomeIcon
                    onClick={()=>{setHeart(false)}}
                    className = "heart" icon={fasFaHeart}/>
                : <FontAwesomeIcon
                    onClick={()=>{setHeart(true)}}    
                className = "heart" icon={farFaHeart}/>
            }
            </>
        )
    }

    return(
        <div className="list-wrap">
            <Heart/>
            <Heart/>
            <Heart/>
            <Heart/>
            <Heart/>
            <div>
                <span className="list-title">디자인도둑</span>
                <span className="list-date">2021.08.07</span>
            </div>
            <p className="list-content">
                와 장난아니네요 역시 피카소 그냥 보자마자 저에게 미술적인 세포가 모두 살아나면서 닭살이 돋았습니다.
                라라라라라라라라랄ㄹ라라ㅏㄹ라ㅏ라라라라ㅏㅏㅏㅏㅏ라랄ㄹ라라라ㅏ라라라라랄라라
            </p>

            <div className="list-like">
                <span onClick={()=>{
                    setCount(count+1);
                    setThumbsUp(true);
                }}>좋아요</span>

            {
                thumbsUp === true
                ?
                (
                    <FontAwesomeIcon
                        className="font-like" 
                        icon={fasFaThumbsUp}
                        />
                )
                :
                (
                    <FontAwesomeIcon
                      className="font-like" 
                        icon={farFaThumbsUp}
                        onClick={()=>{
                            setCount(count+1);
                    }}/>
                )
            }




                <span>{count}</span>
            </div>
        </div>
    );
}