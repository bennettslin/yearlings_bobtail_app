import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getIndexedTitleForSong,
    getSongsAndLoguesCount,
} from '../../../../../src/endpoint/album/songs'
import {
    getCountForSong,
    getRedosCountForSong,
    getReviewsCountForSong,
    getRevisionsCountForSong,
} from '../../../../endpoint/album/todos'

const TodoSongHeader = ({ songIndex, areDoneTodosHidden }) => {
    const
        hue = (songIndex - 1) / getSongsAndLoguesCount() * 360,
        totalCount = getCountForSong(songIndex),
        reviewsCount = getReviewsCountForSong(songIndex),
        revisionsCount = getRevisionsCountForSong(songIndex),
        redosCount = getRedosCountForSong(songIndex)

    return !areDoneTodosHidden || reviewsCount || revisionsCount || redosCount ? (
        <div
            {...{
                className: cx(
                    'TodoSongHeader',
                    'textShadow__light',
                    'font__heading',
                    'fCC',
                ),
                style: {
                    backgroundColor: `hsla(${hue}, 20%, 75%, 0.8)`,
                },
            }}
        >
            <span>
                {getIndexedTitleForSong(songIndex)}
            </span>
            <span>
                {
                    areDoneTodosHidden ?
                        `${redosCount} / ${revisionsCount} / ${reviewsCount}` :
                        `total: ${totalCount}`
                }
            </span>
        </div>
    ) : null
}

TodoSongHeader.propTypes = {
    songIndex: PropTypes.number.isRequired,
    areDoneTodosHidden: PropTypes.bool.isRequired,
}

export default TodoSongHeader
