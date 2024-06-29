import {actionTypes} from '../actionTypes'
import { apiLogin } from '../../../service/auth'


export const loginn = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload)
        if (response?.data.error === 0) {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data.token
            })
        }else{
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            data: null
        })
    }
}

// export default loginn