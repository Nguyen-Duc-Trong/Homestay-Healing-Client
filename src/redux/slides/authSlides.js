import {actionTypes} from "../actions/actionTypes";
const initState = {
   isLoggedIn: false,
   token: null,
   msg: '',
   username : "",
   phone : "",
   id : "",
   money : 0,
   rules : "",
   avatar : "",
   zalo : "",
   update: false
  }
  const authSlides = (state = initState, action) => {
    switch (action.type) {
      case actionTypes.REGISTER_SUCCESS:
      case actionTypes.LOGIN_SUCCESS:
        console.log(action);
        return{
            ...state,
            isLoggedIn: true,
            token: action.data.token,
            username : action.data.username,
            phone : action.data.phone,
            id : action.data.id,
            money : action.data.money,
            rules : action.data.rules,
            zalo : action.data.zalo,
            avatar : action.data.avatar,
            msg: ''
        }
      case actionTypes.REGISTER_FAIL:
      case actionTypes.LOGIN_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null,
                msg: '',
                update: !state.update
            }
      case actionTypes.LOGOUT:
        return{
          ...state,
          isLoggedIn: false,
          token: null,
          msg: ''
        }
      case actionTypes.CHANGE_INFO : 
        console.log(action.data);
      return {
        ...state,
        username : action.data.name,
        phone : action.data.phone,
        zalo : action.data.zalo,
        avatar : action.data.avatar,
      }
      default:
        return state;
    }
  }
export default authSlides  

