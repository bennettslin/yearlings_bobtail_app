import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Annotation from '../Annotation'
import {
    getAnnotationIndices,
    getTodoForAnnotation,
} from '../../../../app/api/album/annotations'
import { getSongsNotLoguesCount } from '../../../../app/api/album/songs'
import { getWindowStorage } from '../../../../app/utils/storage'

const AnnotationSongColumn = ({ songIndex, showTodos }) => {
    const
        songColumnElement = useRef(),
        hue = (songIndex - 1) / getSongsNotLoguesCount() * 360

    const onScroll = () => {
        const newSongColumnScrollTopsObject = JSON.parse(
            getWindowStorage().songColumnScrollTops,
        )

        newSongColumnScrollTopsObject[songIndex] =
            songColumnElement.current.scrollTop

        getWindowStorage().songColumnScrollTops = JSON.stringify(
            newSongColumnScrollTopsObject,
        )
    }

    useEffect(() => {
        if (!getWindowStorage().songColumnScrollTops) {
            getWindowStorage().songColumnScrollTops = JSON.stringify({})
        }

        setTimeout(() => {
            songColumnElement.current.scrollTop =
                parseInt(
                    JSON.parse(getWindowStorage().songColumnScrollTops)[songIndex],
                ) || 0
        }, 2000)

    }, [])

    return (
        <div
            {...{
                ref: songColumnElement,
                className: 'TempGlobalAnnotationSongColumn',
                style: {
                    backgroundColor: `hsl(${hue}, 25%, 45%)`,
                },
                onScroll,
            }}
        >
            {getAnnotationIndices(songIndex)
                .filter(annotationIndex => (
                    // Only show annotations left todo.
                    showTodos ||
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
    showTodos: PropTypes.bool.isRequired,
}

export default AnnotationSongColumn
