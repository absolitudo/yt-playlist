import React from "react";
import "./navigation.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setShowAccountInfo, logOut } from "../../redux/actions";

const Navigation = props => (
    <nav>
        <div className="user-status">
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
        </div>
    </nav>
);

const LoggedIn = props => (
    <React.Fragment>
        <button
            className="img-container"
            onFocus={() => props.setShowAccountInfo(true)}
            onBlur={() => props.setShowAccountInfo(false)}
        >
            <img src={props.loginState.thumbnail} alt="thumbnail of the user" />
        </button>
        {props.navState.showAccountInfo && (
            <AccountInfo
                userName={props.loginState.userName}
                logOut={props.logOut}
                setShowAccountInfo={props.setShowAccountInfo}
            />
        )}
    </React.Fragment>
);

class AccountInfo extends React.Component {
    render() {
        return (
            <div className="nav-account-info">
                <p>{this.props.userName}</p>
                <button onMouseDown={this.props.logOut}>SIGN OUT</button>
            </div>
        );
    }
}

const LoggedOut = () => <a href="/login">SIGN IN</a>;

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
