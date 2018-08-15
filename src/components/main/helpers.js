import {
    startPlaylistsFetch,
    setPlaylists,
    displayError
} from "../../redux/actions";

const getPlaylists = dispatch => {
    dispatch(startPlaylistsFetch());
    fetch("/api/getplaylists")
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

export { getPlaylists };
