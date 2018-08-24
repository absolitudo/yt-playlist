import React from "react";
import { connect } from "react-redux";
import { convertViewCount } from "../helpers";
import { convertTime } from "../helpers";
import deleteIcon from "../../../assets/outline-delete-24px.svg";

const SelectedPlaylist = props => (
    <ul className="yt-items">
        {props.items.map((data, index) => (
            <li key={index}>
                <ImageContainer data={data} />
                <DataContainer data={data} />
                <RemoveItem />
            </li>
        ))}
    </ul>
);

const ImageContainer = ({ data }) => (
    <div className="yt-img-conatiner">
        <img src={data.snippet.thumbnails.medium.url} alt="video" />
    </div>
);

const DataContainer = ({ data }) => (
    <div className="yt-data-container">
        <Title data={data} />
        <div className="yt-data-metadata">
            <MetadataContainer data={data} />
            <Description data={data} />
        </div>
    </div>
);

const Title = ({ data }) => (
    <h3 className="yt-data-title">
        <a href={"https://youtube.com/watch?v=" + data.contentDetails.videoId}>
            {data.snippet.title}
        </a>
    </h3>
);

const MetadataContainer = ({ data }) => (
    <div className="yt-data-metadata-container">
        <DataHolder>{data.snippet.channelTitle}</DataHolder>
        <Separator />
        <DataHolder>
            {convertViewCount(data.statistics.viewCount)} views
        </DataHolder>
        <Separator />
        <DataHolder>{convertTime(data.snippet.publishedAt)}</DataHolder>
    </div>
);

const RemoveItem = props => (
    <div className="yt-delete-container">
        <img src={deleteIcon} alt="delete" />
    </div>
);

const Description = ({ data }) => (
    <p className="yt-data-description">{data.snippet.description}</p>
);

const DataHolder = ({ children }) => (
    <p className="yt-data-metadata-dataholder">{children}</p>
);

const Separator = () => <span className="separator">•</span>;

const mapStateToProps = state => ({
    items: state.managePlaylists.selectedPlaylist.items
});

export default connect(mapStateToProps)(SelectedPlaylist);