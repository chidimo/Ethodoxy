import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { DR_BOOKS_URL } from '../constants';

import drbActionCreators from './drbActionCreators';
import utils from './utils';

export const getDRBBooks = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        const books = await utils.getPaginatedItems(DR_BOOKS_URL);
        dispatch(drbActionCreators.getDRBBooksAC(books));
        dispatch(hideLoading());
    };
};
