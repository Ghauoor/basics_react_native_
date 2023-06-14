/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';

import {name as appName} from './app.json';
import ToggleComponents from './src/hooks/ToggleComponent';

AppRegistry.registerComponent(appName, () => ToggleComponents);
