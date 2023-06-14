/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';

import {name as appName} from './app.json';
import TouchableOpacityBasics from './src/components/TouchableOpacityBasics';

AppRegistry.registerComponent(appName, () => TouchableOpacityBasics);
