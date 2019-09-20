import { challAT } from './actions.types';

const commAC = {
    getChallonerPaginated: data => ({
        type: challAT.GET_CHALLONER_PAGINATED,
        data
    })
};

export default commAC;
