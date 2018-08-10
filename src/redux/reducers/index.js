import { combineReducers } from "redux";
import loginState from "./loginState";
import playlists from "./playlists";
import nav from "./nav";
import errors from "./errors";

export default combineReducers({
    loginState,
    nav,
    playlists,
    errors
});
