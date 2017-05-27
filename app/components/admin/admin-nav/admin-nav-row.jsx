import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from '../progress/progress-bar'
import ProgressHelper from '../../../helpers/progress-helper'
import { getSongTitle, getSongTasks } from '../../../helpers/data-helper'

/*************
 * CONTAINER *
 *************/

const AdminNavRow = ({

    songIndex,
    isSelected,
    handleNavSongSelect,

...other }) => {

    const songTitle = getSongTitle(songIndex),
        songTasks = getSongTasks(songIndex),
        sumTask = ProgressHelper.calculateSumTask(songTasks),
        onClick = e => handleNavSongSelect(e, songIndex)

    return (
        <AdminNavRowView {...other}
            isSelected={isSelected}
            songTitle={songTitle}
            sumTask={sumTask}
            onClick={onClick}
        />
    )
}

AdminNavRow.propTypes = {
    songIndex: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AdminNavRowView = ({

    // From props.
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

AdminNavRowView.propTypes = {
    songTitle: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    sumTask: PropTypes.object.isRequired,
    maxTotalNeededHours: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default AdminNavRow
