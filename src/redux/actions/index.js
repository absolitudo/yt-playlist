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

const selectPlaylist = payload => ({
    type: "SELECT_PLAYLIST",
    payload
});

const setSelectedPlaylistItems = payload => ({
    type: "SET_SELECTED_PLAYLIST_ITEMS",
    payload
});

export {
    setShowAccountInfo,
    logOut,
    setPlaylists,
    clearErrors,
    displayError,
    selectPlaylist,
    setSelectedPlaylistItems
};
