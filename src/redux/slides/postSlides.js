import {actionTypes} from "../actions/actionTypes";
const initState = {
    post: [],
    msg:'',
    count: 0
}

const postSlides = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            case actionTypes.GET_POSTS_LIMIT: 
            return{
                ...state,
                posts: action.data.response || [],
                msg: action.data.msg || '',
                count: action.count || 0
            }
        default:
            return state;
    }
}

export default postSlides