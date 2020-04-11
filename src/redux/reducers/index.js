import {combineReducers} from 'redux';

import SchedulesReducer from './SchedulesReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  schedulesData: SchedulesReducer,
  authData: AuthReducer,
});
