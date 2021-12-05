import React, { useState } from 'react';
import './ReviewList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faThumbsUp as fasFaThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {  faThumbsUp as farFaThumbsUp } from "@fortawesome/free-regular-svg-icons";
import ReviewNav from './ReviewNav';
import Heart from './Heart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function ReviewList(){
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    console.log(state, '  state');
 

    return(
        <div>
            <ReviewNav navTitle={'후기 목록'}/>

            <div className="review-title">피카소 미술관</div>
            <hr/>
            <div className="category">
                <span 
                    className="new"
                    onClick={()=>{
                        dispatch({
                            type:'sortDate'
                        })
                    }}
                >최신순</span>
                <span 
                    className="high"
                    onClick={()=>{
                        dispatch({
                            type:'sortUp'
                        })
                    }}
                >평점 높은 순</span>
                <span
                    onClick={()=>{
                        dispatch({
                            type : 'sortDown'
                        })
                    }}
                    className="low" >평점 낮은 순</span>
            </div>
            {
                state.map((v,i)=>{
                    return(
                        <div className="list-wrap">
                            <Heart count={v.heart}/>
                            <div>
                                <span className="list-title">{v.name}</span>
                                <span className="list-date">{v.date}</span>
                            </div>
                            <p className="list-content">{v.content}</p>
                            <ThumnsUp/>
                            <hr/>
                        </div>
                    )
                })
            }
            <div className="btn-wrap">
                <Link to='/submit'>
                    <button  className="submit-btn">후기 작성하기</button>
                </Link>
            </div>
        </div>
    )
}

export default ReviewList;

function ThumnsUp(){
    let randomCount = Math.floor(Math.random()*217);
    let [thumbsUp, setThumbsUp] = useState(false);
    let [count, setCount] = useState(randomCount);

    return(
        <div className="list-like">
            <span onClick={()=>{
                setThumbsUp(!thumbsUp);
            }}>좋아요</span>

        {
            thumbsUp === true
            ?
            (
                <>
                    <FontAwesomeIcon
                        className="font-like" 
                        icon={fasFaThumbsUp}
                        />
                    <span>{count+1}</span>
                </>
            )
            :
            (
                <>
                    <FontAwesomeIcon
                        className="font-like" 
                        icon={farFaThumbsUp}
                    />
                    <span>{count}</span>
                </>
            )
        }
    </div>
    )
}



