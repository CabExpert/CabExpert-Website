import { combineReducers } from "@reduxjs/toolkit";
// import counterReducer from './counterSlice';
import packageReducer from "./packageSlice";

const rootReducer = combineReducers({
  //   counter: counterReducer,
  package: packageReducer, // Add the package reducer here
});

export default rootReducer;
