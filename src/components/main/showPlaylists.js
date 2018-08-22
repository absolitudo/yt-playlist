import React from "react";
import { connect } from "react-redux";
import { handlePlaylistSelection } from "./helpers";

const ShowPlaylists = props => (
    <ul className="yt-items playlist">
        {props.items.map((data, index) => (
            <li
                onClick={() => handlePlaylistSelection(props.dispatch, data.id)}
                key={index}
            >
                <div className="yt-img-conatiner">
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
    items: state.managePlaylists.playlists.items
});

export default connect(mapStateToProps)(ShowPlaylists);
