import React, { useState } from "react";
import "./Detail.css";
import title_img from "../img/exhibition_sample_img.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Detail = (props) => {
  //공공 api 데이터
  const [detailData, setdetailData] = useState({
    ...props.location.state.detailData,
  });

  const [wish, setWish] = useState(false);
  const [visited, setVisited] = useState(false);
  let dispatch = useDispatch();
  let fav_state = useSelector((fav_state) => fav_state.fav_reducer);
  console.log(fav_state);

  function wishList() {
    if (wish === false) {
      // 즐겨찾기 목록에 넣기
      setWish(!wish);
      dispatch({
        type: "add",
        payload: {
          name: detailData.fcltyNm,
          time:
            "월-금: " +
            detailData.weekdayOperOpenHhmm +
            " ~ " +
            detailData.weekdayOperColseHhmm +
            " " +
            "/ 공휴일: " +
            detailData.holidayOperOpenHhmm +
            " ~ " +
            detailData.holidayCloseOpenHhmm,
          address: detailData.rdnmadr,
        },
      });
    } else {
      //즐겨찾기 목록에서 삭제
      setWish(!wish);
      dispatch({
        type: "del",
      });
    }
  }

  function visitedList() {
    if (visited === false) {
      // 방문 목록에 넣기
      setVisited(!visited);
    } else {
      // 방문 목록에서 삭제
      setVisited(!visited);
    }
  }

  function changePrice(money) {
    if (money === "0") return " 무료";
    else return " " + money + "원";
  }
  return (
    <div className="exhibition">
      <div className="top-bar">
        <button className="back-btn">⬅</button>
        <div className="exhibition-title">{detailData.fcltyNm}</div>
      </div>
      <div className="ex-container">
        <img className="title-img" src={title_img} alt="exhibition" />
        <div className="div-btn">
          {/* 즐겨찾기 버튼 누르기 전과 후 */}
          {!wish && (
            <button className="btn-wish" onClick={() => wishList()}>
              <i class="far fa-heart fa-2x"></i>즐겨찾기
            </button>
          )}

          {wish && (
            <button className="btn-wish" onClick={() => wishList()}>
              <i class="fas fa-heart fa-2x"></i>즐겨찾기
            </button>
          )}

          <button className="btn-wish">
            <i class="fas fa-share-square fa-2x"></i>공유하기
          </button>

          <Link to="/favorite">
            {" "}
            <button type="button">즐겨찾기 즐겨찾기</button>{" "}
          </Link>

          {/* 방문 버튼 누르기 전과 후 */}
          {!visited && (
            <button className="btn-wish" onClick={() => visitedList()}>
              <i class="far fa-flag fa-2x"></i>방문
            </button>
          )}
          {visited && (
            <button className="btn-wish" onClick={() => visitedList()}>
              <i class="fas fa-flag fa-2x"></i>방문
            </button>
          )}

          <button className="btn-wish">
            <i class="fas fa-car fa-2x"></i>교통
          </button>
        </div>{" "}
        {/* div-btn */}
        <div className="detail-container">
          <div className="info">
            <p>INFO</p>
          </div>

          <table className="detail-table">
            <tr>
              <th>관람시간</th>
              <td>
                월-금: {detailData.weekdayOperOpenHhmm} ~{" "}
                {detailData.weekdayOperColseHhmm} <br />
                공휴일: {detailData.holidayOperOpenHhmm} ~{" "}
                {detailData.holidayCloseOpenHhmm}
              </td>
            </tr>
            <tr>
              <th>휴관일</th>
              <td>{detailData.rstdeInfo}</td>
            </tr>
            <tr>
              <th>입장료</th>
              <td>
                일반(만 19세-60세):{changePrice(detailData.adultChrge)}
                <br />
                청소년(만 13세-18세): {changePrice(detailData.yngbgsChrge)}
                <br />
                어린이(12세 이하): {changePrice(detailData.childChrge)}
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td>{detailData.rdnmadr}</td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td>{detailData.operPhoneNumber}</td>
            </tr>
            <tr>
              <th>홈페이지</th>
              <td>
                <a href={`{detailData.homepageUrl}`}>
                  {detailData.homepageUrl}
                </a>
              </td>
            </tr>
          </table>

          <Link
            to={{
              pathname: "/review",
              state: {
                dataId: detailData.id,
                dataTitle: detailData.fcltyNm,
              },
            }}
          >
            {" "}
            <button type="button" className="review-post-btn">
              후기 보기
            </button>{" "}
          </Link>
        </div>{" "}
        {/* detail-container */}
      </div>{" "}
      {/* ex-container */}
    </div>
  );
};

export default Detail;
