const setShowAccountInfo = payload => ({
    type: "SET_SHOW_ACCOUNT_INFO",
    payload
});

const logOut = () => ({
    type: "LOGOUT"
});

const setPlaylists = payload => ({
    type: "SET_PLAYLISTS",
    payload
});

const clearErrors = () => ({
    type: "CLEAR_ERRORS"
});

const displayError = payload => ({
    type: "DISPLAY_ERROR",
    payload
});

export { setShowAccountInfo, logOut, setPlaylists, clearErrors, displayError };
