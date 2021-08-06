import axios from "axios";
const API_URL = "http://localhost:4000/";

export const register = (fname, lname, username, email, password) => {
    return axios.post(API_URL + "users", {
        fname,
        lname,
        username,
        email,
        password
    });
};

export const login = (username, password) => {

    return axios
     .post(API_URL + "login", {
         username, 
         password,
     })
     .then((response) => {
         if (response.data.accessToken){
             localStorage.setItem("user", JSON.stringify(response.data));
         }
         return response.data;
     });
};


export const logout = () => {
    localStorage.removeItem("user");
}

