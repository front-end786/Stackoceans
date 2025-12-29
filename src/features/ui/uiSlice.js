import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCapability: "ai-platforms",
  theme: "dark",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveCapability(state, action) {
      state.activeCapability = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { setActiveCapability, toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;




