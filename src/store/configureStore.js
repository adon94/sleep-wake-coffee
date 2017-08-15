// the central redux store will be used by all components in the project in this file

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {createLogger} from 'redux-logger';

let middleware = [thunk];

if(__DEV__){
    // const reduxImmutableStateInvariant = require('redux-immutable-state-invariant')();
    const logger = createLogger({ collapsed: true});
    middleware = [...middleware, logger];
} else {
    middleware = [...middleware];
}

export default function configureStore(initialState){
    return createStore(rootReducer,
         initialState, 
         applyMiddleware(...middleware)
        );
}