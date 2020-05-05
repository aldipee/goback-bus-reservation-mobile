import {
  ADD_NEW_RESERVATIONS,
  ERROR_RESERVATIONS,
  SET_LOADING_RESERVATIONS,
} from './type';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {API} from '../../config/server';
import {Alert} from 'react-native';

// AsyncStorage.getItem('token', (err, result) => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${result}`;
// });

export const addNewReservation = (data, callback) => async dispatch => {
  try {
    setLoading();
    const token = await AsyncStorage.getItem('token');
    const res = await axios.post(
      API.API_URL.concat('reservations/purchase'),
      data,
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    if (res.data.status === 'OK') {
      Alert.alert('Reservation Success!');
      callback('order');
      dispatch({
        type: ADD_NEW_RESERVATIONS,
        payload: res.data.status,
      });
    } else {
      Alert.alert('Reservation failed');
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR_RESERVATIONS,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING_RESERVATIONS,
  };
};
