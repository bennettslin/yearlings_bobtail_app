import React from 'react';
import ProgressBar from '../progress/progress-bar.jsx';
import ProgressHelper from '../../helpers/progress-helper.js';

/*************
 * CONTAINER *
 *************/

const SongRow = (props) => {

    const { song,
            songIndex,
            isSelected,
            onSongClick } = props,

        songTitle = song.title,
        sumTask = ProgressHelper.calculateSumTask(song.tasks),
        onClick = () => !isSelected ? onSongClick(songIndex) : null;

    return (
        <SongRowView {...props}
            songTitle={songTitle}
            sumTask={sumTask}
            onClick={onClick}
        />
    );
}

/****************
 * PRESENTATION *
 ****************/

const SongRowView = ({

    // From props.
    songIndex,
    isSelected,
    maxTotalNeededHours,

    // From controller.
    songTitle,
    sumTask,
    onClick

}) => (

    <div className={'row primary-row' + (isSelected ? ' played' : '')}>
        <ProgressBar
            sumTask={sumTask}
            maxTotalNeededHours={maxTotalNeededHours}
        />
        <div className="text-cell-wrapper">
            <a
                className="text-cell text"
                onClick={onClick}
            >
                {songIndex + '. ' + songTitle}
            </a>
            <span className="text-cell figure">
                {sumTask.workedHours}/{sumTask.neededHours}h
            </span>
        </div>
    </div>
);

export default SongRow;