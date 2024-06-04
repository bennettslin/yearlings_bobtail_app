import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Annotation from '../Annotation'
import { getSongsAndLoguesCount } from '../../../../src/endpoint/album/songs'
import {
    getHasTodoForSongOverview,
    getShownAnnotationIndices,
} from '../helpers'
import Overview from '../Overview'

const AnnotationSongColumn = ({ songIndex, showAll }) => {
    const
        songColumnElement = useRef(),
        hue = (songIndex - 1) / getSongsAndLoguesCount() * 360,
        hasOverviewTodo = getHasTodoForSongOverview(songIndex),
        shownAnnotationIndices = getShownAnnotationIndices({
            songIndex,
            showAll,
        })

    return showAll || shownAnnotationIndices.length || hasOverviewTodo ? (
        <div
            {...{
                ref: songColumnElement,
                className: 'TempGlobalAnnotationSongColumn',
                style: {
                    backgroundColor: `hsl(${hue}, 25%, 45%)`,
                },
            }}
        >
            {(showAll || hasOverviewTodo) && (
                <Overview {...{ songIndex }} />
            )}
            {shownAnnotationIndices.map(annotationIndex => (
                <Annotation
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

AnnotationSongColumn.propTypes = {
    songIndex: PropTypes.number.isRequired,
    showAll: PropTypes.bool.isRequired,
}

export default AnnotationSongColumn
