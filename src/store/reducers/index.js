import { combineReducers } from "redux";
import user from "./user.reducers";

const usedReducers = combineReducers({
  user,
});

export default usedReducers;
