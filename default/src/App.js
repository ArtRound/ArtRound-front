import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //React-Router import
import MyPage from "./components/Mypage";
import UserInfo from "./components/UserInfo";
import UserFavorite from "./components/UserFavorite";
import UserVisited from "./components/UserVisited";
import ServiceCenter from "./components/ServiceCenter";
import Detail from "./components/Detail";
import Login from "./components/Login";
import "./App.css";
import Notice from "./components/Notice";
import ContactUs from "./components/ContactUs";
import Tos from "./components/ToS";
import Noticepost from "./components/noticePost";
import Map from "../src/components/Map"
import Introduce from "./components/Introduce"
import AnswerPost from "./components/AnswerPost"

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/info" component={UserInfo} />
        <Route path="/favorite" component={UserFavorite} />
        <Route path="/visited" component={UserVisited} />
        <Route path="/service" component={ServiceCenter} />
        <Route path="/detail" component={Detail} />
        <Route path="/notice" component={Notice} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/tos" component={Tos} />
        <Route path="/noticepost" component={Noticepost} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/map" component={Map} />
        <Route path="/answerpost" component={AnswerPost} />
      </BrowserRouter>
    </div>
  );
};

export default App;
