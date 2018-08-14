import React from "react";
import { connect } from "react-redux";

const SelectedPlaylist = props => {
    props.items.map((data, index) => <li key={index}>{data.snippet.title}</li>);
};

const mapStateToProps = state => ({
    items: state.managePlaylists.selectedPlaylist.items
});

export default connect(mapStateToProps)(SelectedPlaylist);
