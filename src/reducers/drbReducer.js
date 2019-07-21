import { GET_DRB_BOOKS } from '../actions/actions.types';

const drbReducer = (state = {}, action) => {
    // console.log('action ....', action);
    switch(action.type) {
    case GET_DRB_BOOKS:
        return {
            ...state,
            books: action.booklist
        };
    default:
        return state;
    }
};

export default drbReducer;
