import React from "react";
import { connect } from "react-redux";
import { fetchPlaylistFromId } from "../helpers";

const ShowPlaylists = props => (
    <ul className="yt-items playlist">
        {props.items.map((data, index) => (
            <li
                onClick={() =>
                    fetchPlaylistFromId(props.dispatch, data.id, props.fetching)
                }
                key={index}
            >
                <div className="yt-img-container">
                    <img
                        src={data.snippet.thumbnails.medium.url}
                        alt="playlist thumbnail"
                    />
                </div>
                <div className="yt-data-container">
                    <h3 className="yt-data-title">{data.snippet.title}</h3>
                    <div className="yt-data-metadata">
                        #{data.snippet.channelTitle}
                    </div>
                </div>
            </li>
        ))}
    </ul>
);

const mapStateToProps = state => ({
    items: state.managePlaylists.playlists.items,
    fetching:
        state.managePlaylists.playlists.fetching ||
        state.managePlaylists.selectedPlaylist.fetching
            ? true
            : false
});

export default connect(mapStateToProps)(ShowPlaylists);
