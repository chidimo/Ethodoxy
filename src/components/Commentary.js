import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import commActions from '../actions/commActions';
import Pagination from './Pagination';
import genericReducers from '../genericReducers';
import utils from '../utils';

const Commentary = () => {
    const dispatch = useDispatch();
    const { count, results } = useSelector(state => state.commReducer);

    let numberOfPages = Math.ceil(count / 50);
    const [ paginator, paginatorDispatch ] = useReducer(
        genericReducers.paginationReducer,
        { page: 1, numberOfPages }
    );

    useEffect(() => {
        paginatorDispatch({ type: 'UPDATE_NUMBER_OF_PAGES', numberOfPages });
    }, [ numberOfPages ]);

    useEffect(() => {
        commActions.getChallonerPaginated(paginator.page)(dispatch);
        // return () => {
        //     drbActions.cleanGetDRBBookById()(dispatch);
        // };
    }, [ dispatch, paginator ]);

    return (
        <div>
            {results.map((comm, index) => {
                const {
                    id,
                    text,
                    book_name,
                    chapter,
                    verse,
                    book,
                } = comm;
                return (
                    <div key={id}>
                        <p>{utils.formatText(book_name, 'title')} {chapter} v. {verse}</p>
                        <p>
                            {index + 1}. {text}
                        </p>
                        <Link to={`/douay-rheims-bible/book/${book.id}`}>Reference</Link>
                        <hr />
                    </div>
                );
            })}
            <Pagination
                page={paginator.page}
                numberOfPages={numberOfPages}
                dispatch={paginatorDispatch}
            />
        </div>
    );
};

export default Commentary;
