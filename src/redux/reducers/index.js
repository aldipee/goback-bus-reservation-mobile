import {combineReducers} from 'redux';

import SchedulesReducer from './SchedulesReducer';
import AuthReducer from './AuthReducer';
import UserReducers from './UserReducers';

export default combineReducers({
  schedulesData: SchedulesReducer,
  authData: AuthReducer,
  userData: UserReducers,
});
