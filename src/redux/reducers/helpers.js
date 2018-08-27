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

const showUnavailableFilter = items =>
    items.filter(item => {
        if (
            item.status.uploadStatus !== "processed" &&
            item.status.uploadStatus !== "uploaded"
        ) {
            return true;
        }

        if (item.status.privacyStatus === "private") {
            return true;
        }

        return false;
    });

const showDuplicatesFilter = (items, duplicateWords) => {
    let tmp = {};

    for (let item of items) {
        let words = item.snippet.title
            .replace(
                /`|~|!|@|#|\$|%|\^|&|\*|\(|\)|\+|=|\[|\{|\]|\}|\||\\|'|<|,|\.|>|\?|\/|"|;|:|-/g,
                ""
            )
            .match(/\S+/g);

        let duplicate = "";

        if (words.length <= duplicateWords) {
            duplicate = words.join("");
            if (!tmp[duplicate]) {
                tmp[duplicate] = [item];
            } else {
                tmp[duplicate].push(item);
            }
        } else {
            for (let i = 0; i < words.length; i++) {
                duplicate = duplicate + " " + words[i];
                if ((i + 1) % duplicateWords === 0) {
                    duplicate = duplicate.trim();
                    if (!tmp[duplicate]) {
                        tmp[duplicate] = [item];
                    } else {
                        tmp[duplicate].push(item);
                    }
                    duplicate = "";
                }
            }
        }
    }

    let duplicates = [];

    for (let key in tmp) {
        if (tmp[key].length > 1) {
            duplicates.push({ kind: "message", message: key + ":" });
            tmp[key].map(item => duplicates.push(item));
        }
    }

    return duplicates;
};

export { getUserData, showUnavailableFilter, showDuplicatesFilter };
