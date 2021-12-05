import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //React-Router import
import MyPage from "./components/Mypage";
import UserInfo from "./components/UserInfo";
import UserFavorite from "./components/UserFavorite";
import UserVisited from "./components/UserVisited";
import ServiceCenter from "./components/ServiceCenter";
import Detail from "./components/Detail";
import Notice from "./components/Notice";
import ContactUs from "./components/ContactUs";
import Tos from "./components/ToS";
import Noticepost from "./components/noticePost";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={MyPage} />
        <Route path="/info" component={UserInfo} />
        <Route path="/favorite" component={UserFavorite} />
        <Route path="/visited" component={UserVisited} />
        <Route path="/service" component={ServiceCenter} />
        <Route path="/detail" component={Detail} />
        <Route path="/notice" component={Notice} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/tos" component={Tos} />
        <Route path="/noticepost" component={Noticepost} />

      </BrowserRouter>
    </div>
  );
};

export default App;
