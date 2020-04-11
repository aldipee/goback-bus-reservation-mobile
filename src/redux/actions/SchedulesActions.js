import {
  SET_LOADING_SCHEDULES,
  UPDATE_CALENDAR_TO_STATE,
  LOAD_SCHEDULES,
  LOAD_ROUTES,
} from './type';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {API} from '../../config/server';

AsyncStorage.getItem('token', (err, result) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${result}`;
});

export const setDate = selectedDate => async dispatch => {
  try {
    dispatch({
      type: UPDATE_CALENDAR_TO_STATE,
      payload: selectedDate,
    });
  } catch (error) {
    console.log('Heloo', error);
  }
};

export const loadSchedules = query => async dispatch => {
  try {
    setLoading();
    const urlQuery = `schedules${query}&limit=5&sortBy=time&sort=1`;
    // const query = API.API_URL.concat(
    //   'schedules?sortBy=time&date=2020-04-04&sort=1&origin=BDG&destination=SMG',
    // );

    const res = await axios.get(API.API_URL.concat(urlQuery));
    console.log(res);
    dispatch({
      type: LOAD_SCHEDULES,
      payload: res.data.data,
    });
  } catch (error) {
    console.log('DODO', error.message);
  }
};

export const loadRoutes = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(API.API_URL.concat('routes?show=all'));
    console.log(res.data.data);
    let routes = res.data.data.map((dest, index) => ({
      Id: index,
      Value: `${dest.origin_code}-${dest.destination_code}`,
      Name: `${dest.origin} (${dest.origin_code}) - ${dest.destination} (${
        dest.destination_code
      })`,
    }));
    dispatch({
      type: LOAD_ROUTES,
      payload: routes,
    });
  } catch (error) {
    console.log('This is from Schedules Actions', error.message);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING_SCHEDULES,
  };
};
