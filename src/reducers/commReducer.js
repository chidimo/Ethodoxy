import { challAT } from '../actions/actions.types';

const initialState = {
    commentary: [],
};

const commReducer = (state = initialState, action) => {
    // console.log('action ....', action);
    switch (action.type) {
    case challAT.GET_CHALLONER_PAGINATED:
        return {
            ...state,
            commentary: action.commentary,
        };
    default:
        return state;
    }
};

export default commReducer;
