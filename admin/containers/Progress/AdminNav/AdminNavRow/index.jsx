import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import SongDispatcher from '../../../../../app/handlers/Song/Dispatcher'
import ProgressBar from '../../ProgressBar'

import { getTitleForSong } from '../../../../../app/album/api/songs'
import { populateRefs } from '../../../../../app/helpers/ref'
import { getSongTasks } from './helper'
import { getSumOfTasks } from '../helper'

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

            songTitle = getTitleForSong({ songIndex }),
            albumTasks = getSongTasks(songIndex),
            sumTask = getSumOfTasks(albumTasks)

        return (
            <>
                <AdminNavRowView {...other}
                    {...{
                        isSelected,
                        songTitle,
                        sumTask,
                        onClick: this._handleSongClick
                    }}
                />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
            </>
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

}) => {
    const {
        workedHours,
        neededHours
    } = sumTask

    return (
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
                    {...{ onClick }}
                >
                    {songTitle}
                </a>
                <span className="text-cell figure">
                    {parseInt(workedHours)}/{parseInt(neededHours)}h
                </span>
            </div>
        </div>
    )
}

AdminNavRowView.propTypes = {
    songTitle: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    sumTask: PropTypes.object.isRequired,
    maxTotalNeededHours: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default AdminNavRow