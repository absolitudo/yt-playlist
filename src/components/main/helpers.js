import {
    startPlaylistsFetch,
    setPlaylists,
    selectPlaylist,
    setSelectedPlaylistItems,
    displayError
} from "../../redux/actions";
import playlists from "./forDevPlaylists.json";
import aPlaylist from "./funPlaylist.json";

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
        .catch(e => {
            dispatch(setPlaylists(playlists));
            //dispatch(displayError(e.toString()))
        });
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
                dispatch(setSelectedPlaylistItems(res));
            } else {
                dispatch(displayError(res.error));
            }
        })
        .catch(e => {
            dispatch(setSelectedPlaylistItems(aPlaylist));
            //dispatch(displayError(e.toString()))
        });
};

const convertViewCount = viewCount => {
    if (viewCount < 1000) {
        return viewCount;
    } else if (viewCount < 1000 * 1000) {
        return Math.floor(viewCount / 1000) + " K";
    } else if (viewCount < 1000 * 1000 * 1000) {
        return Math.floor((viewCount * 10) / (1000 * 1000)) / 10 + " M";
    }

    return Math.floor((viewCount * 10) / (1000 * 1000 * 1000)) / 10 + " B";
};

const convertTime = timeString => {
    const days = milisecToDay(
        new Date().getTime() - new Date(timeString).getTime()
    );

    if (days < 1) {
        return Math.floor(days / 24) + " hours";
    } else if (days < 30) {
        return Math.floor(days) + " days";
    } else if (days < 365) {
        return Math.floor(days / 30) + " months";
    }

    return Math.floor(days / 365) + " years";
};

const milisecToDay = milisec => milisec / 1000 / 60 / 60 / 24;

export { getPlaylists, handlePlaylistSelection, convertViewCount, convertTime };
