import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { GET_DRB_BOOKS } from './actions.types';
import { DR_BOOKS_URL, default_headers } from '../constants';

const get_drb_books_action_creator = booklist => {
    return {
        type: GET_DRB_BOOKS,
        booklist,
    };
};

const get_books = async () => {
    let books = [];
    let url = DR_BOOKS_URL;
    const config = { headers: { ...default_headers } };
    while (url) {
        const { data } = await axios.get(url, config);
        const { results, next } = data;
        books = books.concat(results);
        url = next;
    }
    return books;
};

export const get_drb_books = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        const books = await get_books();
        dispatch(get_drb_books_action_creator(books));
        dispatch(hideLoading());
    };
};
