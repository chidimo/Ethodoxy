import axios from 'axios';
import titlecase from 'titlecase';

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
    },

    formatText: (text, textCase) => {
        switch (textCase) {
        case 'upper':
            return text.toUpperCase();

        case 'lower':
            return text.toLowerCase();

        case 'title':
            return titlecase(text);

        default:
            return text;
        }
    },
};

export default utils;
