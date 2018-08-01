import React from "react";
import "./navigation.css";
import { connect } from "react-redux";

const Navigation = props => (
    <nav>
        <div className="user-status">
            {props.userData.userName ? (
                <LoggedIn userData={props.userData} />
            ) : (
                <LoggedOut userData={props.userData} />
            )}
        </div>
    </nav>
);

const LoggedIn = () => <p>logged in</p>;
const LoggedOut = () => <a href="/login">SIGN IN</a>;

const mapStateToProps = state => ({
    userData: state.loginStatus
});

export default connect(mapStateToProps)(Navigation);
