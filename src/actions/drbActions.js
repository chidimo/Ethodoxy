import { GET_DRB_BOOKS } from './actions.types';

const get_drb_books_action_creator = booklist => {
    return {
        type: GET_DRB_BOOKS,
        booklist,
    };
};

export const get_drb_books = (book_list) => dispatch => {
    dispatch(get_drb_books_action_creator(book_list));
};
