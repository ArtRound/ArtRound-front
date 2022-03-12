import { createContext, useReducer } from "react";
import { ADD_DATA } from "./actionTypes";

const initialState = {
  art_id: "",
  fcltyNm: "",
  weekdayOperOpenHhmm: "",
  weekdayOperColseHhmm: "",
  holidayOperOpenHhmm: "",
  holidayCloseOpenHhmm: "",
  rstdeInfo: "",
  adultChrge: "",
  yngbgsChrge: "",
  childChrge: "",
  rdnmadr: "",
  phoneNumber: "",
  homepageUrl: "",
  latitude: "",
  longitude: "",
};

const Context = createContext({});

const reducer = (state = initialState, action) => {
  console.log("action ", action);
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
