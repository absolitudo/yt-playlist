import React from "react";
import clearIcon from "../../../../assets/baseline-clear-24px.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFilter } from "../../../../redux/actions";
import ShowUnavailable from "./showUnavailable";
import ShowDuplicates from "./showDuplicates";

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setFilter }, dispatch);

const Filter = connect(
    null,
    mapDispatchToProps
)(({ children, selected, setFilter }) => (
    <div className={"filter" + (selected ? " selected" : "")}>
        {selected && (
            <img src={clearIcon} alt="clear" onClick={() => setFilter(null)} />
        )}
        {children}
    </div>
));

export { ShowDuplicates, ShowUnavailable, Filter };
