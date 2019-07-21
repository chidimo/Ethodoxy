export const BASE_URL = 'https://ethodoxy.herokuapp.com/api/v1';
export const DR_BOOKS_URL = `${BASE_URL}/books/`;

export const default_headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, GET, PATCH, POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '3000',
};
