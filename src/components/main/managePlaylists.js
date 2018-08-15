import React from "react";
import LoadingSpinner from "./../loadingSpinner";
import ShowPlaylists from "./showPlaylists";
import SelectedPlaylist from "./selectedPlaylist";
import { connect } from "react-redux";
import { getPlaylists } from "./helpers";

class ManagePlaylists extends React.Component {
    componentDidMount() {
        getPlaylists(this.props.dispatch);
    }

    render() {
        return (
            <section className="manage-playlists">
                {this.props.fetching ? (
                    <LoadingSpinner />
                ) : (
                    selectDisplay(this.props.display)
                )}
            </section>
        );
    }
}

const selectDisplay = display => {
    switch (display) {
        case "playlists":
            return <ShowPlaylists />;
        case "selectedPlaylist":
            return <SelectedPlaylist />;
        default:
            return <ShowPlaylists />;
    }
};

const mapStateToProps = state => ({
    display: state.managePlaylists.display,
    fetching:
        state.managePlaylists.playlists.fetching ||
        state.managePlaylists.selectedPlaylist.fetching
            ? true
            : false
});

export default connect(mapStateToProps)(ManagePlaylists);
