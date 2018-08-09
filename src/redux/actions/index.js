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

export { setShowAccountInfo, logOut, setPlaylists };
