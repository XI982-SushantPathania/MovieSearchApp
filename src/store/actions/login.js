import * as actionTypes from '../constants';
import axios from 'axios';

export const postLoginCredentials = (credentials) => (
    (dispatch) => {
        dispatch({
            type: actionTypes.SHOW_LOADER
        });
        axios.post(`http://www.omdbapi.com/?t=${credentials.username}&y=${credentials.password}&apikey=937ce691`)
            .then(response => {
                const actionPayload = response.data;
                dispatch({
                    type: actionTypes.POST_LOGIN_SUCCESS,
                    payload: actionPayload
                });
                dispatch({
                    type: actionTypes.HIDE_LOADER
                });
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.POST_LOGIN_FAILURE,
                    payload: error.response.message ? error.response.message : 'Profile not Found',
                });
                setTimeout(() => (dispatch({
                    type: actionTypes.HIDE_LOADER
                })), 2000);
            })
    }
);