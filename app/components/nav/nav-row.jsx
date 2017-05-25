import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from '../admin/progress/progress-bar'
import ProgressHelper from '../../helpers/progress-helper'
import { getSongTitle } from '../../helpers/data-helper'

/*************
 * CONTAINER *
 *************/

const NavRow = ({

    song,
    songIndex,
    isSelected,
    handleNavSongSelect,

...other }) => {

    const songTitle = getSongTitle(songIndex),
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

NavRow.propTypes = {
    song: PropTypes.object.isRequired,
    songIndex: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired
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

NavRowView.propTypes = {
    songTitle: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    accessHighlighted: PropTypes.bool.isRequired,
    sumTask: PropTypes.object.isRequired,
    maxTotalNeededHours: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default NavRow
