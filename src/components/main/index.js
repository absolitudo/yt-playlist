import React from "react";
import "./main.css";
import { connect } from "react-redux";
import Landing from "./landing";
import PlaylistDataHandler from "./playlistDataHandler";
import ManagePlaylists from "./managePlaylists";

const Main = props => (
    <main>
        {props.loginState.userName && <PlaylistDataHandler />}
        {props.loginState.userName ? <ManagePlaylists /> : <Landing />}
    </main>
);

const mapStateToProps = state => ({
    loginState: state.loginState
});

export default connect(mapStateToProps)(Main);
