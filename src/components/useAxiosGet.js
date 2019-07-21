// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { default_headers } from '../constants';

const useAxiosGet = url => {
    const [ data, setData ] = useState(null);
    const getData = async () => {
        const config = { headers: { ...default_headers } };
        const resp = await axios.get(url, config);
        const json = resp.json();
        setData(json);
    };
    useEffect(() => { getData(url); [ url ];});
    return data;
};

export default useAxiosGet;
