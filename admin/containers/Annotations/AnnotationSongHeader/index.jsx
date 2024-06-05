import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getIndexedTitleForSong,
    getSongsAndLoguesCount,
} from '../../../../src/endpoint/album/songs'
import { getAnnotationCountForSong } from '../../../../src/endpoint/album/annotations'
import {
    getAnnotationTodoCountForSong,
    getHasTodoForSongOverview,
    getShownAnnotationIndices,
} from '../../../endpoint/album/todos'

const AnnotationSongHeader = ({ songIndex, showAll }) => {
    const
        hue = (songIndex - 1) / getSongsAndLoguesCount() * 360,
        getHasOverviewTodo = getHasTodoForSongOverview(songIndex),
        todoCount =
            getAnnotationTodoCountForSong(songIndex) +
            getHasOverviewTodo,
        totalCount = getAnnotationCountForSong(songIndex) + 1,
        percentageDone = parseInt(todoCount / totalCount * 100),
        shownAnnotationIndices = getShownAnnotationIndices({
            songIndex,
            showAll,
        })

    return showAll || shownAnnotationIndices.length || getHasOverviewTodo ? (
        <div
            {...{
                className: cx(
                    'TempGlobalAnnotationSongHeader',
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
