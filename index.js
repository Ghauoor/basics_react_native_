/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
// import Cat from './src/components/Cat';
import Cafe from './src/components/StateComponents';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Cafe);
