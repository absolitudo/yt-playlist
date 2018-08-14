import React from "react";
import ShowPlaylists from "./showPlaylists";
import SelectedPlaylist from "./selectedPlaylist";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPlaylists, displayError } from "../../redux/actions";

class ManagePlaylists extends React.Component {
    componentDidMount() {
        fetch("/getplaylists")
            .then(res => res.json())
            .then(res => {
                if (!res.error) {
                    this.props.setPlaylists(res);
                } else {
                    this.props.displayError(res.error);
                }
            })
            .catch(e => this.props.displayError(e.toString()));
    }

    render() {
        return (
            <section className="manage-playlists">
                {selectDisplay(this.props.display)}
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
    }
};

const mapStateToProps = state => ({
    display: state.managePlaylists.display
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setPlaylists, displayError }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagePlaylists);
