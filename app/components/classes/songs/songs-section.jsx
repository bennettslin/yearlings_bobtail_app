import React from 'react';
import SongRow from './song-row.jsx';
import ProgressFooter from '../progress/progress-footer.jsx';
import ProgressHelper from '../../helpers/progress-helper.js';

/*************
 * CONTAINER *
 *************/

const SongsSection = (props) => {

    const { songs,
            allTasks } = props,

        maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromSongs(songs),
        sumAllTasks = ProgressHelper.calculateSumAllTasks(allTasks);

    return (
        <SongsSectionView {...props}
            maxTotalNeededHours={maxTotalNeededHours}
            sumAllTasks={sumAllTasks}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const SongsSectionView = ({

    // From props.
    songs,
    selectedSongIndex,
    onSongClick,

    // From controller.
    maxTotalNeededHours,
    sumAllTasks

}) => (

    <div className="section songs-section">
        <div className="row">
            <div className="text-cell-wrapper">
                <h3 className="text-cell text">song</h3>
                <h3 className="text-cell figure">progress</h3>
            </div>
        </div>
        {songs.map((song, index) => {
            const songIndex = index + 1,
                isSelected = selectedSongIndex === songIndex;
            return (
                <SongRow
                    key={songIndex}
                    song={song}
                    songIndex={songIndex}
                    maxTotalNeededHours={maxTotalNeededHours}
                    isSelected={isSelected}
                    onSongClick={onSongClick}
                />
            );
        })}
        <div className="row">
            <ProgressFooter
                sumTask={sumAllTasks}
            />
        </div>
    </div>
);

export default SongsSection;