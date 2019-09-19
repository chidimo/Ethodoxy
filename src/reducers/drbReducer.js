import { drbAT } from '../actions/actions.types';

const initialState = {
    books: [],
    currentBook: [],
    bookName: ''
};

const drbReducer = (state = initialState, action) => {
    // console.log('action ....', action);
    switch (action.type) {
    case drbAT.GET_DRB_BOOKS:
        return {
            ...state,
            books: action.booklist
        };
    case drbAT.GET_BOOK_BY_ID:
        return {
            ...state,
            currentBook: action.book,
            bookName: action.book[0]['book_name']
        };
    case drbAT.CLEAN_GET_BOOK_BY_ID:
        return {
            ...state,
            currentBook: [],
            bookName: ''
        };
    default:
        return state;
    }
};

export default drbReducer;
