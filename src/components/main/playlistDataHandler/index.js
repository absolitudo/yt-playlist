import React from "react";
import constants from "../../../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeManagePlaylistDisplay } from "../../../redux/actions";
import refreshIcon from "../../../assets/baseline-update-24px.svg";
import backIcon from "../../../assets/baseline-keyboard_backspace-24px.svg";

const PlaylistDataHandler = props => (
    <section className="playlist-data-handler">
        {props.display === constants.display.selectedPlaylist && (
            <IconHolder>
                <BackIcon
                    changeManagePlaylistDisplay={
                        props.changeManagePlaylistDisplay
                    }
                />
            </IconHolder>
        )}
        <IconHolder>
            <RefreshIcon />
        </IconHolder>
    </section>
);

const IconHolder = props => <div className="icon-holder">{props.children}</div>;

const RefreshIcon = props => <img src={refreshIcon} alt="refresh" />;

const BackIcon = props => (
    <img
        src={backIcon}
        alt="back"
        onClick={() =>
            props.changeManagePlaylistDisplay(constants.display.playlists)
        }
    />
);

const mapStateToProps = state => ({
    display: state.managePlaylists.display
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeManagePlaylistDisplay }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistDataHandler);
