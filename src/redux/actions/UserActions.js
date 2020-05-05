import {
  USER_HISTORY,
  USER_PROFILE_DATA,
  MY_BOOKING,
  SET_LOADING_USER_DATA,
  DATA_NOT_FOUND_HISTORY_USER,
} from './type';
import {API} from '../../config/server';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// AsyncStorage.getItem('token', (err, result) => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${result}`;
// });
const setToken = () => async dispatch => {
  try {
    const result = await AsyncStorage.getItem('token');
    console.log(result, 'LASTEST TOKEN');
    axios.defaults.headers.common['Authorization'] = `Bearer ${result}`;
  } catch (error) {
    console.log(error);
  }
};

export const loadUserData = () => async dispatch => {
  try {
    setLoading();
    const token = await AsyncStorage.getItem('token');
    const res = await axios.get(API.API_URL.concat('users/profile'), {
      headers: {Authorization: `Bearer ${token}`},
    });
    if (res.data.status) {
      dispatch({
        type: USER_PROFILE_DATA,
        payload: res.data.profileData,
      });
    } else {
      console.log('ERRRORRRR');
    }
  } catch (error) {
    console.log(error);
  }
};

export const loadUserHistory = () => async dispatch => {
  try {
    setToken();
    setLoading();
    const token = await AsyncStorage.getItem('token');
    const query = 'users/history';
    const res = await axios.get(API.API_URL.concat(query), {
      headers: {Authorization: `Bearer ${token}`},
    });
    if (res.data.status === 'OK') {
      dispatch({
        type: USER_HISTORY,
        payload: res.data.history,
      });
    } else {
      dispatch({
        type: DATA_NOT_FOUND_HISTORY_USER,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const loadMybooking = () => async dispatch => {
  try {
    setToken();
    setLoading();
    const token = await AsyncStorage.getItem('token');
    const query = 'users/history';
    const res = await axios.get(API.API_URL.concat(query), {
      headers: {Authorization: `Bearer ${token}`},
    });
    if (res.data.status === 'OK') {
      dispatch({
        type: MY_BOOKING,
        payload: res.data.yourBooking,
      });
    } else {
      dispatch({
        type: DATA_NOT_FOUND_HISTORY_USER,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const setLoading = () => {
  return {
    type: SET_LOADING_USER_DATA,
  };
};
