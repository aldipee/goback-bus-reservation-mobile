import {
  ADD_NEW_RESERVATIONS,
  SET_LOADING_RESERVATIONS,
  ERROR_RESERVATIONS,
} from '../actions/type';

const initState = {
  error: null,
  isLoading: false,
  reqDone: false,
};

export default function(state = initState, {type, payload}) {
  switch (type) {
    case SET_LOADING_RESERVATIONS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ERROR_RESERVATIONS: {
      return {
        ...state,
        error: payload,
      };
    }

    case ADD_NEW_RESERVATIONS: {
      return {
        ...state,
        reqDone: true,
      };
    }

    default: {
      return state;
    }
  }
}
