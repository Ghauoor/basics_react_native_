/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';

import {name as appName} from './app.json';
import ListViewsComponent from './src/components/ListViewsComponent';

AppRegistry.registerComponent(appName, () => ListViewsComponent);
