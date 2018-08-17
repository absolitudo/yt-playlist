import React from "react";
import { connect } from "react-redux";

const SelectedPlaylist = props => (
    <ul>
        {props.items.map((data, index) => (
            <li key={index}>{data.snippet.title}</li>
        ))}
    </ul>
);

const mapStateToProps = state => ({
    items: state.managePlaylists.selectedPlaylist.items
});

export default connect(mapStateToProps)(SelectedPlaylist);
