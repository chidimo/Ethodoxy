import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import titlecase from 'titlecase';
import slugify from 'slugify';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const bookStyles = makeStyles({
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

const DouayBooks = () => {
    const bookClasses = bookStyles();
    const itemClasses = itemStyles();

    const drbReducer = useSelector(state => state.drbReducer);

    return (
        <Fragment>
            <h2>Douay-Rheims Bible</h2>

            <h3>Old Testament</h3>
            <Grid
                container
                spacing={2}
                classes={{
                    root: bookClasses.container
                }}
            >
                {drbReducer.books
                    .filter(book => book.testament === 'old testament')
                    .map(book => {
                        const { id, name } = book;
                        const location = `/douay-rheims-bible/${slugify(name)}`;
                        return (
                            <Grid
                                key={id}
                                item
                                classes={{
                                    item: itemClasses.item
                                }}
                            >
                                <Link className="book-link" to={location}>
                                    {titlecase(name)}
                                </Link>
                            </Grid>
                        );
                    })}
            </Grid>

            <h3>New Testament</h3>
            <Grid
                container
                spacing={2}
                classes={{
                    root: bookClasses.container
                }}
            >
                {drbReducer.books
                    .filter(book => book.testament === 'new testament')
                    .map(book => {
                        const { id, name } = book;
                        const location = `/douay-rheims-bible/${slugify(name)}`;
                        return (
                            <Grid
                                key={id}
                                item
                                classes={{
                                    item: itemClasses.item
                                }}
                            >
                                <Link className="book-link" to={location}>
                                    {titlecase(name)}
                                </Link>
                            </Grid>
                        );
                    })}
            </Grid>
        </Fragment>
    );
};

export default DouayBooks;
