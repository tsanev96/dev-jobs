import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { AppDispatch, RootState } from "./index";

interface DarkModeType {
  isDarkMode: boolean;
}

const slice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    darkModeToggled: (state, action: PayloadAction<DarkModeType>) => {
      state.isDarkMode = action.payload.isDarkMode;
    },
  },
});

// TODO encaps
export const { darkModeToggled } = slice.actions;
export default slice.reducer;

export const getCurrentMode = createSelector(
  (state: RootState) => state.entities.darkMode,
  (isDarkMode) => isDarkMode
);

export const toggleDarkMode =
  (currentMode: boolean) => (dispatch: AppDispatch, state: RootState) => {
    dispatch(darkModeToggled({ isDarkMode: currentMode }));
  };
