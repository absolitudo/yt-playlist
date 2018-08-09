import { combineReducers } from "redux";
import loginState from "./loginState";
import playlists from "./playlists";
import nav from "./nav";

export default combineReducers({
    loginState,
    nav,
    playlists
});
