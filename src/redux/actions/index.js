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

const startPlaylistsFetch = () => ({
    type: "START_PLAYLISTS_FETCH"
});

const filterRemovedItem = payload => ({
    type: "FILTER_REMOVED_ITEM",
    payload
});

const changeManagePlaylistDisplay = payload => ({
    type: "CHANGE_MANAGE_PLAYLIST_DISPLAY",
    payload
});

const setFilter = payload => ({
    type: "SET_FILTER",
    payload
});

const setDuplicateWords = payload => ({
    type: "SET_DUPLICATE_WORDS",
    payload
});

export {
    setShowAccountInfo,
    logOut,
    setPlaylists,
    clearErrors,
    displayError,
    selectPlaylist,
    setSelectedPlaylistItems,
    startPlaylistsFetch,
    filterRemovedItem,
    changeManagePlaylistDisplay,
    setFilter,
    setDuplicateWords
};
