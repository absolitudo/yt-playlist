import React from "react";
import { ShowUnavailable } from "./filters";
import { ShowDuplicates } from "./filters";

const FiltersForPlaylistItems = props => (
    <div className="filter-container">
        <ShowUnavailable />
        <ShowDuplicates />
    </div>
);
export default FiltersForPlaylistItems;
