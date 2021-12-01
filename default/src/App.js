import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //React-Router import
import MyPage from "./components/Mypage";
import UserInfo from "./components/UserInfo";
import UserFavorite from "./components/UserFavorite";
import UserVisited from "./components/UserVisited";
import ServiceCenter from "./components/ServiceCenter";
import Detail from "./components/Detail";
import Map from "../src/components/Map"

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
        <Route path="/map" component={Map} />
      </BrowserRouter>
    </div>
  );
};

export default App;
