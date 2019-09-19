import axios from 'axios';

const constants = {
    axiosDefaults: () => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Methods'] =
            'PUT, GET, PATCH, POST';
        axios.defaults.headers.common['Access-Control-Allow-Headers'] =
            'Content-Type';
        axios.defaults.headers.common['Access-Control-Max-Age'] = '3000';
        axios.defaults.baseURL = 'https://ethodoxy.herokuapp.com/api/v1';
    }
};

export default constants;
