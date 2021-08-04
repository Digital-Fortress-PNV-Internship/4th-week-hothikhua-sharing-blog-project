import axios from 'axios';

const API_URL = "http://localhost:4000/";

const comments = (blog_id, author_id, content, datetime) => {
    return axios.post(API_URL + "comments", {
        blog_id,
        author_id,
        content,
        datetime
    });
};

export default {
    comments
};