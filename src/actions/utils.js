import axios from 'axios';
import { default_headers } from '../constants';

const utils = {
    getPaginatedItems: async (rootURL) => {
        let books = [];
        let url = rootURL;
        const config = { headers: { ...default_headers } };
        while (url) {
            const { data } = await axios.get(url, config);
            const { results, next } = data;
            books = books.concat(results);
            url = next;
        }
        return books;
    },
};

export default utils;
