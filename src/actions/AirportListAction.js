import ActionTypes from './ActionTypes';
import { API_ENDPOINTS } from '../constants/path'
import axios from 'axios';

export function startup() {
	return dispatch => {
		const batch = [
			dispatch(appLoading()),
		];

		return Promise.all(batch)
			.then(() => {
				dispatch(fetchAirportList());
			})
			.finally(() => {
				dispatch(appLoaded())	
			})
	}
}


export function appLoading() {
	return { type: ActionTypes.FETCH_AIRPORT_APP_LOADING };
}

export function appLoaded() {
	return { type: ActionTypes.FETCH_AIRPORT_APP_LOADED };
}



export function fetchAirportList(){

    return function(dispatch){
        axios.get(API_ENDPOINTS.API_PATH)
            .then((response) => {
                dispatch(fetchAirportListSuccess(response.data));
                console.log('response', response.data);
            })
            .catch((err) => {
                dispatch(fetchAirportListError(err));
            })
    }
}

export const fetchAirportListSuccess = data => ({
   
    type: ActionTypes.FETCH_AIRPORT_LIST_SUCCESS,
    data
});

export const fetchAirportListError = data => ({
    type: ActionTypes.FETCH_AIRPORT_LIST_ERROR,
    data 
});