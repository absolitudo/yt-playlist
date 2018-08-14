import React from "react";
import { connect } from "react-redux";

const ShowPlaylists = props => (
    <ul className="playlists">
        {props.items.map((data, index) => (
            <li key={index}>
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

const mapStateToProps = state => ({
    items: state.managePlaylists.playlists.items
});

export default connect(mapStateToProps)(ShowPlaylists);
