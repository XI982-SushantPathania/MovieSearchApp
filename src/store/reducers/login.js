import * as actionTypes from '../constants';

const initialState = {
    movieData: null,
    isLoading: false,
    errorData: {
        hasError: false,
        severity: 'error',
        errorMsg: '',
    },
};

const loginCredentialsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_LOADER:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.HIDE_LOADER:
            return {
                ...state,
                isLoading: false,
            };
        case actionTypes.POST_LOGIN_SUCCESS:
            return {
                ...state,
                movieData: action.payload,
            };
        case actionTypes.POST_LOGIN_FAILURE:
            return {
                ...state,
                errorData: {
                    hasError: true,
                    severity: 'error',
                    errorMsg: action.payload.message ? action.payload.message : action.payload
                }
            };
        default:
            return state;
    }
};

export default loginCredentialsReducer;