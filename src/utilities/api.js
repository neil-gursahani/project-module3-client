import React from 'react';
import axios from 'axios';
    
export function api() {
    axios
        .get('https://cloud.iexapis.com/stable/stock/aapl/chart/date/20200409?sort=desc&token=pk_3d70698b98244ac68901d1cda3a83c2d')
        .then((apiResponse) => {
            console.log(apiResponse.data);
        })
        .catch((error) => {
            console.log("Error in retrieving API data!");
        });
}