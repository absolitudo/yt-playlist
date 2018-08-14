const defaultState = {
    display: "playlists",
    playlists: {
        items: [],
        fetching: true
    },
    selectedPlaylist: {
        fetching: true,
        id: null,
        items: []
    }
};

const managePlaylists = (state = defaultState, action) => {
    switch (action.type) {
        case "SELECT_PLAYLIST":
            return selectPlaylist(state, action.payload);
        case "SET_SELECTED_PLAYLIST_ITEMS":
            return setSelectedPlaylistItems(state, action.payload);
        case "SET_PLAYLISTS":
            return setPlaylists(state, action.payload);
        default:
            return state;
    }
};

const selectPlaylist = (state, payload) => ({
    ...state,
    display: "selectedPlaylist",
    selectedPlaylist: {
        fetching: true,
        id: payload,
        items: []
    }
});

const setSelectedPlaylistItems = (state, payload) => ({
    ...state,
    selectedPlaylist: {
        ...state.selectedPlaylist,
        fetching: false,
        items: payload
    }
});

const setPlaylists = (state, payload) => ({
    ...state,
    display: "playlists",
    playlists: {
        items: payload,
        fetching: false
    }
});

export default managePlaylists;
