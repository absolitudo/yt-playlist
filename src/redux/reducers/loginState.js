import Cookies from "js-cookie";
import { getUserData } from "./helpers";

//const defaultState = getUserData();
const defaultState = {
    userName: "Ákos",
    thumbnail:
        "https://yt3.ggpht.com/-OFMAV2HFRYQ/AAAAAAAAAAI/AAAAAAAAAAA/kO-pFABvLzg/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
};
const loginStatus = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGOUT":
            return onLogout(state);
        default:
            return state;
    }
};

const onLogout = state => {
    Cookies.remove("session_token");
    return { ...state, ...getUserData() };
};

export default loginStatus;
