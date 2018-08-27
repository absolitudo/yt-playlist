import React from "react";
import { connect } from "react-redux";
import { convertViewCount } from "../helpers";
import { convertTime } from "../helpers";
import deleteIcon from "../../../assets/outline-delete-24px.svg";
import { removeVideoFromPlaylist } from "../helpers";
import FiltersForPlaylistItems from "./filtersForPlaylistItems";

const SelectedPlaylist = props => (
    <React.Fragment>
        <FiltersForPlaylistItems />
        <ul className="yt-items">
            {props.items.map((data, index) => (
                <li
                    className={
                        "playlist-item" +
                        (data.kind !== "youtube#video" ? " message" : "")
                    }
                    key={index}
                >
                    {data.kind === "youtube#video" ? (
                        <PlaylistItem
                            data={data}
                            removing={props.removing}
                            dispatch={props.dispatch}
                        />
                    ) : (
                        <Message message={data.message} />
                    )}
                </li>
            ))}
        </ul>
    </React.Fragment>
);

const PlaylistItem = props => (
    <React.Fragment>
        <ImageContainer data={props.data} />
        <DataContainer data={props.data} />
        <RemoveItem
            removing={props.removing}
            playlistItemId={props.data.id}
            dispatch={props.dispatch}
        />
    </React.Fragment>
);

const Message = ({ message }) => <p>{message}</p>;

const ImageContainer = ({ data }) => (
    <div className="yt-img-container">
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

const RemoveItem = ({ dispatch, removing, playlistItemId }) => (
    <div className="yt-delete-container">
        <img
            src={deleteIcon}
            alt="remove"
            onClick={() =>
                removeVideoFromPlaylist(dispatch, playlistItemId, removing)
            }
        />
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
    items: state.managePlaylists.selectedPlaylist.filters.selectedFilter
        ? state.managePlaylists.selectedPlaylist.filters.filteredItems
        : state.managePlaylists.selectedPlaylist.items,
    removing: state.managePlaylists.selectedPlaylist.removing
});

export default connect(mapStateToProps)(SelectedPlaylist);
