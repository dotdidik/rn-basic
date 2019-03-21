import { AppRegistry } from 'react-native';
import {name as appName} from './app.json';
import TabNavigator  from './src/components/AppRouter';

AppRegistry.registerComponent(appName, () => TabNavigator);
