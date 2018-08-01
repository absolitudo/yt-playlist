import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const userData = jwt.decode(Cookies.get("session_token"));

const defaultState = {
    userName: userData ? userData.title : null,
    thumbnail: userData ? userData.thumbnail : null
};

const loginStatus = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default loginStatus;
