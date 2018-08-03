import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const getUserData = () => {
    const userData = jwt.decode(Cookies.get("session_token"));

    if (userData && !(userData.exp * 1000 < Date.now())) {
        return {
            userName: userData.title,
            thumbnail: userData.thumbnail
        };
    }

    return {
        userName: null,
        thumbnail: null
    };
};

export { getUserData };
