import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //React-Router import
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
import NotFoundPage from "./pages/NotFoundPage";

import PublicRoute from "./services/PublicRoute";
import PrivateRoute from "./services/PrivateRoute";

import { Provider } from "./context";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} exact path="/" component={Login} />

          <PublicRoute restricted={true} path="/main/login/kakao">
            <Auth />
          </PublicRoute>

          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>

          <PrivateRoute path="/mypage" component={MyPage} />
          <PrivateRoute path="/information" component={Information} />
          <PrivateRoute path="/favorite" component={UserFavorite} />
          <PrivateRoute path="/visited" component={UserVisited} />
          <PrivateRoute path="/service" component={ServiceCenter} />
          <PrivateRoute path="/notice" component={Notice} />
          <PrivateRoute path="/contactus" component={ContactUs} />
          <PrivateRoute path="/tos" component={Tos} />
          <PrivateRoute path="/noticepost" component={Noticepost} />
          <PrivateRoute path="/introduce" component={Introduce} />
          <PrivateRoute path="/answerpost" component={AnswerPost} />

          <Provider>
            <Switch>
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/detail/:detailId" component={Detail} />
              <PrivateRoute path="/review" component={ReviewList} />
              <PrivateRoute path="/submit" component={Submit} />
              <PrivateRoute path="*" component={NotFoundPage} />
            </Switch>
          </Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
