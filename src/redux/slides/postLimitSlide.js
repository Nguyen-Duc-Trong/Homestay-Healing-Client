import { createSlice } from '@reduxjs/toolkit'

export const postLimitSlide = createSlice({
  name: "postLimitSlide",
  initialState: {
    postLimit: {},
  },
  reducers: {
    setPostLimit: (state, action) => {
        state.postLimit = action.payload;
      },
  }
});

export const {setPostLimit} = postLimitSlide.actions;
export default postLimitSlide.reducer;