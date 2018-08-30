import React from "react";
import constants from "../../../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeManagePlaylistDisplay } from "../../../redux/actions";
import { fetchPlaylistFromId, getPlaylists } from "../../main/helpers";
import refreshIcon from "../../../assets/baseline-update-24px.svg";
import backIcon from "../../../assets/baseline-keyboard_backspace-24px.svg";

const PlaylistDataHandler = props => (
    <div className="playlist-data-handler">
        {props.display === constants.display.selectedPlaylist && (
            <IconHolder>
                <BackIcon
                    onClick={() =>
                        props.changeManagePlaylistDisplay(
                            constants.display.playlists
                        )
                    }
                />
            </IconHolder>
        )}
        <IconHolder>
            <RefreshIcon onClick={() => handleRefreshClick(props)} />
        </IconHolder>
    </div>
);

const IconHolder = props => <div className="icon-holder">{props.children}</div>;

const RefreshIcon = ({ onClick }) => (
    <div>
        <img src={refreshIcon} alt="refresh" onClick={onClick} />
    </div>
);

const BackIcon = ({ onClick }) => (
    <img src={backIcon} alt="back" onClick={onClick} />
);

const handleRefreshClick = props => {
    switch (props.display) {
        case constants.display.selectedPlaylist:
            fetchPlaylistFromId(
                props.dispatch,
                props.playlistId,
                props.fetching
            );
            break;
        case constants.display.playlists:
            getPlaylists(props.dispatch, props.fetching);
            break;
        default:
            return undefined;
    }
};

const mapStateToProps = state => ({
    display: state.managePlaylists.display,
    playlistId: state.managePlaylists.selectedPlaylist.id,
    fetching:
        state.managePlaylists.playlists.fetching ||
        state.managePlaylists.selectedPlaylist.fetching
            ? true
            : false
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ changeManagePlaylistDisplay }, dispatch),
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistDataHandler);
