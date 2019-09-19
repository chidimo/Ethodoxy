import axios from 'axios';

const utils = {
    getPaginatedItems: async rootURL => {
        let books = [];
        let url = rootURL;
        while (url) {
            const { data } = await axios.get(url);
            const { results, next } = data;
            books = books.concat(results);
            url = next;
        }
        return books;
    }
};

export default utils;
