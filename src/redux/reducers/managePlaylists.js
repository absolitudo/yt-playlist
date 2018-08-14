import playlistsinfo from "./forDevPlaylists.json";
// display: playlists, selectedPlaylist

const defaultState = {
    display: "playlists",
    playlists: {
        items: playlistsinfo,
        fetched: true
    },
    selectedPlaylist: {
        fetched: false,
        id: null,
        items: []
    }
};

const managePlaylists = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_PLAYLISTS":
            return setPlaylists(action.payload);
        default:
            return state;
    }
};

const setPlaylists = payload => ({
    items: payload,
    fetched: true
});

export default managePlaylists;
