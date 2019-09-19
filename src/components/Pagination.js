import React from 'react';
import propTypes from 'prop-types';

const Pagination = props => {
    const { skip, dispatch, numberOfPages } = props;

    return (
        <ul className="uk-pagination uk-flex-center" data-uk-margin>
            {
                <a
                    href="/#"
                    className={skip > 0 ? '' : 'uk-disabled'}
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
                for (let index = 0; index < numberOfPages; index++) {
                    pages.push(
                        <li key={index + 1}>
                            <a
                                href="/#"
                                className={skip === index ? 'uk-active' : ''}
                                onClick={e => {
                                    e.preventDefault();
                                    dispatch({
                                        type: 'GO_TO_PAGE_NUMBER',
                                        index
                                    });
                                }}
                            >
                                {index + 1}
                            </a>
                        </li>
                    );
                }
                return pages;
            })()}

            {
                <a
                    href="/#"
                    className={skip + 1 < numberOfPages ? '' : 'uk-disabled'}
                    onClick={e => {
                        e.preventDefault();
                        dispatch({ type: 'NAVIGATE_FORWARD' });
                    }}
                >
                    <span>{'>'}</span>
                </a>
            }
        </ul>
    );
};

Pagination.propTypes = {
    skip: propTypes.number,
    dispatch: propTypes.func,
    numberOfPages: propTypes.number
};

export default Pagination;
