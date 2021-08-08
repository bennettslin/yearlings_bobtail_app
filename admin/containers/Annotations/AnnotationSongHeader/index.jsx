import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIndexedTitleForSong, getSongsNotLoguesCount } from '../../../../src/api/album/songs'
import { getAnnotationCountForSong, getAnnotationTodoCountForSong } from '../../../../src/api/album/annotations'

const AnnotationSongHeader = ({ songIndex }) => {
    const
        hue = (songIndex - 1) / getSongsNotLoguesCount() * 360,
        totalCount = getAnnotationCountForSong(songIndex),
        todoCount = getAnnotationTodoCountForSong(songIndex),
        percentageDone = parseInt(
            todoCount / totalCount * 100,
        )

    return (
        <div
            {...{
                className: cx(
                    'TempGlobalAnnotationSongHeader',
                    'textShadow__light',
                    'Rancho',
                    'fCC',
                ),
                style: {
                    backgroundColor: `hsla(${hue}, 20%, 75%, 0.9)`,
                },
            }}
        >
            <span>
                {getIndexedTitleForSong(songIndex)}
            </span>
            <span>
                {todoCount} / {totalCount} ({percentageDone}%)
            </span>
        </div>
    )
}

AnnotationSongHeader.propTypes = {
    songIndex: PropTypes.number.isRequired,
}

export default AnnotationSongHeader
