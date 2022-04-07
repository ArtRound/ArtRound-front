// redux-persist 사용
import { createStore } from "redux";

import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import infoReducer from "./modules/info";

// 즐겨찾기, 방문한 페이지 리덕스 JJIN
const favorite_exhibition = [];
const visited_exhibition = {};

function fav_reducer(state = favorite_exhibition, action) {
  if (action.type === "add") {
    let copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === "del") {
    return state.filter((post) => post.id !== action.id);
  }
  return state;
}
// function visited_reducer(state = visited_exhibition, action) {
//   if (action.type === "add") {
//     let copy = [...state];
//     copy.push(action.payload);
//     return copy;
//   } else if (action.type === "del") {
//     return state.filter(post => post.id !== action.id)
//   }
//   return state;
// }

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["infoReducer"],
};

const rootReducer = combineReducers({ fav_reducer, infoReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
