import {combineReducers} from 'redux';
import homeReducer from './appScreens/homeReducer';

// rootReducer is responsible for combining all 
// page level reducers in a single entity.

const rootReducer = combineReducers({ homeReducer });

export default rootReducer;