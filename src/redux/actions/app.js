// import * as actionTypes from './actionTypes.js'
// import { apiGetCategories } from '../../service/category.js';

// export const getCategories = () => async (dispatch) => {
//     try {
//         const response = await apiGetCategories()
//         if (response?.data.error === 0) {
//             dispatch({
//                 type: actionTypes.GET_CATEGORY,
//                 categories: response.data.response
//             })
//         }else{
//             dispatch({
//                 type: actionTypes.GET_CATEGORY,
//                 msg: response.data.msg,
//                 categories: null
//             })
//         }
//     } catch (error) {
//         dispatch({
//             type: actionTypes.GET_CATEGORY,
//             categories: null
//         })
//     }
// }