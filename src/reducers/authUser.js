import { SET_AUTH_USER } from '../actions/actions.types';

const auth = (state = 'AUTH_USER_ID', action) => {
    switch (action.type) {
    case SET_AUTH_USER:
        return action.id;
    default:
        return state;
    }
};

export default auth;
