/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';

import {name as appName} from './app.json';
import NetflixCard from './src/components/NetflixCard';

AppRegistry.registerComponent(appName, () => NetflixCard);
