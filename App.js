import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

import Home from './src/Home';
import Login from './src/screen/Login';
import Schedules from './src/screen/SchedulesListsScreen';
import SignUp from './src/screen/SignUp';
import Calendar from './src/screen/Date';
import Index from './src/index';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Index />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
