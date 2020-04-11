import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

import Index from './src/index';

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
