import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFilter, setDuplicateWords } from "../../../../redux/actions";
import constants from "../../../../constants";
import { Filter } from "./index";

const ShowDuplicates = props => (
    <Filter showClear={props.showClear}>
        <form onSubmit={event => handleSubmit(event, props.setFilter)}>
            Matching words in titles:
            <input
                type="number"
                step="1"
                min="2"
                max="10"
                value={props.duplicateWords}
                onChange={event => props.setDuplicateWords(event.target.value)}
            />
        </form>
    </Filter>
);

const handleSubmit = (event, setFilter) => {
    event.preventDefault();
    setFilter(constants.filters.showDuplicates);
};

const mapStateToProps = state => ({
    showClear:
        state.managePlaylists.selectedPlaylist.filters.selectedFilter ===
        constants.filters.showDuplicates,
    duplicateWords:
        state.managePlaylists.selectedPlaylist.filters.duplicateWords
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setFilter, setDuplicateWords }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowDuplicates);
