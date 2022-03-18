import React, { useState, useContext, useEffect } from "react";
import "./Detail.css";
import title_img from "../img/exhibition_sample_img.png";
import { Link } from "react-router-dom";
import { Context } from "../context";
import ReviewNav from "../components/ReviewNav";
import axios from "axios";

const Detail = () => {
  const { state } = useContext(Context); // 공공데이터
  const [wish, setWish] = useState(false);
  const [visited, setVisited] = useState(false);
  const [id, setId] = useState(0); // 하트 토글할 때 필요한 id
  const [artId, setArtId] = useState(0); // 현재 전시회 id
  const fHeartData = localStorage.getItem(artId);
  const vHeartData = localStorage.getItem(artId + "_visit");

  useEffect(() => {
    setArtId(state["art_id"]);
  }, [state]);
  console.log("artID: ", artId);

  function wishList() {
    if (wish === false && fHeartData === null) {
      // 즐겨찾기 목록에 넣기
      setWish(!wish);
      localStorage.setItem(artId, "favorite!!");

      axios
        .post("http://127.0.0.1:8000/main/favorites/", {
          title: state.fcltyNm,
          content: state.rdnmadr,
          start_time:
            "월-금: " +
            state.weekdayOperOpenHhmm +
            " ~ " +
            state.weekdayOperColseHhmm +
            "  ",

          end_time:
            " / 공휴일: " +
            state.holidayOperOpenHhmm +
            " ~ " +
            state.holidayCloseOpenHhmm,
          art_info_id: artId,
        })
        .then(function (response) {
          console.log(response.data["id"]);
          setId(response.data["id"]);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      //즐겨찾기 목록에서 삭제
      setWish(!wish);
      localStorage.removeItem(artId);

      axios
        .delete(`http://127.0.0.1:8000/main/favorites/${id}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function visitedList() {
    if (visited === false && vHeartData === null) {
      // 방문 목록에 넣기
      setVisited(!visited);
      localStorage.setItem(artId + "_visit", "visited!!");

      axios
        .post("http://127.0.0.1:8000/main/visited/", {
          title: state.fcltyNm,
          address: state.rdnmadr,
          start_time:
            "월-금: " +
            state.weekdayOperOpenHhmm +
            " ~ " +
            state.weekdayOperColseHhmm +
            "  ",

          end_time:
            " / 공휴일: " +
            state.holidayOperOpenHhmm +
            " ~ " +
            state.holidayCloseOpenHhmm,
        })
        .then(function (response) {
          console.log(response.data["id"]);
          setId(response.data["id"]);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // 방문 목록에서 삭제
      setVisited(!visited);
      localStorage.removeItem(artId + "_visit");

      axios
        .delete(`http://127.0.0.1:8000/main/visited/${id}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function changePrice(money) {
    if (money === "0") return " 무료";
    else return " " + money + "원";
  }
  return (
    <div className="exhibition">
      <ReviewNav title={state.fcltyNm} />
      <div className="ex-container">
        <img className="title-img" src={title_img} alt="exhibition" />
        <div className="div-btn">
          {/* 즐겨찾기 버튼 누르기 전과 후 */}
          {!fHeartData && (
            <button className="btn-wish" onClick={() => wishList()}>
              <i className="far fa-heart fa-2x"></i>즐겨찾기
            </button>
          )}

          {fHeartData && (
            <button className="btn-wish" onClick={() => wishList()}>
              <i className="fas fa-heart fa-2x"></i>즐겨찾기
            </button>
          )}

          <button className="btn-wish">
            <i className="fas fa-share-square fa-2x"></i>공유하기
          </button>

          <Link to="/visited">
            {" "}
            <button type="button">방문하기 방문하기</button>{" "}
          </Link>

          {/* 방문 버튼 누르기 전과 후 */}
          {!vHeartData && (
            <button className="btn-wish" onClick={() => visitedList()}>
              <i className="far fa-flag fa-2x"></i>방문
            </button>
          )}
          {vHeartData && (
            <button className="btn-wish" onClick={() => visitedList()}>
              <i className="fas fa-flag fa-2x"></i>방문
            </button>
          )}

          <button className="btn-wish">
            <i className="fas fa-car fa-2x"></i>교통
          </button>
        </div>{" "}
        {/* div-btn */}
        <div className="detail-container">
          <div className="info">
            <p>INFO</p>
          </div>

          <table className="detail-table">
            <tbody>
              <tr>
                <th>관람시간</th>
                <td>
                  월-금: {state.weekdayOperOpenHhmm} ~{" "}
                  {state.weekdayOperColseHhmm} <br />
                  공휴일: {state.holidayOperOpenHhmm} ~{" "}
                  {state.holidayCloseOpenHhmm}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>휴관일</th>
                <td>{state.rstdeInfo}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>입장료</th>
                <td>
                  일반(만 19세-60세):{changePrice(state.adultChrge)}
                  <br />
                  청소년(만 13세-18세): {changePrice(state.yngbgsChrge)}
                  <br />
                  어린이(12세 이하): {changePrice(state.childChrge)}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>주소</th>
                <td>{state.rdnmadr}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>전화번호</th>
                <td>{state.operPhoneNumber}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>홈페이지</th>
                <td>
                  <a href={`{state.homepageUrl}`}>{state.homepageUrl}</a>
                </td>
              </tr>
            </tbody>
          </table>

          <Link to="/review">
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
