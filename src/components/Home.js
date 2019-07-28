import React, { Fragment, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import LoadingBar from 'react-redux-loading-bar';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import LinkGridItem from './LinkGridItem';

import { getDRBBooks } from '../actions/drbActions';

const useStyles = makeStyles({
    container: {
        paddingTop: '20px'
    },
});

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        getDRBBooks()(dispatch);
    }, [ dispatch ]);

    const classes = useStyles();

    return (
        <Fragment>
            <LoadingBar />
            <h2>Available titles</h2>
            <Grid
                container
                spacing={2}
                classes={{
                    root: classes.container
                }}
            >
                <LinkGridItem title='Douay-Rheims Bible' location='/douay-rheims-bible' />
                <LinkGridItem title='Challoner Commentary' location='/challoner' />
            </Grid>
        </Fragment>
    );
};

export default Home;
