import { createSlice } from '@reduxjs/toolkit'
const initialActiveItem = Number(localStorage.getItem('activeItem')) || 1;
const initialActiveItemNav = Number(localStorage.getItem('activeItemNav')) || 1;
export const main1Slide = createSlice({
  name: "main1",
  initialState: {
    activeItem: initialActiveItem,
    activeItemNav : initialActiveItemNav,
    totalCartRoom: []
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
      localStorage.setItem('activeItem', action.payload); 
    },
    setActiveItemNav: (state, action) => {
      state.activeItemNav = action.payload;
      localStorage.setItem('activeItemNav', action.payload);
    },
    setTotalCartRoom: (state, action) => {
      state.totalCartRoom = action.payload;
    }
  }
});

export const { setActiveItem, setActiveItemNav, setTotalCartRoom } = main1Slide.actions;
export default main1Slide.reducer;