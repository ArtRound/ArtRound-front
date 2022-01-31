// redux-persist 사용
import { createStore } from "redux";

import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

let 기본stete = [
  {
    heart: 4,
    name: "디자인도둑",
    date: "2021.08.07",
    content:
      "와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ",
    img: null,
  },
  {
    heart: 0,
    name: "name-aaaa",
    date: "1997.02.17",
    content:
      "와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ",
    img: null,
  },
  {
    heart: 2,
    name: "name-bbb",
    date: "2020.05.07",
    content:
      "와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ",
    img: null,
  },
  {
    heart: 2,
    name: "name-ccc",
    date: "2021.08.07",
    content:
      "와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ",
    img: null,
  },
  {
    heart: 1,
    name: "name-ddd",
    date: "2021.08.07",
    content:
      "와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ",
    img: null,
  },
  {
    heart: 5,
    name: "name-eee",
    date: "2000.10.22",
    content:
      "와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ",
    img: null,
  },
  {
    heart: 4,
    name: "name-ffff",
    date: "2018.12.25",
    content:
      "와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ",
    img: null,
  },
  {
    heart: 3,
    name: "name-ggggg",
    date: "2019.11.27",
    content:
      "와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ",
    img: null,
  },
  {
    heart: 5,
    name: "name-qqqqqqq",
    date: "2020.10.22",
    content:
      "와 장난 아니네욤ㄴㅇㄴㅁㅇㅁㄴㅇㅇㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ",
    img: null,
  },
];

function reducer(state = 기본stete, action) {
  if (action.type === "add") {
    let copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === "sortUp") {
    let copy = [...state];
    copy = copy.sort((a, b) => b.heart - a.heart);
    return copy;
  } else if (action.type === "sortDown") {
    let copy = [...state];
    copy = copy.sort((a, b) => a.heart - b.heart);
    return copy;
  } else if (action.type === "sortDate") {
    let copy = [...state];
    return copy;
  }
  return state;
}

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

// const info = [{ id: 0, username: "hjs", gender: "여자", age: 21, existing_user:false }];
const initialInfoState = {
  access_token: null,
  username: null,
  gender: null,
  age: null,
  profile_image: null,
};

function infoReducer(state = initialInfoState, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        access_token: action.payload.access_token,
        username: action.payload.username,
        gender: action.payload.gender,
        age: action.payload.age,
        profile_image: action.payload.profile_image,
      };

    case "logout":
      return {
        ...state,
        existing_user: action.payload.existing_user,
        detail_info: action.payload.detail_info,
      };

    default:
      return state;
  }
}

// https://kyounghwan01.github.io/blog/React/redux/redux-persist/#%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5
const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["infoReducer"],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({ reducer, fav_reducer, infoReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
