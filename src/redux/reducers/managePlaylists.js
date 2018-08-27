import constants from "../../constants";
import { showUnavailableFilter, showDuplicatesFilter } from "./helpers";

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
            duplicateWords: 2,
            filteredItems: []
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

const setFilter = (state, selectedFilter) => {
    let filteredItems = [];

    switch (selectedFilter) {
        case constants.filters.showUnavailable:
            filteredItems = showUnavailableFilter(state.selectedPlaylist.items);
            break;
        case constants.filters.showDuplicates:
            filteredItems = showDuplicatesFilter(
                state.selectedPlaylist.items,
                state.selectedPlaylist.filters.duplicateWords
            );
            break;
        default:
            filteredItems = [];
    }

    return {
        ...state,
        selectedPlaylist: {
            ...state.selectedPlaylist,
            filters: {
                ...state.selectedPlaylist.filters,
                selectedFilter: selectedFilter,
                filteredItems: filteredItems
            }
        }
    };
};

const setDuplicateWords = (state, duplicateWords) => ({
    ...state,
    selectedPlaylist: {
        ...state.selectedPlaylist,
        filters: {
            ...state.selectedPlaylist.filters,
            duplicateWords: duplicateWords
        }
    }
});

export default managePlaylists;
