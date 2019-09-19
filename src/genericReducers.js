const genericReducers = {
    paginationReducer: (state, action) => {
        switch (action.type) {
        case 'GO_TO_PAGE_NUMBER':
            return {
                ...state,
                skip: action.index
            };
        case 'NAVIGATE_FORWARD':
            return {
                ...state,
                skip:
                        state.skip + 1 === state.numberOfPages
                            ? state.skip
                            : state.skip + 1
            };
        case 'NAVIGATE_BACKWARD':
            return {
                ...state,
                skip: state.skip === 0 ? state.skip : state.skip - 1
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
