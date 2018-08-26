import React from "react";
import "./main.css";
import { connect } from "react-redux";
import Landing from "./landing";
import ManagePlaylists from "./managePlaylists";

const Main = props => (
    <main>{props.loginState.userName ? <ManagePlaylists /> : <Landing />}</main>
);

const mapStateToProps = state => ({
    loginState: state.loginState
});

export default connect(mapStateToProps)(Main);
