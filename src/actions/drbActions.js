import { showLoading, hideLoading } from 'react-redux-loading-bar';

import constants from '../constants';

import drbAC from './drbAC';
import utils from '../utils';

const drbActions = {
    getDRBBooks: () => {
        const DR_BOOKS_URL = `${constants.BASE_URL}/books/`;
        return async dispatch => {
            dispatch(showLoading());
            const books = await utils.getPaginatedItems(DR_BOOKS_URL);
            dispatch(drbAC.getDRBBooks(books));
            dispatch(hideLoading());
        };
    },
};

export default drbActions;
