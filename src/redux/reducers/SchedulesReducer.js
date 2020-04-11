import {
  SET_LOADING_SCHEDULES,
  UPDATE_CALENDAR_TO_STATE,
  ERROR_SCHEDULES,
  LOAD_SCHEDULES,
  LOAD_ROUTES,
} from '../actions/type';
const initialState = {
  selectedDate: '',
  isLoading: false,
  error: null,
  schedulesData: [],
  singleScheduleData: {},
  routes: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_SCHEDULES: {
      return {
        ...state,
        isLoading: false,
        schedulesData: action.payload,
      };
    }
    case UPDATE_CALENDAR_TO_STATE: {
      return {
        ...state,
        selectedDate: action.payload,
      };
    }
    case SET_LOADING_SCHEDULES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ERROR_SCHEDULES: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LOAD_ROUTES: {
      return {
        ...state,
        routes: action.payload,
      };
    }

    default:
      return state;
  }
}
