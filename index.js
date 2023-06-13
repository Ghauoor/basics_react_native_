/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';

import {name as appName} from './app.json';
import RandomColorGeneratorApp from './src/screens/RandomColorGenerator';
AppRegistry.registerComponent(appName, () => RandomColorGeneratorApp);
