import {
  SET_LOADING_AUTH,
  SET_LOGIN,
  ERROR_LOGIN,
  SET_LOGOUT,
  SET_SIGN_UP,
} from '../actions/type';
const initialState = {
  isLogin: false,
  error: null,
  isLoading: false,
  data: [],
  token: null,
  requestDone: false,
  isProfileComplete: false,
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case SET_LOGIN: {
      return {
        ...state,
        isLogin: true,
        isProfileComplete: payload.isProfileCompleted,
        data: payload.token,
      };
    }
    case SET_LOADING_AUTH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_LOGOUT: {
      return {
        ...state,
        isLogin: false,
      };
    }
    case SET_SIGN_UP: {
      return {
        ...state,
        requestDone: true,
      };
    }
    default:
      return state;
  }
}
