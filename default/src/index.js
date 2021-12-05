import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {Provider} from 'react-redux';
import { createStore } from 'redux';


let 기본stete = [
  { heart : 4, name : '디자인도둑', date : '2021.08.07', content : '와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ', img : null},
  { heart : 0, name : 'name-aaaa', date : '1997.02.17', content : '와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ', img : null},
  { heart : 2, name : 'name-bbb', date : '2020.05.07', content : '와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ', img : null},
  { heart : 2, name : 'name-ccc', date : '2021.08.07', content : '와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ', img : null},
  { heart : 1, name : 'name-ddd', date : '2021.08.07', content : '와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ', img : null},
  { heart : 5, name : 'name-eee', date : '2000.10.22', content : '와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ', img : null},
  { heart : 4, name : 'name-ffff', date : '2018.12.25', content : '와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ', img : null},
  { heart : 3, name : 'name-ggggg', date : '2019.11.27', content : '와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ', img : null},
  { heart : 5, name : 'name-qqqqqqq', date : '2020.10.22', content : '와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ', img : null}
];

function reducer(state = 기본stete, action){
  if(action.type === 'add'){
    let copy = [...state];
    copy.push(action.payload);
    return copy;
  }else if(action.type === 'sortUp'){
    let copy = [...state];
    copy = copy.sort((a,b)=> b.heart - a.heart);
    return copy;
  }else if(action.type === 'sortDown'){
    let copy = [...state];
    copy = copy.sort((a,b)=> a.heart - b.heart);
    return copy;
  }else if(action.type === 'sortDate'){
    let copy = [...state];
    return copy;
  }
  return state
}

let store = createStore(reducer);




ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
