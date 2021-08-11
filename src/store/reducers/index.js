import { combineReducers } from "redux";
import user from "./user/user.reducers";
import events from "./event/event.reducers";

const usedReducers = combineReducers({
  user,
  events,
});

export default usedReducers;
