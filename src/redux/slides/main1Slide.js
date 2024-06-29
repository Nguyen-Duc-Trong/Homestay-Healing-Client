import { createSlice } from '@reduxjs/toolkit'
const initialActiveItem = Number(localStorage.getItem('activeItem')) || 1;
const initialActiveItemNav = Number(localStorage.getItem('activeItemNav')) || 1;
export const main1Slide = createSlice({
  name: "main1",
  initialState: {
    activeItem: initialActiveItem,
    activeItemNav : initialActiveItemNav,
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
      localStorage.setItem('activeItem', action.payload); // Cập nhật localStorage mỗi khi giá trị thay đổi
    },
    setActiveItemNav: (state, action) => {
      state.activeItemNav = action.payload;
      localStorage.setItem('activeItemNav', action.payload); // Cập nhật localStorage mỗi khi giá trị thay đổi
    },
  }
});

export const { setActiveItem, setActiveItemNav } = main1Slide.actions;
export default main1Slide.reducer;