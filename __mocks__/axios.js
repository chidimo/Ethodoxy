/* eslint-disable no-undef */
export default {
    post: jest.fn().mockImplementation(() => Promise.resolve({
        data: {
            data: {},
            token: ''
        }
    })),

    get: jest.fn().mockImplementation(() => Promise.resolve({
        books: []
    })),

    defaults: {
        headers: {
            post: {
                'Content-Type': 'application/json',
            },
            common: {}
        },
        baseURL: '',
    }
};
