import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const getUserData = () => {
    const userData = jwt.decode(Cookies.get("session_token"));

    return {
        userName: userData ? userData.title : null,
        thumbnail: userData ? userData.thumbnail : null
    };
};

export { getUserData };
