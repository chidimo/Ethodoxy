import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import LoadingBar from 'react-redux-loading-bar';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import drbActions from '../actions/drbActions';

const useHomeStyles = makeStyles({
    container: {
        paddingTop: '20px'
    }
});

const itemStyles = makeStyles({
    item: {
        // padding: '0px',
        // margin: '5px',
    }
});

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        drbActions.getDRBBooks()(dispatch);
    }, [ dispatch ]);

    const itemClasses = itemStyles();
    const homeClasses = useHomeStyles();

    const books = [
        { id: 1, title: 'Douay-Rheims Bible', location: '/douay-rheims-bible' },
        { id: 2, title: 'Challoner Commentary', location: '/commentary/challoner' }
    ];

    return (
        <Fragment>
            <LoadingBar />
            <h2>Available titles</h2>
            <Grid
                container
                spacing={2}
                classes={{
                    root: homeClasses.container
                }}
            >
                {books.map(book => {
                    const { id, title, location } = book;
                    return (
                        <Grid
                            key={id}
                            item
                            classes={{
                                item: itemClasses.item
                            }}
                        >
                            <Link className={'book-link'} to={location}>
                                {title}
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </Fragment>
    );
};

export default Home;
