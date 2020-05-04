import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';

import Index from './src/index';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    console.disableYellowBox = true;
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
