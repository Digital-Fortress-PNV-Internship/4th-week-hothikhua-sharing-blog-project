import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/";

const getBlog = () => {
    return axios.get(API_URL + "blog", {headers: authHeader()});
};

const getComment = () =>{
    return axios.get(API_URL + "comments", {headers: authHeader()});
}

const getUser = () =>{
    return axios.get(API_URL + "users", {headers: authHeader()});
}

const getLike = () =>{
    return axios.get(API_URL + "like", {headers: authHeader()});
}

const getView = () =>{
    return axios.get(API_URL + "view", {headers: authHeader()});
}

export default {
    getBlog,
    getComment,
    getUser,
    getLike,
    getView,
};
