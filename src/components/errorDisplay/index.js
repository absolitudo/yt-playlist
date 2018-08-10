import React from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../redux/actions";
import { bindActionCreators } from "redux";

const ErrorDisplay = props => (
    <section className="error-display">
        {props.errors.map((error, index) => (
            <p key={index}>{error}</p>
        ))}
        <button onClick={props.clearErrors}>close</button>
    </section>
);

const mapStateToProps = state => ({
    errors: state.errors
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clearErrors }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorDisplay);
