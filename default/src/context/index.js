import { createContext, useReducer } from "react";
import { ADD_DATA } from "./actionTypes";
import { useEffect } from "react";

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
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem("art_info");
    return localData ? JSON.parse(localData) : {};
  });

  useEffect(() => {
    localStorage.setItem("art_info", JSON.stringify(state), [state]);
  }, [state]);

  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
