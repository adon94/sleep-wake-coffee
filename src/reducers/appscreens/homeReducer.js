import * as types from '../../constants/actionTypes';
import initialstate from '../initialstate';
export default function (state = initialstate.projectData, action) {
    switch (action.type) {
        case types.RETRIEVE_NEW_DAY:
			return {
				...state
			};
       default:
			return state;
    }
}