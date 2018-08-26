import React from "react";
import "./navigation.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PlaylistDataHandler from "./playlistDataHandler";
import { setShowAccountInfo, logOut } from "../../redux/actions";

const Navigation = props => (
    <nav>
        {props.loginState.userName ? (
            <LoggedIn
                loginState={props.loginState}
                setShowAccountInfo={props.setShowAccountInfo}
                navState={props.navState}
                logOut={props.logOut}
            />
        ) : (
            <LoggedOut />
        )}
    </nav>
);

const LoggedIn = props => (
    <React.Fragment>
        <PlaylistDataHandler />
        <div className="user-status">
            <button
                className="img-container"
                onFocus={() => props.setShowAccountInfo(true)}
                onBlur={() => props.setShowAccountInfo(false)}
            >
                <img src={props.loginState.thumbnail} alt="thumbnail" />
            </button>
            {props.navState.showAccountInfo && (
                <AccountInfo
                    userName={props.loginState.userName}
                    logOut={props.logOut}
                    setShowAccountInfo={props.setShowAccountInfo}
                />
            )}
        </div>
    </React.Fragment>
);

const AccountInfo = props => (
    <div className="nav-account-info">
        <p>{props.userName}</p>
        <button onMouseDown={props.logOut}>SIGN OUT</button>
    </div>
);

const LoggedOut = () => (
    <div className="user-status">
        <a href="/login" className="sign-in">
            SIGN IN
        </a>
    </div>
);

const mapStateToProps = state => ({
    loginState: state.loginState,
    navState: state.nav
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setShowAccountInfo, logOut }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
