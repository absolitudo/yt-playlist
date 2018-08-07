import React from "react";
import "./landing.css";

const Landing = () => (
    <section className="landing">
        <div className="l-container">
            <h2>
                Manage your{" "}
                <a
                    className="yt-red yt-link"
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    youtube
                </a>{" "}
                playlists
            </h2>
            <ul>
                <li>
                    Find{" "}
                    <span className="bold">privated/deleted/unavailable</span>{" "}
                    videos in your playlists with ease
                </li>
                <li>
                    Detect similar title names to help you identify{" "}
                    <span className="bold">duplicate</span> videos
                </li>
            </ul>
            <h2>
                <a href="/login" className="sign-in">
                    SIGN IN
                </a>{" "}
                with <span className="green">g</span>
                <span className="yellow">oo</span>
                <span className="red">g</span>
                <span className="blue">l</span>
                e
            </h2>
        </div>
        <div className="landing-divider" />
    </section>
);

export default Landing;
