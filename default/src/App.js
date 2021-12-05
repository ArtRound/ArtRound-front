import React from "react";
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
import Map from "./pages/Map"
import Introduce from "./pages/Introduce"
import AnswerPost from "./pages/AnswerPost"
import ReviewList from './pages/ReviewList';
import Review from './pages/Review';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/" exact component={Login} />
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
        <Route path='/review' component={ReviewList} />
        <Route path='/submit' component={Review} />
        <Route path='/mypage' component={MyPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
