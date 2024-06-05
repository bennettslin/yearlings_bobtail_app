import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getIndexedTitleForSong,
    getSongsAndLoguesCount,
} from '../../../../../src/endpoint/album/songs'
import {
    getCountForSong,
    getReviewsCountForSong,
    getRevisionsCountForSong,
    getTodosCountForSong,
} from '../../../../endpoint/album/todos'

const TodoSongHeader = ({ songIndex, showAll }) => {
    const
        hue = (songIndex - 1) / getSongsAndLoguesCount() * 360,
        totalCount = getCountForSong(songIndex),
        todosCount = getTodosCountForSong(songIndex),
        reviewsCount = getReviewsCountForSong(songIndex),
        revisionsCount = getRevisionsCountForSong(songIndex),
        percentageDone = parseInt(todosCount / totalCount * 100)

    return showAll || todosCount ? (
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
                {revisionsCount} / {reviewsCount} / {totalCount} ({percentageDone}%)
            </span>
        </div>
    ) : null
}

TodoSongHeader.propTypes = {
    songIndex: PropTypes.number.isRequired,
    showAll: PropTypes.bool.isRequired,
}

export default TodoSongHeader
