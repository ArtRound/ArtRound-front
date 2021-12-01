import React, { useState } from 'react';
import "./Detail.css";
import title_img from "../img/exhibition_sample_img.png";
import { Link } from 'react-router-dom';

const Detail = () => {

  const [wish, setWish] = useState(false);
  const [visited, setVisited] = useState(false);


  function wishList() {
    if (wish === true) {
      // 즐겨찾기 목록에 넣기
    } else {

    }
  }
  function visitedList() {
    if (visited === true) {
      // 방문 목록에 넣기
    } else {

    }
  }

  return (
    <div className="exhibition">
      <div className="top-bar">
        <button className="back-btn">⬅</button>
        <div className="exhibition-title">피카소 미술 전시관</div>
      </div>

      <div className="ex-container">
        <img className="title-img" src={title_img} alt="exhibition" />



        <div className="div-btn">
          {/* 즐겨찾기 버튼 누르기 전과 후 */}
          {!wish && <button className="btn-wish" onClick={() => setWish(!wish)}><i class="far fa-heart fa-2x"></i>즐겨찾기</button>}
          {wish && <button className="btn-wish" onClick={() => setWish(!wish)}><i class="fas fa-heart fa-2x"></i>즐겨찾기</button>}


          <button className="btn-wish"><i class="fas fa-share-square fa-2x"></i>공유하기</button>

          {/* 방문 버튼 누르기 전과 후 */}
          {!visited && <button className="btn-wish" onClick={() => setVisited(!visited)}><i class="far fa-flag fa-2x"></i>방문</button>}
          {visited && <button className="btn-wish" onClick={() => setVisited(!visited)}><i class="fas fa-flag fa-2x"></i>방문</button>}

          <button className="btn-wish"><i class="fas fa-car fa-2x"></i>교통</button>

        </div>  {/* div-btn */}

        <div className="detail-container">
          <div className="info"><p>INFO</p></div>

          <table className="detail-table">
            <tr>
              <th>전시기간</th>
              <td>2021.03.23 ~ 2021.10.22</td>
            </tr>
            <tr>
              <th>전시장소</th>
              <td>부경대학교 다래락</td>
            </tr>
            <tr>
              <th>관람시간</th>
              <td>월-금: 09:00 ~ 21:00 <br />토요일: 09:00 ~ 15:00</td>
            </tr>
            <tr>
              <th>휴관일</th>
              <td>일요일</td>
            </tr>
            <tr>
              <th>입장료</th>
              <td>일반(만 19세-60세): 7500원<br />청소년(만 13세-18세): 5000원<br />어린이(12세 이하): 무료</td>
            </tr>
            <tr>
              <th>주소</th>
              <td>경상남도 양산시 범어리 123-56</td>
            </tr>
            <tr>
              <th>주차장</th>
              <td>있음</td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td>055-123-4567</td>
            </tr>
            <tr>
              <th>홈페이지</th>
              <td>https://cms.pknu.ac.kr/itcae/main.do</td>
            </tr>
            <tr>
              <th>Artist</th>
              <td>Yu Jin</td>
            </tr>
          </table>

          <Link to="/review"> <button type="button" className="review-btn">
            후기 보기
          </button> </Link>

        </div> {/* detail-container */}
      </div> {/* ex-container */}
    </div >
  );
};

export default Detail;