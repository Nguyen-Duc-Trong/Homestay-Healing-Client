import {actionTypes} from "../actions/actionTypes";

const initState = {
    msg:'',
    categories: [],
    price: [],
    acreage: [],
    province: []
}

const appSlide = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORY:
            return{
                ...state,
                categories: action.categories || [],
                msg: action.msg || '',
            }
        case actionTypes.GET_PRICE:
            return{
                ...state,
                categories: action.price || [],
                msg: action.msg || '',
            }
        case actionTypes.GET_ACREAGE:
            return{
                ...state,
                categories: action.acreage || [],
                msg: action.msg || '',
            }
        default:
            return state;
    }
}

export default appSlide