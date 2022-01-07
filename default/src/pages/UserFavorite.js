import React from "react";
import "./UserVisited.css";
import title_img from "../img/exhibition_sample_img.png";
import { useSelector } from 'react-redux';

const UserFavorite = ({ history }) => {
  // const [ing, setIng] = useState(true);
  // function display_state() {
  //   if (true) {
  //     // 전시 중이면 useState -> false로 바꾸기 
  //   } else {

  //   }
  // }

  let fav_state = useSelector((fav_state) => fav_state.fav_reducer);
  console.log(fav_state);

  return <div>
    <nav>
      <button
        onClick={() => {
          history.push("/");
        }}
        className="back-btn"
      >⬅</button>
      <span>즐겨찾기 목록</span>
    </nav>

    <div className="visited-container">
      <div className="user-visited">
        <div className="art-around">ArtROUND</div>
        <div className="user-name">반유진</div>
      </div>  {/* user-visited */}

      <div className="list-visited">
        {
          fav_state.map((f) => {
            return (
              //fav 자체를 버튼으로 만들고 이걸 detail페이지랑 연결하기 
              //detail에서 이름, 시간, 주소 복사할 때 해당 key값도 같이 복사해서 연결하기...
              <div className="fav" >
                <div className="visited-name">{f.name}</div>
                <div className="visited-detail">{f.address}</div>
                <div className="visited-detail">{f.time}</div>
                <hr />
              </div>
            )
          })
        }

        { /* <img className="visited-img" src={title_img} alt="exhibition" />
        {/* {ing && <div id="display" className="display-ing">
          <i class="fas fa-circle"></i>
          <div className="end">전시중</div>
        </div>}

        {!ing && <div id="display" className="display-end">
          <i class="fas fa-circle"></i>
          <div className="end">전시종료</div>
        </div>} */}

        { /*
        <div className="visited-name">피카소 미술관</div>
        <div className="visited-detail">부경대 다래락</div>
        <div className="visited-detail">2021.08.07 ~ 2021.09.15</div> 
        */}

      </div> {/* list-visited */}
    </div>  {/* visited-container */}

  </div >;
};

export default UserFavorite;