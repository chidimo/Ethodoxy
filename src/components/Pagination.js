import React from 'react';
import propTypes from 'prop-types';
import { Container } from '@material-ui/core';

const Pagination = props => {
    const { page, dispatch, numberOfPages } = props;

    return (
        <Container>
            {
                <a
                    href="/#"
                    className={page === 1 ? 'disabled' : 'active'}
                    onClick={e => {
                        e.preventDefault();
                        dispatch({ type: 'NAVIGATE_BACKWARD' });
                    }}
                >
                    <span>{'<'}</span>
                </a>
            }

            {(function() {
                const pages = [];
                for (let page = 0; page < numberOfPages; page++) {
                    pages.push(
                        <span key={page + 1}>
                            <a
                                href="/#"
                                className={'skip === page ? \'uk-active\' : \'\''}
                                onClick={e => {
                                    e.preventDefault();
                                    dispatch({
                                        type: 'GO_TO_PAGE_NUMBER',
                                        page: page + 1
                                    });
                                }}
                            >
                                {page + 1}
                            </a>
                        </span>
                    );
                }
                return pages;
            })()}
            {
                <a
                    href="/#"
                    className={page === numberOfPages ? 'active' : 'disabled'}
                    onClick={e => {
                        e.preventDefault();
                        dispatch({ type: 'NAVIGATE_FORWARD' });
                    }}
                >
                    <span>{'>'}</span>
                </a>
            }
        </Container>
    );
};

Pagination.propTypes = {
    page: propTypes.number,
    dispatch: propTypes.func,
    numberOfPages: propTypes.number
};

export default Pagination;
