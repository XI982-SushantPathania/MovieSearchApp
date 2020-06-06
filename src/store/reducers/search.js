import * as actionTypes from '../constants';

const initialState = {
    movieSearchData: null,
    isLoading: false,
    errorData: {
        hasError: false,
        severity: 'error',
        errorMsg: '',
    },
};

const searchReducer = (state = initialState, action) => {
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
        case actionTypes.POST_SEARCH_SUCCESS:
            console.log("insideSEARCHreducer",action.payload)
            return {
                ...state,
                movieSearchData: action.payload,
            };
        case actionTypes.POST_SEARCH_FAILURE:
            return {
                ...state,
                errorData: {
                    hasError: true,
                    severity: 'error',
                    errorMsg: action.payload.message ? action.payload.message : "Movie not found"
                }
            };
        default:
            return state;
    }
};

export default searchReducer;