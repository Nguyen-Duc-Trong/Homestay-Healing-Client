import { combineReducers } from 'redux';
import storage from "redux-persist/lib/storage"
import {persistReducer } from "redux-persist"

import authSlides from "./slides/authSlides";
import userSlides from "./slides/userSlides";
import main1Slice from './slides/main1Slide';
import postSlides from './slides/postSlides';
import appSlide from './slides/appSlide';
import searchSlide from './slides/searchSlide'
import postLimitSlide from './slides/postLimitSlide'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2"

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}
const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']
}
const rootReducer = combineReducers({
    auth: persistReducer (authConfig, authSlides),
    user: userSlides,
    main1 : main1Slice,
    post: postSlides,
    app: appSlide,
    search: searchSlide,
    postLimit: postLimitSlide
})
export default rootReducer