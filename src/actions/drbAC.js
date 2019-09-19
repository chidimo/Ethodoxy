import { drbAT } from './actions.types';

const drbAC = {
    getDRBBooks: booklist => ({
        type: drbAT.GET_DRB_BOOKS,
        booklist
    }),

    getDRBBookById: book => ({
        type: drbAT.GET_BOOK_BY_ID,
        book
    }),

    cleanGetDRBBookById: () => ({
        type: drbAT.CLEAN_GET_BOOK_BY_ID
    })
};

export default drbAC;
