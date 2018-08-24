const defaultState = {
    display: "playlists",
    playlists: {
        items: [],
        fetching: false
    },
    selectedPlaylist: {
        fetching: false,
        id: null,
        items: [],
        removing: false
    }
};

const managePlaylists = (state = defaultState, action) => {
    switch (action.type) {
        case "START_PLAYLISTS_FETCH":
            return startPlaylistsFetch(state);
        case "SELECT_PLAYLIST":
            return selectPlaylist(state, action.payload);
        case "SET_SELECTED_PLAYLIST_ITEMS":
            return setSelectedPlaylistItems(state, action.payload);
        case "SET_PLAYLISTS":
            return setPlaylists(state, action.payload);
        case "FILTER_REMOVED_ITEM":
            return filterRemovedItem(state, action.payload);
        default:
            return state;
    }
};

const startPlaylistsFetch = state => ({
    ...state,
    playlists: {
        ...state.playlists,
        fetching: true
    }
});

const selectPlaylist = (state, payload) => ({
    ...state,
    display: "selectedPlaylist",
    selectedPlaylist: {
        ...state.selectedPlaylist,
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
        ...state.playlists,
        items: payload,
        fetching: false
    }
});

const filterRemovedItem = (state, playlistItemId) => ({
    ...state,
    selectedPlaylist: {
        ...state.selectedPlaylist,
        items: state.selectedPlaylist.items.filter(
            item => item.id !== playlistItemId
        ),
        removing: false
    }
});

export default managePlaylists;
