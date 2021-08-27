import { combineReducers } from "redux";
import user from "./user/user.reducers";
import events from "./event/event.reducers";
import userProfile from "./userProfile/userProfile.reducers";

const usedReducers = combineReducers({
  user,
  events,
  userProfile,
});

export default usedReducers;
