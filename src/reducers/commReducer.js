import { challAT } from '../actions/actions.types';

const initialState = {
    results: [],
    count: 0
};

const commReducer = (state = initialState, action) => {
    switch (action.type) {
    case challAT.GET_CHALLONER_PAGINATED:
        return {
            ...state,
            results: action.data.results,
            count: action.data.count,
            next: action.data.next,
            previous: action.data.previous
        };
    default:
        return state;
    }
};

export default commReducer;
