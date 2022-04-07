// 액션 타입
const LOGIN_USER = "info/LOGIN_USER";
const LOGOUT_USER = "info/LOGOUT_USER";

// 액션 생성 함수
export const login = (id, profile_image) => ({
  type: LOGIN_USER,
  info: {
    id: id,
    profile_image: profile_image,
  },
});
export const logout = (id, profile_image) => ({
  type: LOGOUT_USER,
  info: {
    id: id,
    profile_image: profile_image,
  },
});

// const info = [{ id: 0, username: "hjs", gender: "여자", age: 21, profile_image:'' }];

// 모듈 초기 상태
const initialState = {
  id: 0,
  profile_image: "",
};

export default function infoReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        id: action.info.id,
        profile_image: action.info.profile_image,
      };

    case LOGOUT_USER:
      return {
        ...state,
        id: "",
        profile_image: "",
      };

    default:
      return state;
  }
}
