import * as actionTypes from '../constants';
import axios from 'axios';


export const postSearch = searchValue =>(
    (dispatch) => {
        dispatch({
            type: actionTypes.SHOW_LOADER
        });
        axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => {
                console.log("response",response.data.Response);
                const actionPayload = response.data;
                dispatch({
                    type: actionTypes.POST_SEARCH_SUCCESS,
                    payload: actionPayload
                });
                dispatch({
                    type: actionTypes.HIDE_LOADER
                });
            })
            .catch(error => {
                console.log("error",error);
                dispatch({
                    type: actionTypes.POST_SEARCH_FAILURE,
                    payload: error.response.message ? error.response.message : 'Movie not Found',
                });
                setTimeout(() => (dispatch({
                    type: actionTypes.HIDE_LOADER
                })), 2000);
            })
    }
);