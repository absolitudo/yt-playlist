import {
    startPlaylistsFetch,
    setPlaylists,
    selectPlaylist,
    setSelectedPlaylistItems,
    displayError
} from "../../redux/actions";

const getPlaylists = dispatch => {
    dispatch(startPlaylistsFetch());
    fetch("http://ide50-absolitudo.cs50.io:8080/api/getplaylists", {
        mode: "no-cors"
    })
        .then(res => res.json())
        .then(res => {
            if (!res.error) {
                dispatch(setPlaylists(res));
            } else {
                dispatch(displayError(res.error));
            }
        })
        .catch(e => dispatch(displayError(e.toString())));
};

const handlePlaylistSelection = (dispatch, playlistId) => {
    dispatch(selectPlaylist(playlistId));
    fetch("/api/getplaylistitems", {
        headers: {
            "playlist-id": playlistId
        }
    })
        .then(res => res.json())
        .then(res => {
            if (!res.error) {
                dispatch(dispatch(setSelectedPlaylistItems(res)));
            } else {
                dispatch(displayError(res.error));
            }
        })
        .catch(e => dispatch(displayError(e.toString())));
};

export { getPlaylists, handlePlaylistSelection };
