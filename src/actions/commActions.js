import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import commAC from './commAC';

const commActions = {
    getChallonerPaginated: page => {
        return async dispatch => {
            dispatch(showLoading());
            const { data } = await axios.get(`/commentary/?page=${page}`);
            dispatch(commAC.getChallonerPaginated(data));
            dispatch(hideLoading());
        };
    }
};

export default commActions;
