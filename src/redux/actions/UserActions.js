import {
  USER_HISTORY,
  USER_PROFILE_DATA,
  ERROR_USER,
  SET_LOADING_USER_DATA,
  DATA_NOT_FOUND_HISTORY_USER,
} from './type';
import {API} from '../../config/server';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Platform} from 'react-native';

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
    const res = await axios.get(API.API_URL.concat('users/profile'));
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
    const query = 'users/history';
    const res = await axios.get(API.API_URL.concat(query));
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

const setLoading = () => {
  return {
    type: SET_LOADING_USER_DATA,
  };
};
