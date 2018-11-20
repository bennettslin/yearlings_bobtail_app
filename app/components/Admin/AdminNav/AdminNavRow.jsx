import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from '../progress/ProgressBar'
import ProgressHelper from 'helpers/progressHelper'
import { getSongTitle, getSongTasks } from 'helpers/dataHelper'

/*************
 * CONTAINER *
 *************/

const AdminNavRow = ({

    songIndex,
    isSelected,
    handleNavSongSelect,

    ...other }) => {

    const songTitle = getSongTitle({ songIndex }),
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
            <a
                className="text-cell text"
                onClick={onClick}
                onTouchStart={onClick}
            >
                {songTitle}
            </a>
            <span className="text-cell figure">
                {parseInt(sumTask.workedHours)}/{parseInt(sumTask.neededHours)}h
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
