import {combineReducers} from 'redux';
import {SET_LOGOUT} from '../actions/type';
import SchedulesReducer from './SchedulesReducer';
import AuthReducer from './AuthReducer';
import UserReducers from './UserReducers';
import ReservationReducers from './ReservationReducers';
const appReducer = combineReducers({
  schedulesData: SchedulesReducer,
  authData: AuthReducer,
  userData: UserReducers,
  reservationData: ReservationReducers,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === SET_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
