import React from 'react'
import ProgressBar from '../admin/progress/progress-bar'
import ProgressHelper from 'helpers/progress-helper'
import { getSongTitle } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const NavRow = ({

    song,
    songIndex,
    isSelected,
    handleNavSongSelect,

...other }) => {

    const isLogue = song.logue,
        songTitle = getSongTitle({ song, songIndex }, isLogue),
        sumTask = ProgressHelper.calculateSumTask(song.tasks),
        onClick = e => handleNavSongSelect(e, songIndex)

    return (
        <NavRowView {...other}
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
                {songTitle}
            </a>
            <span className="text-cell figure">
                {sumTask.workedHours}/{sumTask.neededHours}h
            </span>
        </div>
    </div>
)

export default NavRow
