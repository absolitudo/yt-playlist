import { combineReducers } from "redux";
import loginState from "./loginState";
import nav from "./nav";
import errors from "./errors";
import managePlaylists from "./managePlaylists";

export default combineReducers({
    loginState,
    nav,
    errors,
    managePlaylists
});
