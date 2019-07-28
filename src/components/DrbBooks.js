import React, { Fragment } from 'react';
import titlecase from 'titlecase';
import slugify from 'slugify';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import LinkGridItem from './LinkGridItem';


const useStyles = makeStyles({
    container: {
        paddingTop: '20px'
    },
});

const DouayBooks = () => {
    const classes = useStyles();


    const drbReducer = useSelector(state => state.drbReducer);

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
