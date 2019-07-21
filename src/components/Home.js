import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import LinkGridItem from './LinkGridItem';

const useStyles = makeStyles({
    container: {
        paddingTop: '20px'
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <Fragment>
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


Home.propTypes = {
    auth: PropTypes.string
};

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Home);
