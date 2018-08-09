import React from "react";
import { connect } from "react-redux";

const ShowPlaylists = props => (
    <ul>{props.items.map(data => <li>{data.id}</li>)}</ul>
);

const mapStateToProps = state => ({
    items: state.playlists.items
});

export default connect(mapStateToProps)(ShowPlaylists);
