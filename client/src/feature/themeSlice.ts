import { createSlice } from "@reduxjs/toolkit";
import { InitialTheme } from "../types";

// Define initial state for theme slice
const InitialTheme: InitialTheme = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: InitialTheme,
  reducers: {
    // Reducer function to toggle dark mode
    changeTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Export action creators and reducer
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
