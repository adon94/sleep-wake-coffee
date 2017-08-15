/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import Home from './modules/appscreens/Home';
import form from './modules/appscreens/form';

export function registerScreens(store, Provider) {
		Navigation.registerComponent('app.Home', () => Home, store, Provider);
		Navigation.registerComponent('app.form', () => form, store, Provider);
}
