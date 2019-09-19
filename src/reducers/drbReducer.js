import { drbAT } from '../actions/actions.types';

const initialState = {
    books: []
};

const drbReducer = (state = initialState, action) => {
    // console.log('action ....', action);
    switch (action.type) {
    case drbAT.GET_DRB_BOOKS:
        return {
            ...state,
            books: action.booklist
        };
    default:
        return state;
    }
};

export default drbReducer;
