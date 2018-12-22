import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'

import SongDispatcher from '../../../handlers/SongHandler/Dispatcher'
import ProgressBar from '../ProgressBar'

import { getSongTitle } from 'helpers/data'
import { populateRefs } from 'helpers/ref'
import {
    getSongTasks,
    getSumOfTasks
} from '../helper'

/*************
 * CONTAINER *
 *************/

class AdminNavRow extends PureComponent {

    static propTypes = {
        songIndex: PropTypes.number.isRequired,
        isSelected: PropTypes.bool.isRequired
    }

    _handleSongClick = () => {
        this.dispatchSong({ selectedSongIndex: this.props.songIndex })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {

                songIndex,
                isSelected,

                ...other
            } = this.props,

            songTitle = getSongTitle({ songIndex }),
            allSongTasks = getSongTasks(songIndex),
            sumTask = getSumOfTasks(allSongTasks)

        return (
            <___>
                <AdminNavRowView {...other}
                    isSelected={isSelected}
                    songTitle={songTitle}
                    sumTask={sumTask}
                    onClick={this._handleSongClick}
                />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
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
            {...{
                sumTask,
                maxTotalNeededHours
            }}
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
