/**
 * @format
 */

import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// this is from react navtie gesture handler
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
