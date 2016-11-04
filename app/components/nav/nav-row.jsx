import React from 'react'
import ProgressBar from '../progress/progress-bar'
import ProgressHelper from 'helpers/progress-helper'

/*************
 * CONTAINER *
 *************/

const NavRow = ({

    song,
    songIndex,
    isSelected,
    onSongClick,

...other }) => {

    const songTitle = song.title,
        sumTask = ProgressHelper.calculateSumTask(song.tasks),
        onClick = e => onSongClick(e, songIndex)

    return (
        <NavRowView {...other}
            songIndex={songIndex}
            isSelected={isSelected}
            songTitle={songTitle}
            sumTask={sumTask}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const NavRowView = ({

    // From props.
    songIndex,
    isSelected,
    accessHighlighted,
    maxTotalNeededHours,

    // From controller.
    songTitle,
    sumTask,
    onClick

}) => (
    <div className={`row primary-row${isSelected ? ' selected' : ''}${accessHighlighted ? ' access-highlighted' : ''}`}>
        <ProgressBar
            sumTask={sumTask}
            maxTotalNeededHours={maxTotalNeededHours}
        />
        <div className="text-cell-wrapper">
            {/* TODO: Keep enabled for now, to allow user to reset the current song. In the future, consider disabling if *all* the default parameters are the same. */}
            <a
                className="text-cell text enabled"
                onClick={onClick}
            >
                {`${songIndex}. ${songTitle}`}
            </a>
            <span className="text-cell figure">
                {sumTask.workedHours}/{sumTask.neededHours}h
            </span>
        </div>
    </div>
)

export default NavRow
