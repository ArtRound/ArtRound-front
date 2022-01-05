import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom"; //React-Router import
import axios from "axios";

import MyPage from "./pages/Mypage";
import UserFavorite from "./pages/UserFavorite";
import UserVisited from "./pages/UserVisited";
import ServiceCenter from "./pages/ServiceCenter";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import "./App.css";
import Notice from "./pages/Notice";
import ContactUs from "./pages/ContactUs";
import Tos from "./pages/ToS";
import Noticepost from "./pages/noticePost";
import Introduce from "./pages/Introduce";
import AnswerPost from "./pages/AnswerPost";
import ReviewList from "./pages/ReviewList";
import Review from "./pages/Review";
import Information from "./pages/Information";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Loader from "./components/Loader";

let Map = lazy(()=>{ return import('./pages/Map')});

export let placeData = React.createContext();

const App = () => {
  const isAuthorized = localStorage.getItem("isAuthorized");

  const [markerState, setMarkerState] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const URL = [];
    const getURL = [];

    for (let i = 0; i < 15; i++) {
      URL[
        i
      ] = `http://api.data.go.kr/openapi/tn_pubr_public_museum_artgr_info_api?serviceKey=BfdusobQEjVcCsm1nVfc3AnA%2BsBih1Corc0TwKt9B%2Ft46CeONaFq%2Bn0%2BxkUnGO9fzeQHPLjXLLCk8aFpYejEbQ%3D%3D&pageNo=${
        i + 1
      }&numOfRows=100&type=json`;
      getURL[i] = axios.get(URL[i]);
    }

    let copy = [];

    axios
      .all([...getURL])
      .then((res) => {
        res.map((v, i) => {
          copy.push(...v.data.response.body.items);
        });
      })
      .then(() => {
        copy.map((item, i) => {
          item.id = i;
          // console.log(item, ' here is item');
          setDatas((datas) => {
            // console.log(datas, " here is datas");
            return [...datas, item];
          });
          return item;
        });
        setMarkerState(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        {/* {!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/mypage" />} */}

        <Route exact path="/" component={Login} />
        <Route path="/main/login/kakao">
          <Auth />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/mypage" component={MyPage} />

        <placeData.Provider value={datas}>
          <Route path="/detail/:id" component={Detail} />

          <Suspense fallback={<Loader/>}>
            <Route path="/map">
              {" "}
              <Map markerState={markerState} />{" "}
            </Route>
          </Suspense>
          
        </placeData.Provider>

        <Route path="/favorite" component={UserFavorite} />
        <Route path="/visited" component={UserVisited} />
        <Route path="/service" component={ServiceCenter} />
        <Route path="/notice" component={Notice} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/tos" component={Tos} />
        <Route path="/noticepost" component={Noticepost} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/answerpost" component={AnswerPost} />
        <Route path="/review" component={ReviewList} />
        <Route path="/submit" component={Review} />

        <Route path="/information" component={Information} />
      </BrowserRouter>
    </div>
  );
};

export default App;
