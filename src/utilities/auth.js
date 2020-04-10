import Axios from'axios';
import qs from 'qs';

const axios = Axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

export const signup = (user)=>{
    debugger
    return axios({
        method: "POST",
        url: "signup",
        data: qs.stringify(user)
        // headers: {"content-type": "application/x-www-form-urlencoded"}
    })
    .then((response)=> {
        debugger
        setUser(response.data);
    })
    
}

export const login = (user)=>{
    return axios({
        method: "POST",
        url: "login",
        data: qs.stringify(user)
    })
    .then((response)=> {
        setUser(response.data);
    })
}

export const setUser = (user)=> {
    debugger
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = (user)=> {
    return JSON.parse(window.localStorage.getItem("user"));
}
