import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

//All kinds of ajax requests and logic/conditions to update state of store 
//can be defined in this file.

export default function (state = initialState, action){
    switch(action.type){
        case types.RETRIEVE_COURSE_DETAILS:
        return{
            ...state
        };
        default: return state;
    }
}