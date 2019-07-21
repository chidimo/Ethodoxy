import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import titlecase from 'titlecase';
import slugify from 'slugify';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { DR_BOOKS_URL, default_headers } from '../constants';
import LinkGridItem from './LinkGridItem';

import { get_drb_books } from '../actions/drbActions';

const useStyles = makeStyles({
    container: {
        paddingTop: '20px'
    },
});

const DouayBooks = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ books, setBooks ] = useState([ 'a' ]);

    useEffect(() => {
        const getBooks = async () => {
            let books = [];
            let url = DR_BOOKS_URL;
            const config = { headers: { ...default_headers } };

            while (url) {
                const { data } = await axios.get(url, config);
                const { results, next } = data;
                books = books.concat(results);
                url = next;
            }
            setBooks(books);
            dispatch(get_drb_books(books));
        };
        getBooks();
    }, [ dispatch ]);


    return (
        <Fragment>
            <h2>Douay-Rheims Bible</h2>

            <h3>Old Testament</h3>
            <Grid
                container
                spacing={2}
                classes={{
                    root: classes.container
                }}
            >
                {
                    books
                        .filter(book => book.testament==='old testament')
                        .map(book => {
                            return (
                                <LinkGridItem
                                    key={ book.id }
                                    title={ titlecase(book.name) }
                                    location={ `/${slugify(book.name)}` }
                                />
                            );
                        })
                }
            </Grid>

            <h3>New Testament</h3>
            <Grid
                container
                spacing={2}
                classes={{
                    root: classes.container
                }}
            >
                {
                    books
                        .filter(book => book.testament==='new testament')
                        .map(book => {
                            return (
                                <LinkGridItem
                                    key={ book.id }
                                    title={ titlecase(book.name) }
                                    location={ `/${slugify(book.name)}` }
                                />
                            );
                        })
                }
            </Grid>
        </Fragment>
    );
};

export default DouayBooks;
