import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIndexedTitleForSong, getSongsNotLoguesCount } from '../../../../src/endpoint/album/songs'
import { getAnnotationCountForSong, getAnnotationTodoCountForSong } from '../../../../src/endpoint/album/annotations'
import { getShownAnnotationIndices } from '../helpers'

const AnnotationSongHeader = ({ songIndex, showAll }) => {
    const
        hue = (songIndex - 1) / getSongsNotLoguesCount() * 360,
        totalCount = getAnnotationCountForSong(songIndex),
        todoCount = getAnnotationTodoCountForSong(songIndex),
        percentageDone = parseInt(
            todoCount / totalCount * 100,
        )

    return getShownAnnotationIndices({ songIndex, showAll }).length ? (
        <div
            {...{
                className: cx(
                    'TempGlobalAnnotationSongHeader',
                    'textShadow__light',
                    'font__heading',
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
    ) : null
}

AnnotationSongHeader.propTypes = {
    songIndex: PropTypes.number.isRequired,
    showAll: PropTypes.bool.isRequired,
}

export default AnnotationSongHeader
