import React from "react";
import { connect } from "react-redux";
import { convertViewCount } from "./helpers";
import { convertTime } from "./helpers";

const SelectedPlaylist = props => (
    <ul className="yt-items">
        {props.items.map((data, index) => (
            <li key={index}>
                <div className="yt-img-conatiner">
                    <img src={data.snippet.thumbnails.medium.url} alt="video" />
                </div>
                <div className="yt-data-container">
                    <h3 className="yt-data-title">
                        <a
                            href={
                                "https://youtube.com/watch?v=" +
                                data.contentDetails.videoId
                            }
                        >
                            {data.snippet.title}
                        </a>
                    </h3>
                    <div className="yt-data-metadata">
                        <div className="yt-data-metadata-container">
                            <DataHolder>{data.snippet.channelTitle}</DataHolder>
                            <Separator />
                            <DataHolder>
                                {convertViewCount(data.statistics.viewCount)}{" "}
                                views
                            </DataHolder>
                            <Separator />
                            <DataHolder>
                                {convertTime(data.snippet.publishedAt)}
                            </DataHolder>
                        </div>
                        <p className="yt-data-description">
                            {data.snippet.description}
                        </p>
                    </div>
                </div>
            </li>
        ))}
    </ul>
);

const DataHolder = props => (
    <p className="yt-data-metadata-dataholder">{props.children}</p>
);

const Separator = prosp => <span className="separator">•</span>;

const mapStateToProps = state => ({
    items: state.managePlaylists.selectedPlaylist.items
});

export default connect(mapStateToProps)(SelectedPlaylist);
