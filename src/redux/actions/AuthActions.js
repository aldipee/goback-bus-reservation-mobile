import {
  ERROR_LOGIN,
  SET_LOGIN,
  SET_LOADING_AUTH,
  SET_LOGOUT,
  SET_SIGN_UP,
} from './type';
import {API} from '../../config/server';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const setLogin = data => async dispatch => {
  try {
    const res = await axios.post(API.API_URL.concat('auth/login'), data);
    if (res.data.token) {
      await AsyncStorage.setItem('token', res.data.token);
      dispatch({
        type: SET_LOGIN,
        payload: {
          token: res.data.token,
          isProfileCompleted: res.data.isProfileCompleted,
        },
      });
      return true;
    } else {
      console.log('LOFFFI');
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setLogout = () => {
  AsyncStorage.removeItem('token');
  return {
    type: SET_LOGOUT,
  };
};

export const setNewUser = data => async dispatch => {
  try {
    setLoading();
    const res = await axios.post(API.API_URL.concat('auth/register'), data);
    console.log(res);
    if (res.data) {
      dispatch({
        type: SET_SIGN_UP,
      });
    } else {
      console.log('Sign Up Failed');
    }
  } catch (error) {
    console.log(error);
  }
};

// export const setLogin = data => {
//   axios
//     .post(API.API_URL.concat('auth/login'), data)
//     .then(res => {
//       console.log(res);
//       return {
//         type: SET_LOGIN,
//         payload: res.data,
//       };
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

export const setLoading = () => {
  return {
    type: SET_LOADING_AUTH,
  };
};

export const setError = err => {
  return {
    type: ERROR_LOGIN,
    payload: err,
  };
};

export const loginFailed = code => {
  console.error('this error from AUTH ACTIONS', code);
};
