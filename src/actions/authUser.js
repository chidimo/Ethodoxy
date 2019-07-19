import { SET_AUTH_USER } from './constants';

// action creator
export const set_auth_action_creator = id => ({ type: SET_AUTH_USER, id });

// action dispatcher
export const set_auth_user = () => {
    return dispatch => {
        return new Promise.resolve('AUTH_USER_ID').then(user => {
            dispatch(set_auth_action_creator(user));
        });
    };
};
