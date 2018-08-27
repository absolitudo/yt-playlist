import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFilter } from "../../../../redux/actions";
import constants from "../../../../constants";
import { Filter } from "./index";

const ShowUnavailable = props => (
    <Filter showClear={props.showClear}>
        <span
            onClick={() => props.setFilter(constants.filters.showUnavailable)}
        >
            Show unavailable
        </span>
    </Filter>
);

const mapStateToProps = state => ({
    showClear:
        state.managePlaylists.selectedPlaylist.filters.selectedFilter ===
        constants.filters.showUnavailable
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setFilter }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowUnavailable);
