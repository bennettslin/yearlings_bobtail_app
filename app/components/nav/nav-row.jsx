import React from 'react'
import ProgressBar from '../progress/progress-bar'
import ProgressHelper from 'helpers/progress-helper'

/*************
 * CONTAINER *
 *************/

const NavRow = (props) => {

    const { song,
            songIndex,
            isSelected,
            onSongClick } = props,

        songTitle = song.title,
        sumTask = ProgressHelper.calculateSumTask(song.tasks),
        onClick = !isSelected ? e => onSongClick(e, songIndex) : null

    return (
        <NavRowView {...props}
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
    maxTotalNeededHours,

    // From controller.
    songTitle,
    sumTask,
    onClick

}) => (

    <div className={`row primary-row${isSelected ? ' selected' : ''}`}>
        <ProgressBar
            sumTask={sumTask}
            maxTotalNeededHours={maxTotalNeededHours}
        />
        <div className="text-cell-wrapper">
            <a
                className={`text-cell text${isSelected ? '' : ' enabled'}`}
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
