import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
// "Ákos Kóczián"
// "https://yt3.ggpht.com/-OFMAV2HFRYQ/AAAAAAAAAAI/AAAAAAAAAAA/kO-pFABvLzg/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
const getUserData = () => {
    const userData = jwt.decode(Cookies.get("session_token"));

    return {
        userName: userData ? userData.title : null,
        thumbnail: userData ? userData.thumbnail : null
    };
};

export { getUserData };
