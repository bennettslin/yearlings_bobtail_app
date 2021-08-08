import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Annotation from '../Annotation'
import {
    getAnnotationIndices,
    getTodoForAnnotation,
} from '../../../../src/api/album/annotations'
import { getSongsNotLoguesCount } from '../../../../src/api/album/songs'

const AnnotationSongColumn = ({ songIndex, showAll }) => {
    const
        songColumnElement = useRef(),
        hue = (songIndex - 1) / getSongsNotLoguesCount() * 360

    return (
        <div
            {...{
                ref: songColumnElement,
                className: 'TempGlobalAnnotationSongColumn',
                style: {
                    backgroundColor: `hsl(${hue}, 25%, 45%)`,
                },
            }}
        >
            {getAnnotationIndices(songIndex)
                .filter(annotationIndex => (
                    // Only show annotations left todo.
                    showAll ||
                    getTodoForAnnotation(songIndex, annotationIndex)
                ))
                .map(annotationIndex => (
                    <Annotation
                        {...{
                            key: annotationIndex,
                            songIndex,
                            annotationIndex,
                        }}
                    />
                ))
            }
        </div>
    )
}

AnnotationSongColumn.propTypes = {
    songIndex: PropTypes.number.isRequired,
    showAll: PropTypes.bool.isRequired,
}

export default AnnotationSongColumn
