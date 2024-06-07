import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import TodoOverview from './Overview'
import TodoAnnotation from './Annotation'
import { getSongsAndLoguesCount } from '../../../../../src/endpoint/album/songs'
import {
    getHasOverviewTodo,
    getShownAnnotationIndices,
} from '../../../../endpoint/album/todos'

const TodoSongColumn = ({ songIndex, areDoneTodosHidden }) => {
    const
        songColumnElement = useRef(),
        hue = (songIndex - 1) / getSongsAndLoguesCount() * 360,
        hasOverviewTodo = getHasOverviewTodo(songIndex),
        shownAnnotationIndices = getShownAnnotationIndices({
            songIndex,
            areDoneTodosHidden,
        })

    return !areDoneTodosHidden || shownAnnotationIndices.length || hasOverviewTodo ? (
        <div
            {...{
                ref: songColumnElement,
                className: 'TodoSongColumn',
                style: {
                    backgroundColor: `hsl(${hue}, 25%, 45%)`,
                },
            }}
        >
            {(!areDoneTodosHidden || hasOverviewTodo) && (
                <TodoOverview {...{ songIndex }} />
            )}
            {shownAnnotationIndices.map(annotationIndex => (
                <TodoAnnotation
                    {...{
                        key: annotationIndex,
                        songIndex,
                        annotationIndex,
                    }}
                />
            ))}
        </div>
    ) : null
}

TodoSongColumn.propTypes = {
    songIndex: PropTypes.number.isRequired,
    areDoneTodosHidden: PropTypes.bool.isRequired,
}

export default TodoSongColumn
