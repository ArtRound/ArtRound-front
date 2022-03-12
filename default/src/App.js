import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom"; //React-Router import

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
import Submit from "./pages/Submit";
import Information from "./pages/Information";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Map from "./pages/Map";

import PublicRoute from "./services/PublicRoute";
import PrivateRoute from "./services/PrivateRoute";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <PublicRoute restricted={true} exact path="/" component={Login} />

        <PublicRoute restricted={true} path="/main/login/kakao">
          <Auth />
        </PublicRoute>

        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>

        <PrivateRoute path="/mypage" component={MyPage} />
        <PrivateRoute path="/information" component={Information} />
        <PrivateRoute path="/detail/:id" component={Detail} />
        <PrivateRoute path="/map" component={Map} />
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
        <PrivateRoute path="/submit" component={Submit} />
      </BrowserRouter>
    </div>
  );
};

export default App;
