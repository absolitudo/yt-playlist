import constants from "../../constants";

const defaultState = {
    display: constants.display.playlists,
    playlists: {
        items: [],
        fetching: false
    },
    selectedPlaylist: {
        fetching: false,
        id: null,
        items: [],
        removing: false,
        filters: {
            selectedFilter: null,
            duplicateWords: 2
        }
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
        case "CHANGE_MANAGE_PLAYLIST_DISPLAY":
            return changeManagePlaylistDisplay(state, action.payload);
        case "SET_FILTER":
            return setFilter(state, action.payload);
        case "SET_DUPLICATE_WORDS":
            return setDuplicateWords(state, action.payload);
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
    display: constants.display.selectedPlaylist,
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
    display: constants.display.playlists,
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

const changeManagePlaylistDisplay = (state, display) => ({
    ...state,
    display
});

const setFilter = (state, selectedFilter) => ({
    ...state,
    selectedPlaylist: {
        ...state.selectedPlaylist,
        filters: {
            ...state.selectedPlaylist.filters,
            selectedFilter: selectedFilter
        }
    }
});

const setDuplicateWords = (state, words) => ({
    ...state,
    selectedPlaylist: {
        ...state.selectedPlaylist,
        filters: {
            ...state.selectedPlaylist.filters,
            duplicateWords: words
        }
    }
});

export default managePlaylists;
