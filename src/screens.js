import { Navigation } from 'react-native-navigation';

import Home from './modules/appScreens/Home';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('app.Home', () => Home, store, Provider);
}