import { Navigation } from 'react-native-navigation';

import Drawer from './modules/global/Drawer';
import Home from './modules/appScreens/Home';
import FirstScreen from './modules/appScreens/FirstScreen'

export function registerScreens(store, Provider) {
    Navigation.registerComponent('app.Home', () => Home, store, Provider);
    Navigation.registerComponent('app.Drawer', () => Drawer);
    Navigation.registerComponent('app.FirstScreen', () => FirstScreen, store, Provider);
}