import React from "react";
import "./errorDisplay.css";
import { connect } from "react-redux";
import { clearErrors } from "../../redux/actions";
import { bindActionCreators } from "redux";

const ErrorDisplay = props => (
    <section className="error-display">
        <div className="error-msg-container">
            {props.errors.map((error, index) => (
                <p key={index}>{error}</p>
            ))}
        </div>
        <div className="error-msg-close">
            <a className="red" onClick={props.clearErrors}>
                CLOSE
            </a>
        </div>
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
