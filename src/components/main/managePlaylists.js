import React from "react";
import LoadingSpinner from "../loadingSpinner";
import ShowPlaylists from "./showPlaylists";
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
                {this.props.playlists.fetched ? (
                    <ShowPlaylists playlists={this.props.playlists} />
                ) : (
                    <LoadingSpinner />
                )}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setPlaylists, displayError }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagePlaylists);
