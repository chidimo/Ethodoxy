import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import drbAC from './drbAC';
import utils from '../utils';

const drbActions = {
    getDRBBooks: () => {
        return async dispatch => {
            dispatch(showLoading());
            const books = await utils.getPaginatedItems('/books');
            dispatch(drbAC.getDRBBooks(books));
            dispatch(hideLoading());
        };
    },

    getDRBBookById: id => {
        return async dispatch => {
            dispatch(showLoading);
            const { data } = await axios.get(`/chapters/${id}`);
            const book = data.results;
            dispatch(drbAC.getDRBBookById(book));
            dispatch(hideLoading);
        };
    },

    cleanGetDRBBookById: () => {
        return async dispatch => {
            dispatch(drbAC.cleanGetDRBBookById());
        };
    }
};

export default drbActions;
