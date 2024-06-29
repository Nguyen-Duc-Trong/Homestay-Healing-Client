// import { createSlice } from "@reduxjs/toolkit";
// export const userSlides = createSlice({
//   name: 'userSlides',
//   initialState: {
//     token: null,
//     isAuthenticated: false,
//   },
//   reducers: {
//     setToken(state, action) {
//       state.token = action.payload;
//       state.isAuthenticated = true;
//     },
//     clearToken(state) {
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//     setLogin(state, action) {
//       state.token = action.payload;
//     },
//   }})
// export const { setToken, clearToken, setLogin } = userSlides.actions;
// export default userSlides.reducer;

const initState = {
  userData: {}
}
const userSlides = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
export default userSlides