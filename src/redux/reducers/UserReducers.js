import {
  SET_LOADING_USER_DATA,
  USER_PROFILE_DATA,
  USER_HISTORY,
  ERROR_USER,
  MY_BOOKING,
} from '../actions/type';

const initState = {
  singleData: {},
  isLoading: false,
  history: [],
  error: null,
  myBooking: [],
};

export default function(state = initState, action) {
  switch (action.type) {
    case SET_LOADING_USER_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case USER_PROFILE_DATA: {
      return {
        ...state,
        singleData: action.payload,
        isLoading: false,
      };
    }

    case USER_HISTORY: {
      return {
        ...state,
        history: action.payload,
        isLoading: false,
      };
    }
    case MY_BOOKING: {
      return {
        ...state,
        myBooking: action.payload,
      };
    }
    case ERROR_USER: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
