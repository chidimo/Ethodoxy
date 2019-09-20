import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import commActions from '../actions/commActions';
// import utils from '../utils';

const Commentary = ({ match }) => {
    const dispatch = useDispatch();
    const { id } = match.params;
    const { commentary } = useSelector(state => state.commReducer);

    useEffect(() => {
        commActions.getChallonerPaginated()(dispatch);
        // return () => {
        //     drbActions.cleanGetDRBBookById()(dispatch);
        // };
    }, [ id, dispatch ]);

    console.log('comm, ', commentary);
    return (
        <div>

        </div>
    );
};

Commentary.propTypes = {
    match: propTypes.object
};

export default Commentary;
