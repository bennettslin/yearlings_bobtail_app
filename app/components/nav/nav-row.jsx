import React, { Component } from 'react';
import ProgressBar from '../progress/progress-bar.jsx';
import ProgressHelper from '../../helpers/progress-helper.js';

/*************
 * CONTAINER *
 *************/

const NavRow = (props) => {

    const { song,
            songIndex,
            isActive,
            onSongClick } = props,

        songTitle = song.title,
        sumTask = ProgressHelper.calculateSumTask(song.tasks),
        onClick = () => !isActive ? onSongClick(songIndex) : null;

    return (
        <NavRowView {...props}
            songTitle={songTitle}
            sumTask={sumTask}
            onClick={onClick}
        />
    );
}

/****************
 * PRESENTATION *
 ****************/

const NavRowView = ({

    // From props.
    songIndex,
    isActive,
    maxTotalNeededHours,

    // From controller.
    songTitle,
    sumTask,
    onClick

}) => (

    <div className={`row primary-row${isActive ? ' played' : ''}`}>
        <ProgressBar
            sumTask={sumTask}
            maxTotalNeededHours={maxTotalNeededHours}
        />
        <div className="text-cell-wrapper">
            <a
                className="text-cell text"
                onClick={onClick}
            >
                {`${songIndex}. ${songTitle}`}
            </a>
            <span className="text-cell figure">
                {sumTask.workedHours}/{sumTask.neededHours}h
            </span>
        </div>
    </div>
);

export default NavRow;
