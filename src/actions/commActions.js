// import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import commAC from './commAC';
import utils from '../utils';

const commActions = {
    getChallonerPaginated: () => {
        return async dispatch => {
            dispatch(showLoading());
            const commentary = await utils.getPaginatedItems('/commentary');
            console.log('com', commentary)
            dispatch(commAC.getChallonerPaginated(commentary));
            dispatch(hideLoading());
        };
    },
};

export default commActions;
