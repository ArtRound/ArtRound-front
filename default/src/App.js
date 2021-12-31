import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"; //React-Router import
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
import Map from "./pages/Map";
import Introduce from "./pages/Introduce";
import AnswerPost from "./pages/AnswerPost";
import ReviewList from "./pages/ReviewList";
import Review from "./pages/Review";
import Information from "./pages/Information";
import KakaoRedirectHandler from "./components/KakaoRedirectHandler";
export let placeData = React.createContext();

const App = () => {
  const isAuthorized = localStorage.getItem("isAuthorized");

  const [markerState, setMarkerState] = useState(false);
  const [datas, setDatas]= useState([]);

  useEffect(()=>{
    const URL = []
    const getURL = []

    for (let i = 0; i < 15; i++) {
      URL[i] = `http://api.data.go.kr/openapi/tn_pubr_public_museum_artgr_info_api?serviceKey=BfdusobQEjVcCsm1nVfc3AnA%2BsBih1Corc0TwKt9B%2Ft46CeONaFq%2Bn0%2BxkUnGO9fzeQHPLjXLLCk8aFpYejEbQ%3D%3D&pageNo=${i + 1}&numOfRows=100&type=json`
      getURL[i] = axios.get(URL[i]);
    }

    let copy = [];
    
    axios.all([...getURL])
      .then((res)=>{
        res.map((v,i)=>{
          copy.push(...v.data.response.body.items);
        })
      })
      .then(()=>{
        copy.map((item,i)=>{
          item.id = i;
          setDatas(datas => {
            return [...datas, item];
          });
          return item;
        });
        setMarkerState(true);
      })
      .catch((error)=>{
        console.log(error);
      })
    },[])
    

  return (
    <div className="container">
      <BrowserRouter>
        {!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/mypage" />}

        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/mypage" component={MyPage} />
        </Switch>

        <placeData.Provider value={datas}>
          <Route path="/detail" component={Detail} />
          <Route path="/map"> <Map markerState={markerState} /> </Route> 
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

        <Route
          path="/main/login/kakao"
          component={KakaoRedirectHandler}
        ></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
