/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';

import {name as appName} from './app.json';
import DynamicGrid from './src/components/DynamicGrid';

AppRegistry.registerComponent(appName, () => DynamicGrid);
