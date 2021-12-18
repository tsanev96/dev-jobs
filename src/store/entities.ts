import { combineReducers } from "redux";
import darkModeReducer from "./darkMode";

export const entities = combineReducers({
  darkMode: darkModeReducer,
});
