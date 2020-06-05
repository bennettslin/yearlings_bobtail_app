import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import SongDispatcher from '../../../../../app/handlers/Song/Dispatcher'
import ProgressBar from '../../ProgressBar'
import { getIndexedTitleForSong } from '../../../../../app/api/album/songs'
import { getSongTasks } from './helper'
import { getSumOfTasks } from '../helper'

/*************
 * CONTAINER *
 *************/

const AdminNavRow = ({
    songIndex,
    isSelected,
    ...other

}) => {
    const dispatchSong = useRef

    const onClick = () => {
        dispatchSong.current({ selectedSongIndex: songIndex })
    }

    const
        songTitle = getIndexedTitleForSong(songIndex),
        albumTasks = getSongTasks(songIndex),
        sumTask = getSumOfTasks(albumTasks)

    return (
        <>
            <AdminNavRowView {...other}
                {...{
                    isSelected,
                    songTitle,
                    sumTask,
                    onClick
                }}
            />
            <SongDispatcher {...{ ref: dispatchSong }} />
        </>
    )
}

AdminNavRow.propTypes = {
    songIndex: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired
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
