import {
    COMMENT_SUCCESS,
    COMMENT_FAIL,
    SET_MESSAGE
} from './types';

import CommentService from "../services/auth.service"

 export const comments = (blog_id, author_id, content, datetime) => (dispatch) => {
    return CommentService.register(blog_id, author_id, content, datetime).then (
        (response)=>{
            dispatch({
                type: COMMENT_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message)||
                error.message||
                error.toString();

            dispatch({
                type: COMMENT_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};