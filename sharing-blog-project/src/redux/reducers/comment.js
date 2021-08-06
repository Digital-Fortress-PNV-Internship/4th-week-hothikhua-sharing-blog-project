import {
    COMMENT_SUCCESS,
    COMMENT_FAIL,
} from "../actions/types";

const initialState = {
    loading: false,
    comments: [],
    error: ''
  }

  export default function Comment (state = initialState, action){
    const {type} = action;

    switch (type){
        case COMMENT_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            };
        case COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            };
        default:
            return state;
    }
}