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

import PublicRoute from "./services/PublicRoute";
import PrivateRoute from "./services/PrivateRoute";
import { useSelector } from "react-redux";

let Map = lazy(() => {
  return import("./pages/Map");
});

export let placeData = React.createContext();

const App = () => {
  const [markerState, setMarkerState] = useState(false);
  const [datas, setDatas] = useState([]);

  // useEffect(() => {
  //   const URL = [];
  //   const getURL = [];

  //   for (let i = 0; i < 15; i++) {
  //     URL[
  //       i
  //     ] = `http://api.data.go.kr/openapi/tn_pubr_public_museum_artgr_info_api?serviceKey=BfdusobQEjVcCsm1nVfc3AnA%2BsBih1Corc0TwKt9B%2Ft46CeONaFq%2Bn0%2BxkUnGO9fzeQHPLjXLLCk8aFpYejEbQ%3D%3D&pageNo=${
  //       i + 1
  //     }&numOfRows=100&type=json`;
  //     getURL[i] = axios.get(URL[i]);
  //   }

  //   let copy = [];

  //   axios
  //     .all([...getURL])
  //     .then((res) => {
  //       res.map((v, i) => {
  //         copy.push(...v.data.response.body.items);
  //       });
  //     })
  //     .then(() => {
  //       copy.map((item, i) => {
  //         item.id = i;
  //         // console.log(item, ' here is item');
  //         setDatas((datas) => {
  //           // console.log(datas, " here is datas");
  //           return [...datas, item];
  //         });
  //         return item;
  //       });
  //       setMarkerState(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const isAuthenticated = useSelector((state) => state.infoReducer.id);
  console.log(isAuthenticated);

  return (
    <div className="container">
      <BrowserRouter>
        <PublicRoute
          restricted={true}
          exact
          path="/"
          component={Login}
          isAuthenticated={isAuthenticated}
        />

        <PublicRoute restricted={true} path="/main/login/kakao">
          <Auth />
        </PublicRoute>

        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute
          path="/mypage"
          component={MyPage}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/information"
          component={Information}
          isAuthenticated={isAuthenticated}
        />

        <placeData.Provider value={datas}>
          <PrivateRoute path="/detail/:id" component={Detail} />

          <Suspense fallback={<Loader />}>
            <PrivateRoute path="/map">
              {" "}
              <Map markerState={markerState} />{" "}
            </PrivateRoute>
          </Suspense>
        </placeData.Provider>

        <PrivateRoute path="/favorite" component={UserFavorite} />
        <PrivateRoute path="/visited" component={UserVisited} />
        <PrivateRoute path="/service" component={ServiceCenter} />
        <PrivateRoute path="/notice" component={Notice} />
        <PrivateRoute path="/contactus" component={ContactUs} />
        <PrivateRoute path="/tos" component={Tos} />
        <PrivateRoute path="/noticepost" component={Noticepost} />
        <PrivateRoute path="/introduce" component={Introduce} />
        <PrivateRoute path="/answerpost" component={AnswerPost} />
        <PrivateRoute path="/review" component={ReviewList} />
        <PrivateRoute path="/submit" component={Review} />
      </BrowserRouter>
    </div>
  );
};

export default App;
