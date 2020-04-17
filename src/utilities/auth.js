import Axios from'axios';
import qs from 'qs';

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/`,
    withCredentials: true,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

export const signup = (user)=>{
    debugger
    return axios({
        method: "POST",
        url: "signup",
        data: qs.stringify(user)
    })
    .then((response)=> {
        setUser(response.data);
    })
    .catch((error) => {
        console.log(error);
    });  
};

export const login = (user)=>{
    return axios({
        method: "POST",
        url: "login",
        data: qs.stringify(user)
    })
    .then((response)=> {
        getUser(response.data);
        return response;
    })
    .catch((error) => {
        console.log(error);
    });
};

export const setUser = (user)=> {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = (user)=> {
    return JSON.parse(window.localStorage.getItem("user"));
}

export const logout = (user) => {
    window.localStorage.removeItem('user');
 }
