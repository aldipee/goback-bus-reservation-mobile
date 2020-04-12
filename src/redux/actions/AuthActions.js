import {
  ERROR_LOGIN,
  SET_LOGIN,
  SET_LOADING_AUTH,
  SET_LOGOUT,
  SET_SIGN_UP,
  PROFILE_DATA_COMPLETE,
} from './type';
import {API} from '../../config/server';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Platform} from 'react-native';
import {Buffer} from 'buffer';
AsyncStorage.getItem('token', (err, result) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${result}`;
});

export const setLogin = data => async dispatch => {
  try {
    const res = await axios.post(API.API_URL.concat('auth/login'), data);
    await AsyncStorage.removeItem('token');
    console.log(res.data);
    if (res.data.status === 'NOTVERIFIED') {
      ToastAndroid.show(
        'Please verified your account first!',
        ToastAndroid.SHORT,
      );
    } else {
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
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const setLogout = () => {
  AsyncStorage.removeItem('token', err => {
    console.log(err, 'ERROR DELETE TOKEN');
  });

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

export const setProfileUser = data => async dispatch => {
  try {
    setLoading();
    console.log(data);
    // const dataUser = createFormData(data.photo, {
    //   fullName: data.fullName,
    //   bod: data.bod,
    //   gender: data.gender,
    //   phoneNumber: data.phoneNumber,
    //   address: data.fullAddress,
    // });
    const formData = new FormData();
    // formData.append('avatart', {
    //   uri: data.photo.uri,
    //   type: 'image/jpg',
    //   filename: data.photo.fileName,
    // });
    let photo = {
      uri: data.photo.data,
      type: 'image/jpg',
      name: data.photo.fileName,
    };
    const byteCharacters = Buffer.from(data.photo.data, 'base64');

    console.log(data.photo, 'Here from picture');
    formData.append('avatart', byteCharacters);
    formData.append('fullName', data.fullName);
    formData.append('bod', data.bod);
    formData.append('gender', data.gender);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('address', data.fullAddress);
    console.log(formData);
    const res = await axios.post(API.API_URL.concat('users/update'), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    // const res = await axios.post(API.API_URL.concat('users/update'), formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    console.log(res, 'this response from setProfileUser');
    if (res.data.success) {
      dispatch({
        type: PROFILE_DATA_COMPLETE,
      });
      alert('Your data now is completed!');
    } else {
      console.log(res);
    }
  } catch (error) {
    console.error(error, 'aDa error');
  }
};

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append('avatart', {
    name: photo.fileName,
    type: 'image/jpeg',
    uri:
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
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
