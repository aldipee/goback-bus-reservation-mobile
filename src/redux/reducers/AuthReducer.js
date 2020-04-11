import {
  SET_LOADING_AUTH,
  SET_LOGIN,
  ERROR_LOGIN,
  SET_LOGOUT,
} from '../actions/type';
const initialState = {
  isLogin: false,
  error: null,
  isLoading: false,
  data: [],
  token: null,
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case SET_LOGIN: {
      return {
        ...state,
        isLogin: true,

        data: payload,
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
    default:
      return state;
  }
}
