import React from "react";
import "./main.css";
import { connect } from "react-redux";
import Landing from "./landing";
import Playlists from "./playlists";

const Main = props => (
    <main>{props.loginState.userName ? <Playlists /> : <Landing />}</main>
);

const mapStateToProps = state => ({
    loginState: state.loginState
});

export default connect(mapStateToProps)(Main);
