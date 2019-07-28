import { GET_DRB_BOOKS } from './actions.types';

const drbActionCreators = {
    getDRBBooksAC: booklist => {
        return {
            type: GET_DRB_BOOKS,
            booklist,
        };
    },
};

export default drbActionCreators;
