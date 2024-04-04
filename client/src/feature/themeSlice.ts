import { createSlice } from "@reduxjs/toolkit";
import { InitialTheme } from "../types";

// Define initial state for theme slice
const InitialThemeState: InitialTheme = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: InitialThemeState,
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
