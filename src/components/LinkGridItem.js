import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    item: {
        // padding: '0px',
        // margin: '5px',
    }
});

const LinkGridItem = props => {
    const classes = useStyles();
    const { title, location } = props;

    return (
        <Grid
            item
            classes={{
                item: classes.item
            }}
        >
            <Link className='book-link' to={ location }>{ title }</Link>
        </Grid>
    );
};


LinkGridItem.propTypes = {
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default LinkGridItem;
