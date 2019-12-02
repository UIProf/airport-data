import ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';



export default function AirportListReducer(state = initialState, action){

    switch(action.type){
        case ActionTypes.FETCH_AIRPORT_APP_LOADING:
            return {
                ...state,
                appLoading: true,
                appLoaderCount: state.appLoaderCount + 1
            };
        case ActionTypes.FETCH_AIRPORT_APP_LOADED:
            return appLoadedHandler(state);
        case ActionTypes.FETCH_AIRPORT_LIST_SUCCESS:{
            return {
                ...state,
                list: action.data
            };
        }
        case ActionTypes.FETCH_AIRPORT_LIST_ERROR:{
            return {
                ...state,
                error: action.data,
                
            }
        }
        default:
        return state;
    }
}

function appLoadedHandler(state) {
    let appLoaderCount = state.appLoaderCount - 1;
    let appLoading;

    // correct the value if it is negative
    if (appLoaderCount < 0)
        appLoaderCount = 0;

    // decide if appLoading should be true of false
    if (appLoaderCount > 0) {
        appLoading = true;
    } else {
        appLoading = false;
    }

    return {...state, appLoading, appLoaderCount};
}