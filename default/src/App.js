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
      </BrowserRouter>
    </div>
  );
};

export default App;
