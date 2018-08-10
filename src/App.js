import React from "react";
import { connect } from "react-redux";
import Navigation from "./components/navigation";
import ErrorDisplay from "./components/errorDisplay";
import Main from "./components/main";

const App = props => (
    <React.Fragment>
        <Navigation />
        {props.errorDisplay && <ErrorDisplay />}
        <Main />
    </React.Fragment>
);

const mapStateToProps = state => ({
    errorDisplay: state.errors.length > 0 ? true : false
});

export default connect(mapStateToProps)(App);
