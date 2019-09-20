const genericReducers = {
    paginationReducer: (state, action) => {
        switch (action.type) {
        case 'GO_TO_PAGE_NUMBER':
            return {
                ...state,
                page: action.page
            };
        case 'NAVIGATE_FORWARD':
            return {
                ...state,
                page:
                        state.page === state.numberOfPages
                            ? state.page
                            : state.page + 1
            };
        case 'NAVIGATE_BACKWARD':
            return {
                ...state,
                page: state.page === 1 ? state.page : state.page - 1
            };
        case 'UPDATE_NUMBER_OF_PAGES':
            return {
                ...state,
                numberOfPages: action.numberOfPages
            };
        default:
            return state;
        }
    },

    errorSuccessReducer: (state, action) => {
        switch (action.type) {
        case 'UPDATE_FORM_ERROR_STATE':
            return {
                ...state,
                error: action.error,
                errorMsg: action.errorMsg
            };
        case 'UPDATE_OPERATION_SUCCESS':
            return {
                ...state,
                success: action.success
            };
        default:
            return state;
        }
    }
};

export default genericReducers;
