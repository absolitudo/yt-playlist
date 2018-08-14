import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    selectPlaylist,
    setSelectedPlaylistItems
} from "./../../redux/actions";

const ShowPlaylists = props => (
    <ul className="playlists">
        {props.items.map((data, index) => (
            <li
                onClick={() =>
                    handlePlaylistSelection(
                        data.id,
                        props.selectPlaylist,
                        props.setSelectedPlaylistData
                    )
                }
                key={index}
            >
                <div
                    className="playlist-picture-conatiner"
                    style={{
                        width: data.snippet.thumbnails.default.width,
                        height: data.snippet.thumbnails.default.height
                    }}
                >
                    <img
                        src={data.snippet.thumbnails.default.url}
                        alt="playlist thumbnail"
                    />
                </div>
                <div className="playlist-info">
                    <h3>{data.snippet.title}</h3>
                    <p>#{data.snippet.channelTitle}</p>
                </div>
            </li>
        ))}
    </ul>
);

const handlePlaylistSelection = (
    playlistId,
    selectPlaylist,
    setSelectedPlaylistData
) => {
    selectPlaylist(playlistId);
    fetch("/api/getplaylistitems", {
        headers: {
            "playlist-id": playlistId
        }
    })
        .then(res => res.json())
        .then(res => setSelectedPlaylistData(res));
};

const mapStateToProps = state => ({
    items: state.managePlaylists.playlists.items
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectPlaylist, setSelectedPlaylistItems }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPlaylists);
