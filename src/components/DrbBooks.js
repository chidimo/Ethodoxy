import React, { Fragment, useEffect } from 'react';
import titlecase from 'titlecase';
import slugify from 'slugify';

import LoadingBar from 'react-redux-loading-bar';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

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

    useEffect(() => {
        dispatch(get_drb_books());
    }, [ dispatch ]);

    const drbReducer = useSelector(state => state.drbReducer);

    return (
        <Fragment>
            <LoadingBar />
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
                    drbReducer.books
                        .filter(book => book.testament==='old testament')
                        .map(book => {
                            return (
                                <LinkGridItem
                                    key={ book.id }
                                    title={ titlecase(book.name) }
                                    location={ `/douay-rheims-bible/${slugify(book.name)}` }
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
                    drbReducer.books
                        .filter(book => book.testament==='new testament')
                        .map(book => {
                            return (
                                <LinkGridItem
                                    key={ book.id }
                                    title={ titlecase(book.name) }
                                    location={ `/douay-rheims-bible/${slugify(book.name)}` }
                                />
                            );
                        })
                }
            </Grid>
        </Fragment>
    );
};

export default DouayBooks;
