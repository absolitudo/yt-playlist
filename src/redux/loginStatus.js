import Cookies from "js-cookie";
import { getUserData } from "./helpers";

const defaultState = getUserData();

const loginStatus = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGOUT":
            return onLogout();
        default:
            return state;
    }
};

const onLogout = () => {
    Cookies.remove("session_token");
    return getUserData();
};

export default loginStatus;
