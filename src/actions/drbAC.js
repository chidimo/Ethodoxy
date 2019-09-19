import { drbAT } from './actions.types';

const drbAC = {
    getDRBBooks: booklist => ({
        type: drbAT.GET_DRB_BOOKS,
        booklist
        };
    }
};

export default drbAC;
