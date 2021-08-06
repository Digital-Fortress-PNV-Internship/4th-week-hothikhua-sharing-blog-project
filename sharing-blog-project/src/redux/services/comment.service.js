import axios from 'axios';

const API_URL = "http://localhost:4000/";

export const Comments = (blog_id, username, content, datetime) => {
    return axios.post(API_URL + "comments", {
        blog_id,
        username,
        content,
        datetime
    });
};

