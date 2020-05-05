import {ERROR_RESERVATIONS, NEW_TOP_UP} from './type';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {API} from '../../config/server';
import {Alert} from 'react-native';

// AsyncStorage.getItem('token', (err, result) => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${result}`;
// });

export const addTopUp = (data, callback) => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    const res = await axios.post(
      API.API_URL.concat('topup/add'),
      {
        nominal: data,
      },
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    if (res.data.status === 'OK') {
      Alert.alert('Top Up request Success!');
      callback(true);
      dispatch({
        type: NEW_TOP_UP,
      });
    } else {
      callback(true);
      Alert.alert('Top Up request failed');
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR_RESERVATIONS,
    });
  }
};
