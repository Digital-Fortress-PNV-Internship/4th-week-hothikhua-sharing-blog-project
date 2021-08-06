import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/";

export const getBlog = () => {
    return axios.get(API_URL + "blog", {headers: authHeader()});
};

export const getComment = () =>{
    return axios.get(API_URL + "comments", {headers: authHeader()});
}

export const getUser = () =>{
    return axios.get(API_URL + "users", {headers: authHeader()});
}

export const getLike = () =>{
    return axios.get(API_URL + "like", {headers: authHeader()});
}

export const getView = () =>{
    return axios.get(API_URL + "view", {headers: authHeader()});
}

