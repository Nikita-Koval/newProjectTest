import { combineReducers } from "redux";
import user from "./login.reducers";

const usedReducers = combineReducers({
  user,
});

export default usedReducers;
