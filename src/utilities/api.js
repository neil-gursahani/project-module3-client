import React from 'react';
import Axios from 'axios';
import qs from 'qs';
    
const axios = Axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

export const createPortfolio = (stock) => {
    return axios({
        method: "POST",
        url: "portfolio",
        data: qs.stringify(stock),
        headers: {"content-type": "application/x-www-form-urlencoded"},
        withCredentials: true
    })
    .then((response)=> {
        setUser(response.data);

    })
    .catch((error) => {
        console.log(error);
    });  
};

export const setUser = (stock)=> {
    window.localStorage.setItem("user", JSON.stringify(stock));
};
