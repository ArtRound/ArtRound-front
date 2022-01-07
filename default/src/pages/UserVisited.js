import React from "react";
import "./UserVisited.css";
import title_img from "../img/exhibition_sample_img.png";
import { useSelector } from 'react-redux';

const UserVisited = ({ history }) => {
  // const [ing, setIng] = useState(true);
  // function display_state() {
  //   if (true) {
  //     // 전시 중이면 useState -> false로 바꾸기 
  //   } else {

  //   }
  // }

  let visited_state = useSelector((visited_state) => visited_state.visited_reducer);
  console.log(visited_state);

  return <div>
    <nav>
      <button
        onClick={() => {
          history.push("/");
        }}
        className="back-btn"
      >⬅</button>
      <span>방문한 미술관/전시회</span>
    </nav>

    <div className="visited-container">
      <div className="user-visited">
        <div className="art-around">Art Around</div>
        <div className="user-name">반유진</div>
      </div>  {/* user-visited */}

      <div className="list-visited">
        {
          visited_state.map((f) => {
            return (
              //fav 자체를 버튼으로 만들고 이걸 detail페이지랑 연결하기 
              //detail에서 이름, 시간, 주소 복사할 때 해당 key값도 같이 복사해서 연결하기...
              <div className="fav" >
                <img className="visited-img" src={title_img} alt="exhibition" />
                <div className="visited-name">{f.name}</div>
                <div className="visited-detail">{f.address}</div>
                <div className="visited-detail">{f.time}</div>
                <hr />
              </div>
            )
          })
        }
        {/* {ing && <div id="display" className="display-ing">
          <i class="fas fa-circle"></i>
          <div className="end">전시중</div>
        </div>}

        {!ing && <div id="display" className="display-end">
          <i class="fas fa-circle"></i>
          <div className="end">전시종료</div>
        </div>} */}

      </div> {/* list-visited */}
    </div>  {/* visited-container */}

  </div>;
};

export default UserVisited;