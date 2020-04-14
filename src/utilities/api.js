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
        url: "stocks",
        data: qs.stringify(stock)
    })
    .then((response)=> {
      
    })
    .catch((error) => {
        console.log(error);
    });  
};