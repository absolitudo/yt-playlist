import { combineReducers } from "redux";
import loginState from "./loginState";
import nav from "./nav";

export default combineReducers({
    loginState,
    nav
});
