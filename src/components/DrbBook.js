import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import drbActions from '../actions/drbActions';
import utils from '../utils';

const DrbBook = ({ match }) => {
    const dispatch = useDispatch();
    const { id } = match.params;
    const { currentBook, bookName } = useSelector(state => state.drbReducer);

    useEffect(() => {
        drbActions.getDRBBookById(id)(dispatch);
        return () => {
            drbActions.cleanGetDRBBookById()(dispatch);
        };
    }, [ id, dispatch ]);
    return (
        <div>
            <h2>{utils.formatText(bookName || '', 'title')}</h2>
            {currentBook.map((book, index) => {
                const { id, text } = book;
                return (
                    <div key={id}>
                        <p>
                            {index + 1}. {text}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

DrbBook.propTypes = {
    match: propTypes.object
};

export default DrbBook;
