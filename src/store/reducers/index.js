import { combineReducers } from "redux";
import user from "./user/user.reducers";
import events from "./event/event.reducers";
import otherUserProfile from "./userProfile/userProfile.reducers";
import usersList from "./usersList/usersList.reducers";

const usedReducers = combineReducers({
  user,
  events,
  otherUserProfile,
  usersList,
});

export default usedReducers;
